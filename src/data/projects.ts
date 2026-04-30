export type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  pdf?: string;
  tags: string[];
};

export const projects: Project[] = [
    {
    title: "Personal Daily Organizer App",
    description:
        "Full-stack Android application for tracking daily activities including tasks, meals, exercise, and personal goals. Built in Android Studio with a self-hosted backend and PostgreSQL database, enabling persistent data storage, custom analytics, and seamless day-to-day organization.",
    image: "/images/daily-organizer.png",
    github: "https://github.com/yourname/daily-organizer",
    tags: ["Android", "Full Stack", "PostgreSQL", "Backend", "Java"],
    },
  {
  title: "DnD Wiki Platform",
  description:
    "Full-stack web application for managing a shared Dungeons & Dragons world, featuring user authentication, role-based page editing, and real-time collaborative updates via WebSockets. Built with an Express backend and SQLite database, supporting multi-user content creation and editing. Containerized with Docker for deployment and easy hosting.",
  image: "/images/dndwiki.png",
  github: "https://github.com/yourname/dndwiki",
  tags: ["Full Stack", "Node.js", "Express", "SQLite", "WebSockets", "Docker"],
},
];