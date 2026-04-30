import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <div key={i} className="bg-gray-900 p-4 rounded">
          <img src={p.image} className="h-40 w-full object-cover rounded" />

          <h3 className="mt-3 font-semibold">{p.title}</h3>

          <p className="text-sm text-gray-400 mt-1">
            {p.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {p.tags.map(tag => (
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}