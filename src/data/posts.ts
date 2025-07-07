import AgainstConsistencyContent from "./posts/AgainstConsistency.md?raw";
import TestHelloContent from "./posts/TestHello.md?raw";

export const posts = [
  {
    id: 2,
    title: "your routine is stealing your time",
    timestamp: new Date(2025, 6, 4),
    content: AgainstConsistencyContent,
    description: "why routine is making your life feel short !!",
    tags: ["serious"],
  },
  {
    id: 1,
    title: "test post please ignore",
    timestamp: new Date(2025, 5, 4),
    content: TestHelloContent,
    description: "this is a test post to make sure the blog is workin'",
    tags: ["fun"],
  },
];
