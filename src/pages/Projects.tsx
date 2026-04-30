import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject?.images) return;
    setCurrentImageIndex((prev: number) =>
      (prev + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    if (!selectedProject?.images) return;
    setCurrentImageIndex((prev: number) =>
      prev === 0
        ? selectedProject.images.length - 1
        : prev - 1
    );
  };

  return (
    <>
      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelectedProject(p)}
            className="bg-gray-900 p-4 rounded-xl cursor-pointer border border-gray-800
                       transform transition duration-300
                       hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/40"
          >
            <img
              src={p.image}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="mt-3 font-semibold text-white">
              {p.title}
            </h3>

            <p className="text-sm text-gray-400 mt-1 line-clamp-3">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {p.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 max-w-3xl w-full p-6 rounded-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-xl font-semibold text-white">
              {selectedProject.title}
            </h2>

            {/* IMAGE CAROUSEL */}
            <div className="mt-4 relative">

              {/* IMAGE */}
              <img
                src={
                  selectedProject.images
                    ? selectedProject.images[currentImageIndex]
                    : selectedProject.image
                }
                className="w-full max-h-[60vh] object-contain rounded"
              />

              {/* ARROWS */}
              {selectedProject.images?.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-1 rounded hover:bg-black"
                  >
                    ◀
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-1 rounded hover:bg-black"
                  >
                    ▶
                  </button>
                </>
              )}

              {/* DOTS */}
              {selectedProject.images?.length > 1 && (
                <div className="flex justify-center gap-2 mt-3">
                  {selectedProject.images.map((_: any, idx: number) => (
                    <div
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full cursor-pointer ${
                        idx === currentImageIndex
                          ? "bg-blue-500"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* DESCRIPTION */}
            <p className="mt-4 text-gray-300">
              {selectedProject.description}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-4 mt-6">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-500"
                >
                  GitHub
                </a>
              )}

              {selectedProject.pdf && (
                <a
                  href={selectedProject.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-600"
                >
                  Paper
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}