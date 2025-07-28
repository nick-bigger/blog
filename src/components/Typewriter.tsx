import { useEffect, useState } from "react";

import { H1 } from "@/components/Typography";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export const Typewriter = ({
  phrases,
  typingSpeed = 150,
  deletingSpeed = 80,
  pauseTime = 3000,
}: TypewriterProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        if (charIndex < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const typingInterval = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(typingInterval);
  }, [
    displayedText,
    isDeleting,
    charIndex,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <H1 className="animate-typing max-w-fit overflow-hidden whitespace-nowrap border-r-[3px] border-r-foreground text-[1.5rem] font-normal leading-[24px] tracking-wide text-primary sm:text-[2rem] sm:leading-[28px] md:text-[1.5rem] md:leading-[30px] lg:text-[2rem] lg:leading-[32px]">
      {displayedText}
    </H1>
  );
};
