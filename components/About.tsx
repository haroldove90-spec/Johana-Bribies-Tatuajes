
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://picsum.photos/seed/artist/600/600" 
              alt="Johana Bribiesca" 
              className="rounded-full shadow-2xl w-full max-w-sm mx-auto border-4 border-amber-400/50" 
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-amber-400">About Johana</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              With over a decade of experience in the tattoo industry, I specialize in creating custom designs that are both beautiful and meaningful. My passion lies in blackwork, fine-line, and neo-traditional styles, but I love collaborating with clients to bring any vision to life.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              For me, tattooing is more than just a job; it's a way to connect with people and help them express their individuality. My studio is a safe, inclusive, and professional space where creativity flourishes. Let's create something amazing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
