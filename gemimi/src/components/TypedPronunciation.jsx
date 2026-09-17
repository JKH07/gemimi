import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";

const PHRASE = "juh mee mee";

export default function TypedPronunciation() {
  const reducedMotion = usePrefersReducedMotion();
  const [text, setText] = useState(reducedMotion ? PHRASE : "");

  useEffect(() => {
    if (reducedMotion) {
      setText(PHRASE);
      return;
    }

    let i = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      setText(PHRASE.slice(0, i));

      if (!deleting && i < PHRASE.length) {
        i++;
        timeoutId = setTimeout(tick, 140);
      } else if (!deleting && i === PHRASE.length) {
        deleting = true;
        timeoutId = setTimeout(tick, 1400);
      } else if (deleting && i > 0) {
        i--;
        timeoutId = setTimeout(tick, 70);
      } else {
        deleting = false;
        timeoutId = setTimeout(tick, 500);
      }
    }

    tick();
    return () => clearTimeout(timeoutId);
  }, [reducedMotion]);

  return (
    <div className="typed-backdrop" aria-hidden="true">
      <span>{text}</span>
      {!reducedMotion && <span className="cursor">|</span>}
    </div>
  );
}
