import LifeUpdate from "./posts/20250606LifeUpdate.md?raw";
import AgainstConsistencyContent from "./posts/AgainstConsistency.md?raw";
import BookReviewTDET from "./posts/BookReview.md?raw";
import LearningPixelArtContent from "./posts/LearningPixelArt.md?raw";

export const posts = [
  {
    id: 4,
    title: "i've been learning pixel art !!",
    timestamp: new Date(2025, 6, 23),
    content: LearningPixelArtContent,
    description: "art isn't a hobby, it's human",
    tags: ["fun", "art"],
  },
  {
    id: 3,
    title: "Book Review: 'The Design of Everyday Things'",
    timestamp: new Date(2025, 6, 11),
    content: BookReviewTDET,
    description: "My review of a very famous design book",
    tags: ["books", "review", "art"],
  },
  {
    id: 2,
    title: "life update",
    timestamp: new Date(2025, 6, 6),
    content: LifeUpdate,
    description: "Life update on my current creative endeavors",
    tags: ["fun", "art"],
  },
  {
    id: 1,
    title: "Your Routine is Stealing Your Time",
    timestamp: new Date(2025, 6, 4),
    content: AgainstConsistencyContent,
    description: "Why routine is making your life feel short !!",
    tags: ["serious"],
  },
];
