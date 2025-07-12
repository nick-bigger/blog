import LifeUpdate from "./posts/20250606LifeUpdate.md?raw";
import AgainstConsistencyContent from "./posts/AgainstConsistency.md?raw";
import BookReviewTDET from "./posts/BookReview.md?raw";
import TestHelloContent from "./posts/TestHello.md?raw";

export const posts = [
  {
    id: 3,
    title: "Book Review: 'The Design of Everyday Things'",
    timestamp: new Date(2025, 6, 11),
    content: BookReviewTDET,
    description: "Life update on my current creative endeavors",
    tags: ["books", "review", "art"],
  },
  {
    id: 3,
    title: "Life Update",
    timestamp: new Date(2025, 6, 6),
    content: LifeUpdate,
    description: "Life update on my current creative endeavors",
    tags: ["fun", "art"],
  },
  {
    id: 2,
    title: "Your Routine is Stealing Your Time",
    timestamp: new Date(2025, 6, 4),
    content: AgainstConsistencyContent,
    description: "Why routine is making your life feel short !!",
    tags: ["serious"],
  },
  {
    id: 1,
    title: "Test Post, Please Ignore",
    timestamp: new Date(2025, 5, 4),
    content: TestHelloContent,
    description: "This is a test post to make sure the blog is workin'",
    tags: ["fun"],
  },
];
