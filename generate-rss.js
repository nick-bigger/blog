import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";

/**
 * Escapes special characters in a string for XML.
 * @param {string} text - The text to escape.
 * @returns {string} The escaped text.
 */
function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const feedConfig = {
  title: "nick bigger",
  link: "https://conifercrown.com/#/blog",
  description: "unstructured and unregulated thoughts on stuff and things",
  language: "en-us",
};

/**
 * Reads Markdown files from a directory, parses their front matter,
 * and returns an array of BlogPost objects.
 */
function getBlogPostsFromMarkdown(directoryPath) {
  const posts = [];
  try {
    const files = fs.readdirSync(directoryPath);

    files.forEach((file) => {
      if (file.endsWith(".md")) {
        const filePath = path.join(directoryPath, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent); // Parse front matter

        const postData = data;

        if (
          postData.title &&
          postData.link &&
          postData.description &&
          postData.pubDate
        ) {
          posts.push({
            title: postData.title,
            link: postData.link,
            description: postData.description,
            pubDate: postData.pubDate,
          });
        } else {
          console.warn(
            `[WARNING] Skipping malformed Markdown file (missing front matter fields): ${file}`,
          );
        }
      }
    });
  } catch (error) {
    console.error(
      `[ERROR] Could not read Markdown posts from ${directoryPath}: ${error.message}`,
    );
    throw error;
  }
  return posts;
}

/**
 * Generates the RSS 2.0 XML string from blog post data and feed configuration.
 */
function generateRssFeed(posts) {
  if (!feedConfig.title || !feedConfig.link || !feedConfig.description) {
    throw new Error(
      "Please ensure feedConfig has title, link, and description.",
    );
  }

  const escapedFeedTitle = escapeXml(feedConfig.title);
  const escapedFeedLink = escapeXml(feedConfig.link);
  const escapedFeedDescription = escapeXml(feedConfig.description);

  // Set the lastBuildDate to the current date in GMT
  const lastBuildDate = new Date().toUTCString();

  let rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapedFeedTitle}</title>
    <link>${escapedFeedLink}</link>
    <description>${escapedFeedDescription}</description>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>${escapeXml(feedConfig.generator || "Custom RSS Feed Generator")}</generator>
    <language>${escapeXml(feedConfig.language || "en-us")}</language>
`;

  posts.forEach((post) => {
    if (!post.title || !post.link || !post.description || !post.pubDate) {
      console.warn(
        `[WARNING] Skipping malformed blog post due to missing data: ${JSON.stringify(post)}`,
      );
      return; // Skip this post if essential data is missing
    }

    const title = escapeXml(post.title);
    const link = escapeXml(post.link);
    const description = escapeXml(post.description);
    let pubDate;

    try {
      // Create a Date object from the post's pubDate string.
      // We manually add the timezone to ensure it's parsed as CST.
      // This is crucial for correctly converting it to UTC.
      const dateStringCST = post.pubDate.includes("CST")
        ? post.pubDate
        : `${post.pubDate} CST`;
      const date = new Date(dateStringCST);

      // The .toUTCString() method correctly formats the date for RSS
      pubDate = date.toUTCString();
    } catch (e) {
      console.warn(
        `[WARNING] Invalid pubDate for post "${post.title}": ${post.pubDate}. Using current GMT date. Error: ${e.message}`,
      );
      // Fallback to current GMT date if parsing fails
      pubDate = new Date().toUTCString();
    }

    rssXml += `
    <item>
      <title>${title}</title>
      <link>${link}</link>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${link}</guid>
    </item>
`;
  });

  rssXml += `
  </channel>
</rss>`;

  return rssXml;
}

try {
  const markdownPostsDir = path.join(process.cwd(), "src", "data", "posts");
  console.log(`Reading Markdown posts from: ${markdownPostsDir}`);

  const posts = getBlogPostsFromMarkdown(markdownPostsDir);

  const generatedXml = generateRssFeed(posts);

  const outputDir = path.join(process.cwd(), "public"); // Assumes 'public' folder at project root
  const outputFilePath = path.join(outputDir, "rss.xml");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFilePath, generatedXml, "utf8");
  console.log(
    `Successfully generated RSS feed and saved to: ${outputFilePath}`,
  );
} catch (error) {
  console.error(`[ERROR] Failed to generate RSS feed: ${error.message}`);
  process.exit(1);
}
