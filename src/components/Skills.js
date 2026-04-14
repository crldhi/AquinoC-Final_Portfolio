import React from 'react';

const Skills = () => {
  const proficient = ['HTML', 'CSS'];
  const familiar = ['JavaScript', 'React', 'Tailwind CSS'];
  const learning = ['Python', 'Java', 'Back-End Development'];

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">Skills</h2>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Most Proficient</h3>
        <div className="flex flex-wrap gap-3">
          {proficient.map((skill, index) => (
            <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Currently Enhancing</h3>
        <div className="flex flex-wrap gap-3">
          {familiar.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Also Familiar With</h3>
        <div className="flex flex-wrap gap-3">
          {learning.map((skill, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;