
import React from 'react';

// This SVG icon component is defined within the same file as the badge
// that uses it, as it's not used anywhere else. This improves co-location.
const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const VerifiedBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-100 text-emerald-800 rounded-full shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-200 transition-transform duration-300 ease-in-out hover:scale-105 cursor-default">
      <CheckIcon className="w-7 h-7 text-emerald-600" />
      <span className="font-semibold text-lg">Verified</span>
    </div>
  );
};
