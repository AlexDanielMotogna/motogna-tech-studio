interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const textColor = variant === 'dark' ? '#171717' : '#ffffff';
  const bracesColor = variant === 'dark' ? '#a3a3a3' : '#737373';
  const subtitleColor = variant === 'dark' ? '#a3a3a3' : '#737373';

  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* MOTOGNA text */}
      <text
        x="0"
        y="22"
        fontFamily="IBM Plex Sans, system-ui, sans-serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="-0.025em"
        fill={textColor}
      >
        MOTOGNA
      </text>

      {/* {} braces */}
      <text
        x="100"
        y="22"
        fontFamily="IBM Plex Sans, system-ui, sans-serif"
        fontSize="20"
        fontWeight="300"
        fill={bracesColor}
      >
        {'{}'}
      </text>

      {/* TECH STUDIO subtitle */}
      <text
        x="0"
        y="36"
        fontFamily="IBM Plex Sans, system-ui, sans-serif"
        fontSize="10"
        fontWeight="500"
        letterSpacing="0.25em"
        fill={subtitleColor}
      >
        TECH STUDIO
      </text>
    </svg>
  );
}
