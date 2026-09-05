export const automationPipeline = [
  { label: "Understand", detail: "Read the codebase, issue, or task for real context" },
  { label: "Analyze", detail: "Reason about structure, dependencies, and risk" },
  { label: "Decide", detail: "Choose an approach, not just an answer" },
  { label: "Execute", detail: "Apply the change directly" },
  { label: "Test", detail: "Verify the change actually works" },
  { label: "Report", detail: "Summarize what happened and why" },
];

export const automationStatement = {
  title: "Engineering with AI",
  body: [
    "I'm interested in systems where AI doesn't just generate text — it performs engineering work. That means giving a model enough context to understand a real codebase, enough judgment to decide what to change, and enough structure to verify its own output before it's trusted.",
    "DevOpsAI is my attempt at building that loop end-to-end: from reading a repository to shipping a tested fix. It's still evolving, but the direction is the point — moving from AI as an autocomplete to AI as a teammate that can own a task.",
  ],
};
