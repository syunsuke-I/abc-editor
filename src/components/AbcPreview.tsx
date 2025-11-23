import { useEffect, useRef } from "react";
import abcjs from "abcjs";

interface AbcPreviewProps {
  value: string;
}

export const AbcPreview = ({ value }: AbcPreviewProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      abcjs.renderAbc(ref.current, value, {
        responsive: "resize",
        foregroundColor: "#ffffff",
        format: {
          titlefont: "serif 20",
        },
      });
    }
  }, [value]);

  return <div ref={ref} className="w-full abc-preview" />;
};
