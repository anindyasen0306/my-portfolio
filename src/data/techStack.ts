export interface TechGroup {
  id: string;
  label: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  {
    id: "ai",
    label: "AI & Automation",
    items: [
      "LLMs",
      "Ollama",
      "LLaMA",
      "n8n",
      "AI Agents",
      "Prompt Engineering",
      
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "programming",
    label: "Programming",
    items: ["Python","SQL"],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub", "Linux", "GitHub API"],
  },
  {
    id: "other",
    label: "Other",
    items: ["Data Structures & Algorithms"],
  },
];
