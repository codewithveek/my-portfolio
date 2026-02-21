import { useRef } from "react";

interface StackingEffectOptions {
  index: number;
  totalSections: number;
}

interface StackingEffectReturn {
  ref: React.RefObject<HTMLElement | null>;
  style: React.CSSProperties;
}

export function useStackingEffect(
  options: StackingEffectOptions
): StackingEffectReturn {
  void options;

  const elementRef = useRef<HTMLElement>(null);

  return {
    ref: elementRef,
    style: {
      transform: "none",
      transition: "none",
      position: "relative",
    },
  };
}
