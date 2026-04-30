export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition">

      <img src={project.image} className="h-48 w-full object-cover" />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>

        <p className="text-gray-400 text-sm mt-2 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map(tag => (
            <span className="bg-gray-700 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4 text-sm">
          {project.github && <a href={project.github}>GitHub</a>}
          {project.pdf && <a href={project.pdf}>PDF</a>}
        </div>
      </div>
    </div>
  );
}