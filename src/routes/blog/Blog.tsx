import { useMemo, useState } from "react";

import { format } from "date-fns";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
    <div className="mx-auto max-w-7xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Blog</CardTitle>
          <CardDescription>
            here is where i write about anything and everything. some of these
            are going to be serious and most are just for fun !!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-2">
            <p>Search:</p>
            <Input
              placeholder="search by name..."
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <p>Tags:</p>
            <div className="flex flex-wrap gap-2">
              {allUniqueTags.map((tag, idx) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <Badge
                    key={idx}
                    className={`cursor-pointer transition-all duration-200 ease-in-out ${isSelected ? "bg-primary text-primary-foreground hover:bg-primary/80" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"} `}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                    {isSelected && (
                      <X
                        className="ml-1 h-3 w-3 text-primary-foreground"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTagClick(tag);
                        }}
                      />
                    )}
                  </Badge>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {filteredAndSortedPosts.length > 0 ? (
              filteredAndSortedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <div className="rounded-sm border-2 border-border bg-accent p-3 transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground">
                    <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                      <p className="mb-1 text-2xl font-bold">{post.title}</p>
                      <p className="text-md font-bold">
                        {format(post.timestamp, "PP")}
                      </p>
                    </div>
                    <div className="mb-2">
                      <p className="text-md text-accent-foreground">
                        {post.description}
                      </p>
                    </div>
                    {post.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {post.tags.map((tag, tagIdx) => (
                          <Badge variant="secondary" key={tagIdx}>
                            {tag}
                          </Badge>
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
        </CardContent>
      </Card>
    </div>
  );
};
