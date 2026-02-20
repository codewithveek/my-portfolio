import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "./useScrollProgress";
import { clamp } from "../utils/debounce";

interface StackingEffectOptions {
  index: number;
  totalSections: number;
  scaleAmount?: number;
  translateYAmount?: number;
}

interface StackingEffectReturn {
  ref: React.RefObject<HTMLElement | null>;
  style: React.CSSProperties;
}

/**
 * Custom hook for scroll-stacking section effect
 * Combines Intersection Observer and scroll progress to create
 * the stacking animation where sections scale and translate as they scroll
 */
export function useStackingEffect(
  options: StackingEffectOptions
): StackingEffectReturn {
  const {
    index,
    totalSections,
    scaleAmount = 0.045,
    translateYAmount = 18,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [sectionId, setSectionId] = useState<string | undefined>(undefined);

  // Set element ID and intersection observer
  useEffect(() => {
    if (!elementRef.current) return;

    // Set ID for scroll tracking
    if (!elementRef.current.id) {
      elementRef.current.id = `stacking-section-${index}`;
    }

    setSectionId(elementRef.current.id);

    // Set up intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [index]);

  // Get scroll progress for this element
  const progress = useScrollProgress(sectionId);
  const normalizedProgress = clamp((progress - 0.08) / 0.84, 0, 1);

  const stackIndex = Math.max(index, 1);

  // Calculate transform values based on scroll progress
  const scale = isIntersecting
    ? clamp(1 - normalizedProgress * scaleAmount * stackIndex, 0.88, 1)
    : 1;

  const translateY = isIntersecting
    ? -clamp(
        normalizedProgress * translateYAmount * stackIndex,
        0,
        translateYAmount * 3
      )
    : 0;

  // Calculate z-index (higher index = lower in stack)
  const zIndex = totalSections - index;

  // Construct inline styles for the stacking effect
  const style: React.CSSProperties = {
    transform: `scale(${scale}) translateY(${translateY}px)`,
    zIndex,
    transformOrigin: "top center",
    transition: "transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
    position: "relative",
    willChange: isIntersecting ? "transform" : "auto",
  };

  return {
    ref: elementRef,
    style,
  };
}
