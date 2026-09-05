export interface WorkflowStep {
  label: string;
  detail: string;
}

export interface FeatureStatus {
  label: string;
  status: "implemented" | "planned";
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  workflow?: WorkflowStep[];
  features?: FeatureStatus[];
  size?: "large" | "medium" | "small";
  category: string;
}

// EDIT ME: update githubUrl / demoUrl for each project once repos are live.
export const projects: Project[] = [
  {
    id: "devopsai",
    name: "DevOpsAI",
    tagline: "An autonomous AI engineering agent for the software lifecycle",
    description:
      "DevOpsAI is designed to automate parts of the software engineering lifecycle using AI — pulling in a GitHub repository, analyzing the codebase, detecting bugs, generating and testing fixes, and producing a final report. The goal is a system that doesn't just generate code, but reasons about it: understanding context, proposing changes, and verifying its own work before handing back a result.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "LLMs", "GitHub API", "Docker"],
    githubUrl: "https://github.com/anindyasen0306/devopsai", // EDIT ME
    demoUrl: "#", // EDIT ME — live demo placeholder
    featured: true,
    size: "large",
    category: "AI Automation",
    workflow: [
      { label: "GitHub Repository", detail: "Pulls source from a connected repo via the GitHub API" },
      { label: "Code Analysis", detail: "Parses and maps the codebase to build context" },
      { label: "Bug Detection", detail: "Flags likely defects and problem areas" },
      { label: "AI Fix Generation", detail: "Proposes candidate fixes using an LLM" },
      { label: "Test Generation", detail: "Writes tests to validate the proposed fix" },
      { label: "Test Execution", detail: "Runs the generated tests in an isolated environment" },
      { label: "Final Report", detail: "Summarizes findings, changes, and outcomes" },
    ],
    features: [
      { label: "Repository ingestion via GitHub API", status: "implemented" },
      { label: "LLM-based static code analysis", status: "implemented" },
      { label: "Automated bug detection on sample repos", status: "implemented" },
      { label: "AI-generated fix suggestions", status: "implemented" },
      { label: "Automated test generation", status: "planned" },
      { label: "Sandboxed test execution pipeline", status: "planned" },
      { label: "CI/CD integration", status: "planned" },
    ],
  },
  {
    id: "skillbridge",
    name: "SkillBridge",
    tagline: "AI resume analyzer SaaS",
    description:
      "An AI-powered resume analysis platform that evaluates resumes and provides intelligent, job-oriented feedback to help candidates identify gaps and improve their applications.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "MySQL", "Ollama", "LLaMA"],
    githubUrl: "https://github.com/your-username/skillbridge", // EDIT ME
    demoUrl: "#", // EDIT ME
    size: "medium",
    category: "AI / SaaS",
    features: [
      { label: "Resume parsing & analysis", status: "implemented" },
      { label: "AI-powered feedback generation", status: "implemented" },
      { label: "Skill extraction", status: "implemented" },
      { label: "Resume improvement suggestions", status: "implemented" },
      { label: "Job-oriented analysis matching", status: "planned" },
    ],
  },
  {
    id: "yatraverse",
    name: "YatraVerse",
    tagline: "A modern travel companion application",
    description:
      "YatraVerse is a travel-focused application exploring how trips can be planned and organized in one place. [Add more detail about the specific problem it solves once finalized.]",
    tech: ["React", "TypeScript"], // EDIT ME — add the actual stack used
    githubUrl: "https://github.com/your-username/yatraverse", // EDIT ME
    demoUrl: "#", // EDIT ME
    size: "medium",
    category: "Web App",
    features: [
      { label: "[Add core feature — e.g. trip itinerary planning]", status: "planned" },
      { label: "[Add core feature — e.g. destination discovery]", status: "planned" },
      { label: "[Add core feature]", status: "planned" },
    ],
  },
  {
    id: "ewaste",
    name: "E-Waste Donation App",
    tagline: "Android app connecting e-waste donors with collectors",
    description:
      "A Java/XML Android application that connects people who want to donate electronic waste with potential receivers and collectors, using a card-based, RecyclerView-driven interface.",
    tech: ["Java", "XML", "Android Studio", "RecyclerView", "CardView"],
    githubUrl: "https://github.com/your-username/ewaste-donation-app", // EDIT ME
    size: "small",
    category: "Android",
    features: [
      { label: "Donor interface", status: "implemented" },
      { label: "Receiver interface", status: "implemented" },
      { label: "E-waste listing", status: "implemented" },
      { label: "Card-based, RecyclerView UI", status: "implemented" },
    ],
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const otherProjects = projects.filter((p) => !p.featured);
