import React from 'react';

const Education = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">Education</h2>

      <div className="mt-4 p-4 bg-white rounded-lg shadow border-l-4 border-blue-500">
        <h3 className="text-xl font-bold">Bachelor of Science in Information Technology</h3>
        <p className="text-blue-500 font-medium">Major in Web Technology</p>
        <p className="text-gray-600">University of the Cordilleras</p>
        <p className="text-gray-400 text-sm">2024 — Present | 2nd Year</p>
        <p className="text-gray-700 mt-2">
          Currently learning and enhancing skills in JavaScript, React, Tailwind CSS, 
          and working towards becoming a full-stack developer.
        </p>
      </div>

      <div className="mt-4 p-4 bg-white rounded-lg shadow border-l-4 border-gray-400">
        <h3 className="text-xl font-bold">Senior High School</h3>
        <p className="text-gray-600">Baguio City National High School</p>
        <p className="text-gray-400 text-sm">2018 — 2024</p>
        <p className="text-gray-700 mt-2">
          Completed Senior High School where I was first introduced to the basics of HTML 
          during our ICT subjects, which sparked my interest in web development.
        </p>
      </div>
    </section>
  );
};

export default Education;