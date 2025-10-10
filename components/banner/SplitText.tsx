"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Register plugins
gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

// Extend HTMLElement to include custom property for split instance
interface ExtendedHTMLElement extends HTMLElement {
  _rbsplitInstance?: GSAPSplitText;
}

// Define props for the SplitText component
interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // in milliseconds
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines" | string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag = "p",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<ExtendedHTMLElement | null>(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Wait for fonts to load
  useEffect(() => {
    if (document.fonts.status === "loaded") {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !text || !fontsLoaded) return;

      // Revert previous split instance if any
      if (el._rbsplitInstance) {
        try {
          el._rbsplitInstance.revert();
        } catch {
          /* noop */
        }
        el._rbsplitInstance = undefined;
      }

      // ScrollTrigger start position calculation
      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
      const sign =
        marginValue === 0
          ? ""
          : marginValue < 0
          ? `-=${Math.abs(marginValue)}${marginUnit}`
          : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      let targets: HTMLElement[] = [];

      const assignTargets = (self: GSAPSplitText) => {
        if (splitType.includes("chars") && self.chars?.length)
          targets = self.chars as HTMLElement[];
        if (
          !targets.length &&
          splitType.includes("words") &&
          self.words?.length
        )
          targets = self.words as HTMLElement[];
        if (
          !targets.length &&
          splitType.includes("lines") &&
          self.lines?.length
        )
          targets = self.lines as HTMLElement[];
        if (!targets.length)
          targets = (self.chars || self.words || self.lines) as HTMLElement[];
      };

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === "lines",
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
        reduceWhiteSpace: false,
        onSplit: (self: GSAPSplitText) => {
          assignTargets(self);
          gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              scrollTrigger: {
                trigger: el,
                start,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4,
              },
              onComplete: () => {
                animationCompletedRef.current = true;
                onLetterAnimationComplete?.();
              },
              willChange: "transform, opacity",
              force3D: true,
            }
          );
        },
      });

      el._rbsplitInstance = splitInstance;

      return () => {
        // Kill scroll triggers related to this element
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === el) st.kill();
        });

        try {
          splitInstance.revert();
        } catch {
          /* noop */
        }
        el._rbsplitInstance = undefined;
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        onLetterAnimationComplete,
      ],
      scope: ref,
    }
  );

  // Dynamic tag rendering
  //   const Tag = tag as keyof JSX.IntrinsicElements;
  const classes = `split-parent ${className}`;

  return (
    <h1
      ref={ref}
      style={{
        textAlign,
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "normal",
        wordWrap: "break-word",
        willChange: "transform, opacity",
        fontSize: "3rem",
        fontWeight: "bold",
      }}
      className={classes}
    >
      {text}
    </h1>
  );
};

export default SplitText;
