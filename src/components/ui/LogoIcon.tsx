interface LogoIconProps {
  className?: string;
  variant?: 'dark' | 'light';
  showBackground?: boolean;
}

export default function LogoIcon({ className = '', variant = 'dark', showBackground = false }: LogoIconProps) {
  const strokeColor = variant === 'dark' ? '#171717' : '#ffffff';
  const bgColor = variant === 'dark' ? '#ffffff' : '#171717';

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {showBackground && (
        <rect width="40" height="40" rx="8" fill={bgColor} />
      )}

      {/* Left brace { - angular style */}
      <path
        d="M15 8 L11 8 L11 17 L7 20 L11 23 L11 32 L15 32"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Right brace } - angular style */}
      <path
        d="M25 8 L29 8 L29 17 L33 20 L29 23 L29 32 L25 32"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
