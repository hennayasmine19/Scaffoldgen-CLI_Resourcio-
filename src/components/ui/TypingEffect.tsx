import { useEffect, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypingEffect = ({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete,
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (text.length === 0) return;

    setDisplayedText("");
    setIsComplete(false);
    
    let currentIndex = 0;
    let intervalId: NodeJS.Timeout | null = null;
    
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsComplete(true);
          if (intervalId) clearInterval(intervalId);
          if (onComplete) onComplete();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, delay, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <span className="animate-pulse ml-1">|</span>
      )}
    </span>
  );
};

