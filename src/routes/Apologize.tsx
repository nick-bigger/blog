import { P } from "../components/Typography";

const poem = ["i", "will", "not", "apologize", "for", "the", "heart", "on", "my", "sleeve", "despite", "the", "numerous", "apologies", "it", "owes", "me"];


export const Apologize = () => {
  return (
    <div className="flex flex-col gap-1 p-2">
      {poem.map((word, idx) => <P key={idx}>{word}</P>)}
    </div>
  );
}