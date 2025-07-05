import { useMemo, useState } from "react";

import { format } from "date-fns";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { posts } from "@/data/posts";

export const Blog = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        // If tag is already selected, remove it.
        return prevTags.filter((t) => t !== tag);
      } else {
        // If tag is not selected, add it.
        return [...prevTags, tag];
      }
    });
  };

  const filteredAndSortedPosts = useMemo(() => {
    let currentPosts = [...posts];

    // 1. Filter by search term.
    if (searchTerm) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      currentPosts = currentPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowercasedSearchTerm) ||
          post.description.toLowerCase().includes(lowercasedSearchTerm),
      );
    }

    // 2. Filter by selected tags.
    if (selectedTags.length > 0) {
      currentPosts = currentPosts.filter((post) =>
        selectedTags.every((tag) => post.tags.includes(tag)),
      );
    }

    // 3. Sort posts by timestamp in descending order (newest first).
    currentPosts.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

    return currentPosts;
  }, [searchTerm, selectedTags]);

  const allUniqueTags = Array.from(
    posts.reduce<Set<string>>((acc, post) => {
      post.tags.forEach((tag) => acc.add(tag));
      return acc;
    }, new Set()),
  );

  return (
    <div className="mx-auto max-w-7xl p-1 pt-2 md:p-4">
      <Link to="/" className="text-white">
        back to home
      </Link>
      <Card className="mt-4 rounded-lg bg-[#141414] p-4 shadow-lg">
        <h3 className="mb-2 text-3xl lowercase text-white">Blog</h3>
        <p className="mb-4 text-gray-300">
          here is where i write about anything and everything. some of these are
          going to be serious and most are just for fun !!
        </p>
        <div className="mb-4 flex items-center gap-2 rounded-md border-2 border-gray-700 bg-gray-800 p-2">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="search..."
            className="m-0 w-full appearance-none border-none bg-transparent bg-none p-0 text-white outline-none focus:outline-none focus:ring-0"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <p className="text-gray-300">tags:</p>
          <div className="flex flex-wrap gap-2">
            {allUniqueTags.map((tag, idx) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <div
                  key={idx}
                  className={`flex cursor-pointer items-center gap-1 rounded-full px-3 py-1 text-sm transition-all duration-200 ease-in-out ${isSelected ? "bg-blue-600 text-white shadow-md" : "bg-gray-700 text-gray-200 hover:bg-gray-600"} `}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                  {isSelected && (
                    <X
                      className="ml-1 h-3 w-3 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTagClick(tag);
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {filteredAndSortedPosts.length > 0 ? (
            filteredAndSortedPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <div className="rounded-lg border-2 border-gray-700 p-3 text-blue-300 transition-all duration-200 ease-in-out hover:bg-blue-900 hover:text-white">
                  <div className="mb-2 flex flex-col items-start justify-between md:flex-row md:items-center">
                    <p className="mb-1 text-2xl font-bold md:mb-0">
                      {post.title}
                    </p>
                    <p className="text-md font-bold text-gray-400 md:text-white">
                      {format(post.timestamp, "PP")}
                    </p>
                  </div>
                  <div className="mb-2">
                    <p className="text-md text-gray-300 hover:text-white">
                      {post.description}
                    </p>
                  </div>
                  {post.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {post.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="rounded-full bg-gray-600 px-2 py-0.5 text-xs text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <p className="py-10 text-center text-lg text-gray-400">
              no posts :(
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};
