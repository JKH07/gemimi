import { useMemo } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.js";

function Fireflies() {
  const reducedMotion = usePrefersReducedMotion();

  // Generated once per mount — stable positions instead of re-rolling on every render.
  const fireflies = useMemo(() => {
    const count = window.innerWidth < 560 ? 6 : 12;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 2}%`,
      top: `${Math.random() * 55 + 30}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${11 + Math.random() * 8}s`,
    }));
  }, []);

  return (
    <div id="fireflies">
      {fireflies.map((f) => (
        <div
          key={f.id}
          className="firefly"
          style={{
            left: f.left,
            top: f.top,
            animation: reducedMotion
              ? "none"
              : `drift ${f.duration} ease-in-out infinite`,
            animationDelay: reducedMotion ? undefined : f.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function Scene() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="sky" />
      <div className="moon" />
      <Fireflies />
      <svg className="ridge ridge-far" viewBox="0 0 1600 400" preserveAspectRatio="none">
        <path d="M0,220 L90,180 170,230 260,150 350,210 430,170 520,225 610,160 700,215 800,175 900,230 1000,165 1090,220 1180,180 1280,235 1380,170 1470,220 1600,190 L1600,400 L0,400 Z" />
      </svg>
      <svg className="ridge ridge-mid" viewBox="0 0 1600 400" preserveAspectRatio="none">
        <path d="M0,280 L60,240 150,290 230,220 320,275 410,230 500,285 590,225 680,270 780,215 870,275 970,235 1060,280 1150,225 1250,275 1340,230 1430,280 1600,250 L1600,400 L0,400 Z" />
      </svg>
      <svg className="ridge ridge-near" viewBox="0 0 1600 400" preserveAspectRatio="none">
        <path d="M0,330 L50,300 120,340 190,290 260,335 340,295 420,340 500,300 580,335 670,290 760,335 850,300 940,340 1030,295 1120,335 1210,300 1300,340 1400,300 1600,320 L1600,400 L0,400 Z" />
      </svg>
      <div className="mist" />
    </div>
  );
}
