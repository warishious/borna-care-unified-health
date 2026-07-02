import logoAsset from "@/assets/borna-care-logo.svg.asset.json";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

/**
 * Borna Care logo. Source SVG is white on transparent — use variant="dark"
 * on light backgrounds to invert to the ink color.
 */
export function Logo({ className, variant = "light" }: LogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt="Borna Care"
      className={className}
      style={
        variant === "dark"
          ? { filter: "brightness(0) saturate(100%)" }
          : undefined
      }
    />
  );
}
