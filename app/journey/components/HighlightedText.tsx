interface HighlightedTextProps {
  text: string;
  keywords: string[];
}

export default function HighlightedText({ text, keywords }: HighlightedTextProps) {
  // Convert markdown-style **bold** to highlighted spans
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const content = part.slice(2, -2);
          return (
            <span
              key={index}
              className="text-accent-primary font-semibold bg-accent-primary/10 px-1 rounded"
            >
              {content}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
