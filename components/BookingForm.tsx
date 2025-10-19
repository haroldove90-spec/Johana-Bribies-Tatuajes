
import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: '',
    placement: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server.
    // For this demo, we'll just show a success message.
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 text-amber-400">Thank You!</h2>
          <p className="text-lg text-gray-300">
            Your booking request has been sent. I will review your idea and get back to you via email within 48 hours to discuss the next steps.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2 text-amber-400">Book an Appointment</h2>
          <p className="text-lg text-gray-400 mb-12">Ready to get inked? Fill out the form below to start the process.</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-amber-400 focus:outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-amber-400 focus:outline-none" />
          </div>
          <div>
            <label htmlFor="idea" className="block text-sm font-medium text-gray-300 mb-2">Tattoo Idea</label>
            <textarea name="idea" id="idea" rows={4} required value={formData.idea} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-amber-400 focus:outline-none" placeholder="Describe your idea, including any references, size, and details."></textarea>
          </div>
          <div>
            <label htmlFor="placement" className="block text-sm font-medium text-gray-300 mb-2">Placement on Body</label>
            <input type="text" name="placement" id="placement" required value={formData.placement} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-amber-400 focus:outline-none" placeholder="e.g., Left forearm, right shoulder blade" />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-amber-300 transition-all duration-300 text-lg transform hover:scale-105">
              Send Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
