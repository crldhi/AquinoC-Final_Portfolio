import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">Contact Me</h2>
      <p className="text-gray-600 mt-2">Feel free to reach out for collaborations or just a friendly hello!</p>
      {submitted ? (
        <p className="mt-4 text-green-600 font-semibold">Thanks! Your message has been sent.</p>
      ) : (
        <div className="mt-4 bg-white p-6 rounded-lg shadow">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border p-2 rounded mb-4 h-32"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </div>
      )}
    </section>
  );
};

export default Contact;