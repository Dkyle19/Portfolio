import React, { useEffect, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Types and deletes each phrase in turn.
 * - Visitors who prefer reduced motion see the static `staticText` instead.
 * - Screen readers always read `staticText` (the animated text is aria-hidden).
 */
export default function TypingText({
  phrases,
  staticText,
  typeMs = 70,
  deleteMs = 35,
  holdMs = 1600,
  className = '',
}) {
  const reduced = prefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return undefined;
    const full = phrases[index];
    let delay = deleting ? deleteMs : typeMs;
    let next;

    if (!deleting && text === full) {
      delay = holdMs;
      next = () => setDeleting(true);
    } else if (deleting && text === '') {
      delay = 300;
      next = () => {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      };
    } else {
      next = () => setText(full.slice(0, text.length + (deleting ? -1 : 1)));
    }

    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, reduced, typeMs, deleteMs, holdMs]);

  if (reduced) {
    return <span className={className}>{staticText}</span>;
  }

  return (
    <span className={className} aria-label={staticText}>
      <span aria-hidden="true">
        {text}
        <span className="inline-block w-[2px] h-[1em] -mb-[0.15em] ml-1 bg-cyan-400 animate-pulse" />
      </span>
    </span>
  );
}
