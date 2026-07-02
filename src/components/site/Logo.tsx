interface LogoProps {
  className?: string;
  /** Kept for API compatibility. Logo is always shown in original brand colors. */
  variant?: "light" | "dark";
}

/**
 * Borna Care logo — rendered in its original brand colors.
 */
export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/__l5e/assets-v1/eca89641-0152-4462-80dd-d8eab13093f2/borna-care-logo.svg"
      alt="Borna Care"
      className={className}
      draggable={false}
    />
  );
}
