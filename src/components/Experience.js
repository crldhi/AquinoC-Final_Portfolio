import React from 'react';

const Experience = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">Experience</h2>

      <div className="mt-4 p-4 bg-white rounded-lg shadow border-l-4 border-blue-500">
        <h3 className="text-xl font-bold">Web Development Student</h3>
        <p className="text-gray-600">University of the Cordilleras — BS IT Web Technology</p>
        <p className="text-gray-400 text-sm">2024 — Present</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Building web applications using React and Tailwind CSS</li>
          <li>Learning and practicing JavaScript for dynamic web development</li>
          <li>Developing foundational skills in both front-end and back-end development</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-white rounded-lg shadow border-l-4 border-gray-400">
        <h3 className="text-xl font-bold">High School ICT Student</h3>
        <p className="text-gray-600">Baguio City National High School</p>
        <p className="text-gray-400 text-sm">2018 — 2024</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Learned the basics of HTML and web page structure</li>
          <li>Developed early interest in web technologies and programming</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;