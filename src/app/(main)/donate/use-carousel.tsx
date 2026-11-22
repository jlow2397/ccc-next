"use client";

import { useCallback, useEffect, useState } from "react";

export type DonationUse = {
  title: string;
  description: string;
  photo: string;
};

const AUTOPLAY_MS = 5000;

// The slides are rendered three times in a row and we start on the middle
// copy. After sliding into the first or last copy we jump back to the
// matching slide in the middle copy with the transition turned off, so the
// loop looks endless and the cards on both sides are always filled in.
export default function UseCarousel({ uses }: { uses: DonationUse[] }) {
  const n = uses.length;
  const slides = [...uses, ...uses, ...uses];
  const [index, setIndex] = useState(n);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (step: number) => {
      setAnimate(true);
      // Stay inside the three copies even if someone clicks very fast.
      setIndex((i) => Math.min(3 * n - 1, Math.max(0, i + step)));
    },
    [n],
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, go]);

  // Turn transitions back on one frame after a silent jump.
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true)),
    );
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const onTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return;
    if (index >= 2 * n || index < n) {
      setAnimate(false);
      setIndex(n + (((index % n) + n) % n));
    }
  };

  const active = ((index % n) + n) % n;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="overflow-hidden py-4">
        <div
          className={`flex [--w:85%] sm:[--w:70%] md:[--w:60%] ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{
            // Center slide `index`: each slide is --w wide (% of the track).
            transform: `translateX(calc(50% - (${index} + 0.5) * var(--w)))`,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {slides.map((use, i) => {
            const isActive = i === index;
            return (
              <div
                key={i}
                className="shrink-0 px-2 sm:px-3 basis-[var(--w)]"
                aria-hidden={!isActive}
              >
                <button
                  type="button"
                  tabIndex={isActive ? -1 : 0}
                  onClick={() => !isActive && go(i - index)}
                  className={`block w-full text-left bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm duration-700 ${
                    isActive
                      ? "scale-100 opacity-100 cursor-default"
                      : "scale-90 opacity-50 hover:opacity-70 cursor-pointer"
                  } ${animate ? "transition" : "transition-none"}`}
                >
                  <img
                    src={use.photo}
                    alt=""
                    className="w-full aspect-[16/10] object-cover object-[center_35%]"
                  />
                  <div className="p-5 md:p-6">
                    <h3 className="text-xl font-semibold mb-1">{use.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {use.description}
                    </p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous"
          className="w-9 h-9 grid place-items-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
        >
          <svg
            viewBox="0 0 20 20"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M12 4l-6 6 6 6" />
          </svg>
        </button>
        <div className="flex gap-2">
          {uses.map((use, i) => (
            <button
              key={use.title}
              type="button"
              onClick={() => go(i - active)}
              aria-label={`Show ${use.title}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-slate-800"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next"
          className="w-9 h-9 grid place-items-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
        >
          <svg
            viewBox="0 0 20 20"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M8 4l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
