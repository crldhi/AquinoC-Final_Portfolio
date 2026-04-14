import React from 'react';

const AboutMe = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">About Me</h2>
      <p className="text-lg mt-4 text-gray-700 leading-relaxed">
        Hi! I am <span className="font-bold text-blue-500">Carl Aquino</span>, a second year BS Information Technology 
        student majoring in <span className="font-semibold">Web Technology</span> at the University of the Cordilleras. 
        I am passionate about web development and I am currently enhancing my skills in JavaScript, React, and Tailwind CSS.
      </p>
      <p className="text-lg mt-4 text-gray-700 leading-relaxed">
        I am training myself to become both a <span className="font-semibold">Front-End and Back-End Developer</span>, 
        as I believe mastering both sides will greatly expand my knowledge and open more opportunities in the field of technology.
      </p>
    </section>
  );
};

export default AboutMe;