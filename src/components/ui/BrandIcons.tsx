import type { SVGProps } from "react";

interface BrandIconProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
  size?: number;
}

export function GithubMark({ size = 16, ...props }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.14c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.24 1.17-3.03-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.79 1.17 3.03 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinMark({ size = 16, ...props }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM.5 8.98h8.96V23.5H.5V8.98ZM8.98 8.98h8.59v1.98h.12c1.2-2.14 4.13-2.55 6-1.16 2.13 1.58 2.35 4.11 2.35 6.5V23.5h-8.96V16.7c0-1.62-.03-3.72-2.28-3.72-2.29 0-2.64 1.78-2.64 3.6v6.92H8.98V8.98Z" />
    </svg>
  );
}
