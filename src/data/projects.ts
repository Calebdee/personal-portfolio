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
{
  title: "Agentic Coding Harness with Pi.dev",
  description:
    "Built a customizable agentic coding environment using pi.dev, designing and managing modular 'skills' to tightly control context, behavior, and tool usage. Optimized prompt scoping and context injection to reduce token consumption by over 50% compared to Claude Code, while maintaining high-quality code generation and task execution.",
  image: "/images/pi.png",
  github: "https://github.com/yourname/pi-dev-harness",
  tags: ["AI", "LLMs", "Agent Systems", "Prompt Engineering", "Tooling"],
},
  {
    title: "Communicative Effects of Anonymity Online",
    description:
      "Constructed a Twitter anonymity dataset by quantifying user identifiability and analyzed its impact on communication patterns at scale. Explored behavioral differences across anonymity levels and successfully defended an Honors Thesis presented at the BYU Honors Conference.",
    image: "/images/gru.png",
    github: "https://github.com/Calebdee/CommunicativeEffectsOfAnonymityOnline",
    pdf: "/docs/CommunicativeEffects.pdf",
    tags: ["NLP", "Deep Learning", "Dataset Curation", "Thesis"],
  },
{
  title: "Personal SSO Hub & Service Dashboard",
  description:
    "Designed and built a centralized SSO hub for managing access to self-hosted applications, providing seamless authentication and a unified entry point for services like Synology Photos and Drive. Implemented a real-time service status dashboard to monitor application health and availability, enabling quick visibility into active or degraded systems across a home server environment.",
  image: "/images/hub.png",
  github: "https://github.com/yourname/sso-hub",
  tags: ["Authentication", "SSO", "Full Stack", "DevOps", "Monitoring"],
},
{
  title: "Game Management & Sync Platform",
  description:
    "Built a self-hosted platform for organizing and accessing a library of legally backed-up video game ROMs, with rich metadata, ratings, and cross-device synchronization. Integrated with external APIs (e.g., RetroAchievements) and scraping services to automatically populate game details, artwork, and achievement data. Implemented Syncthing-based save synchronization, enabling seamless gameplay continuity across multiple devices.",
  image: "/images/game-manager.png",
  github: "https://github.com/yourname/game-manager",
  tags: ["Full Stack", "Self-Hosting", "APIs", "Data Integration", "Distributed Systems"],
},

  {
    title: "Machine Learning Models from Scratch",
    description:
      "Implemented a library of core machine learning algorithms from scratch in Python, including decision trees, random forests, AdaBoost, SVMs, and perceptrons to build a deep understanding of model internals and training dynamics.",
    image: "/images/perceptron.png",
    github: "https://github.com/Calebdee/MachineLearningLibraryFromStratch",
    tags: ["Machine Learning", "Algorithms"],
  },

  {
    title: "MCTS Ticket to Ride Agent",
    description:
      "Developed a Monte Carlo Tree Search (MCTS) agent for the Ticket to Ride board game, modeling a 50-route European map and enabling strategic gameplay that consistently outperforms average human players.",
    image: "/images/ticket.png",
    github: "https://github.com/Calebdee/MCST-TicketToRide",
    pdf: "/docs/TicketToRide.pdf",
    tags: ["AI", "Reinforcement Learning", "Search"],
  },

  {
    title: "Real-Time Opinion Corpus Retrieval",
    description:
      "Built a real-time information retrieval system using the Twitter API to dynamically construct datasets, classify tweets with an emotion model, and serve fast queries via an inverted index.",
    image: "/images/time.png",
    github: "https://github.com/Calebdee/IR-RealTimeTwitterQuery",
    pdf: "/docs/twitter-retrieval.pdf",
    tags: ["Information Retrieval", "NLP", "Data Pipelines"],
  },
];