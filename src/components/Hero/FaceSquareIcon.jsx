export default function FaceSquareIcon({ strokeWidth = 2, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <path d="M9 9.5h.01M15 9.5h.01" />
      <path d="M8.5 14c1 1.6 2.2 2.2 3.5 2.2s2.5-.6 3.5-2.2" />
    </svg>
  );
}