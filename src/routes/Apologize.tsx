import { Poem } from "../components/Poem";

const poem = [
  "i",
  "will",
  "not",
  "apologize",
  "for",
  "the",
  "heart",
  "on",
  "my",
  "sleeve",
  "despite",
  "the",
  "numerous",
  "apologies",
  "it",
  "owes",
  "me",
];

export const Apologize = () => {
  return (
    <Poem>
      {poem.map((word, idx) => (
        <p key={idx}>{word}</p>
      ))}
    </Poem>
  );
};
