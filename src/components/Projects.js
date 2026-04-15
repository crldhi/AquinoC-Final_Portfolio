import React, { useState } from 'react';

const projects = [
  { id: 1, title: 'Project One', description: 'A web app built with React.', image: '/AquinoC-Final_Portfolio/images/project1.jpg' },
  { id: 2, title: 'Project Two', description: 'A responsive landing page.', image: '/AquinoC-Final_Portfolio/images/project2.jpg' },
  { id: 3, title: 'Project Three', description: 'A Certificate of having 300 hours of coding in FreeCodeCamp.', image: '/AquinoC-Final_Portfolio/images/project3.jpg' },
  { id: 4, title: 'Unrendered Sketch', description: 'A computer-made sketch design created as a draft for a web layout concept.', image: '/AquinoC-Final_Portfolio/images/project4.jpg' },
  { id: 5, title: 'Rendered Design', description: 'The fully rendered version of my sketch, brought to life with colors and details.', image: '/AquinoC-Final_Portfolio/images/project5.jpg' },
  { id: 6, title: 'Gym Survey Form', description: 'A gym membership survey form built using HTML and CSS with a clean and structured layout.', image: '/AquinoC-Final_Portfolio/images/project6.jpg' },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">Projects</h2>
      <p className="text-gray-600 mt-2">A collection of my work and personal projects.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-600">{selected.title}</h3>
              <p className="text-gray-600 mt-2">{selected.description}</p>
              <button
                onClick={() => setSelected(null)}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;