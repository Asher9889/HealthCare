import type { RefObject } from "react";
import { useCallback } from "react";

/**
 * Hook to scroll to a target element and highlight it temporarily.
 * @param ref - Ref to the target element
 * @param duration - Duration of the highlight in milliseconds (default: 4000ms)
 * @param highlightStyle - Style to apply for highlighting (default: border: 2px solid red)
 */
export const useScrollHighlight = (
    ref: RefObject<HTMLElement | null>,
    duration: number = 4000,
    highlightStyle: string = "1px solid red"
) => {
    const scrollToTarget = useCallback(() => {
        if (ref.current) {
            // Scroll to the element
            ref.current.scrollIntoView({ behavior: "smooth", block: "center" });

            // Apply highlight
            // const originalTransition = ref.current.style.transition;
            const originalBorder = ref.current.style.border;

            ref.current.style.transition = "border 0.3s ease-in-out";
            ref.current.style.border = highlightStyle;

            // Remove highlight after duration
            setTimeout(() => {
                if (ref.current) {
                    ref.current.style.border = originalBorder;
                    // Restore original transition after a slight delay to allow border transition to finish if needed
                    // or just keep the new transition if it doesn't conflict.
                    // For simplicity, we can leave the transition or reset it.
                    // ref.current.style.transition = originalTransition; 
                }
            }, duration);
        }
    }, [ref, duration, highlightStyle]);

    return scrollToTarget;
};
