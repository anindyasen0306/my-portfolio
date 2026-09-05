export interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  detail?: string;
  isPlaceholder?: boolean;
}

// EDIT ME: replace the placeholder fields with your real details.
export const education: EducationEntry[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "VIT BHOPAL University",
    duration: "2025 — 2027",
    detail: "8.78 CGPA",
    isPlaceholder: true,
  },
];
