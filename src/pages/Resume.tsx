export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto flex gap-10">

      {/* Sidebar */}
      <aside className="hidden md:block w-48 sticky top-24 h-fit">
        <nav className="space-y-4 text-sm text-gray-400">
          <a href="#experience" className="block hover:text-blue-400 transition">
            Experience
          </a>
          <a href="#education" className="block hover:text-blue-400 transition">
            Education
          </a>
          <a href="#skills" className="block hover:text-blue-400 transition">
            Skills
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-2">

        {/* EXPERIENCE */}
        <section id="experience">
          <h2 className="text-xl font-semibold text-white mb-6">Experience</h2>

          <div className="space-y-3">

            {/* Experience Card */}
            <div className="relative bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl"></div>

              <div className="flex justify-between items-start">
                <div className="flex gap-4 items-center">
                  <img
                    src="/logos/nrg.png"
                    className="w-10 h-10 object-contain bg-white rounded p-1"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Senior AI Engineer
                    </h3>
                    <p className="text-sm text-gray-400">
                      Vivint / NRG • Lehi, UT
                    </p>
                  </div>
                </div>

                <span className="text-xs text-gray-400">March 2025 – Present</span>
              </div>

                <ul className="mt-4 space-y-3 text-sm text-gray-300 pl-5 list-disc marker:text-gray-500">
            
                <li className="hover:text-white transition">Architected and deployed an end-to-end facial recognition system spanning edge devices and cloud infrastructure, supporting real-time inference for up to 100K+ customer environments</li>
                <li className="hover:text-white transition">Designed and implemented a semi-supervised clustering pipeline for identity discovery and embedding aggregation, enabling automatic onboarding of new identities and continuous improvement of existing profiles</li>
                <li className="hover:text-white transition">Built and owned backend APIs and services used by cameras, mobile apps, and internal platforms, handling ingestion, identity management, and recognition workflows</li>
                <li className="hover:text-white transition">Modeled and optimized a distributed database schema for high-throughput embedding storage and retrieval, supporting large-scale identity and detection data</li>

              </ul>
            </div>

            {/* Experience Card */}
            <div className="relative bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl"></div>

              <div className="flex justify-between items-start">
                <div className="flex gap-4 items-center">
                  <img
                    src="/logos/arturo.jpeg"
                    className="w-10 h-10 object-contain bg-white rounded p-1"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Senior Machine Learning Engineer
                    </h3>
                    <p className="text-sm text-gray-400">
                      Arturo AI • South Jordan, UT
                    </p>
                  </div>
                </div>

                <span className="text-xs text-gray-400">October 2024 – April 2025</span>
              </div>

                <ul className="mt-4 space-y-3 text-sm text-gray-300 pl-5 list-disc marker:text-gray-500">
            
                <li>Led the migration of a suite of computer vision models from older architectures to YOLOv8 segmentation models, improving inference speed, cost efficiency, and scalability for new markets.</li>
                <li>Engineered an end-to-end ML pipeline in AWS, allowing for scalable on-demand and batch model execution.</li>
                <li>Member of essential staff that navigated the company through a successful acquisition.</li>
              </ul>
            </div>

            
            

            {/* Repeat for other roles (copy pattern) */}

          </div>

        </section>

        {/* EDUCATION */}
        <section id="education">
          <h2 className="text-xl font-semibold text-white mb-6">Education</h2>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 space-y-6">

            {/* Degrees */}
            <div className="space-y-6">

              {/* Utah */}
              <div className="flex gap-4 items-center">
                <img
                  src="/logos/utah.svg"
                  className="w-12 h-12 object-contain bg-white rounded p-1"
                />

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    M.S. Computer Science
                  </h3>
                  <p className="text-gray-400 text-sm">
                    University of Utah — 2023
                  </p>
                  <p className="text-sm text-gray-300">
                    Machine Learning Specialization
                  </p>
                </div>
              </div>

              {/* BYU */}
              <div className="flex gap-4 items-center">
                <img
                  src="/logos/byu.svg"
                  className="w-12 h-12 object-contain bg-white rounded p-1"
                />

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    B.S. Computer Science & Statistics
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Brigham Young University — 2021
                  </p>
                  <p className="text-sm text-gray-300">
                    Honors • Minor in Mathematics
                  </p>
                </div>
              </div>

            </div>

            {/* Certifications */}
            <div className="pt-4 border-t border-gray-800">
              <h4 className="text-sm text-gray-300 mb-3">Certifications</h4>

              <div className="flex flex-wrap gap-2">
                {[
                  "Databricks Spark Developer (2023)",
                  "Databricks Data Engineer (2024)",
                ].map((cert) => (
                  <span
                    key={cert}
                    className="bg-gray-800 px-3 py-1 rounded-full text-xs"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2 className="text-xl font-semibold text-white mb-6">Skills</h2>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "PyTorch",
                "TensorFlow",
                "Computer Vision",
                "Deep Learning",
                "GCP",
                "AWS",
                "Docker",
                "SQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}