export interface SkillArea {
  title: string;
  description: string;
}

export const skillAreas: SkillArea[] = [
  {
    title: "Backend & APIs",
    description:
      "Designing and building REST APIs with FastAPI, modeling data in PostgreSQL and MySQL, and structuring backend services for clarity and reuse.",
  },
  {
    title: "AI & LLM Applications",
    description:
      "Working with LLMs (including local models via Ollama and LLaMA) to build features like analysis, feedback generation, and agentic workflows — with attention to prompt design and reliability.",
  },
  {
    title: "AI Automation",
    description:
      "Exploring how AI can move beyond text generation into performing engineering tasks directly — analysis, decision-making, execution, and self-verification.",
  },
  {
    title: "Software Engineering",
    description:
      "Writing maintainable, typed code across Python, and TypeScript, with a focus on clean structure over quick hacks.",
  },
  {
    title: "Problem Solving & DSA",
    description:
      "Building a strong foundation in data structures and algorithms through consistent, deliberate practice.",
  },
  {
    title: "Tooling",
    description:
      "Comfortable with Git/GitHub workflows, Docker for containerized environments, and working in Linux day-to-day.",
  },
];
