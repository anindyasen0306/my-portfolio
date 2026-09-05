
export const profile = {
  name: "Anindya Sen",
  role: "Aspiring AI Automation Engineer",
  tagline: "Building Intelligent Systems with AI & Automation",
  summary:
    "An MCA student and aspiring AI Automation Engineer focused on building AI-powered applications, autonomous engineering systems, and scalable backend solutions.",
  location: "India", 
  resumeUrl: "/resume.pdf", 
};

export const contact = {
  email: "anindyasen0306@gmail.com",
  github: "https://github.com/anindyasen0306", 
  linkedin: "https://www.linkedin.com/in/anindya-sen-b5b45b228/", 
};

export const codingProfiles = [
  {
    name: "GitHub",
    handle: "anindyasen0306", 
    description: "Projects & open source",
    url: "https://github.com/anindyasen0306", 
    stat: "Repositories",
  },
  {
    name: "LeetCode",
    handle: "ani_enviornment", 
    description: "DSA practice",
    url: "https://leetcode.com/u/ani_enviornment/", // EDIT ME
    stat: "Problems solved",
  },
  
];

// Set to false to hide the contact form and only show contact details.
export const contactFormEnabled = true;

// Choose the backend for the contact form UI. Wire in your own
// endpoint/public key when ready — see src/components/sections/Contact.tsx
export const contactFormProvider: "formspree" | "emailjs" | "none" = "none";
