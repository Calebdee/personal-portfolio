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
    title: "Face Recognition Pipeline",
    description:
      "End-to-end facial recognition system with edge + cloud inference and quality filtering.",
    image: "/images/face-rec.png",
    github: "https://github.com/yourname/face-rec",
    tags: ["AI", "Computer Vision", "GCP"],
  },
  {
    title: "Spanner Analytics Tool",
    description:
      "Tooling for querying and analyzing large-scale detection data in Google Cloud Spanner.",
    image: "/images/spanner.png",
    pdf: "/docs/spanner.pdf",
    tags: ["SQL", "GCP", "Backend"],
  },
];