
import React, { useState } from 'react';
import { generateTattooIdeas } from '../services/geminiService.ts';
import type { TattooIdea } from '../types.ts';

const IdeaGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [ideas, setIdeas] = useState<TattooIdea[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) {
      setError('Please enter a theme or idea.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setIdeas([]);

    try {
      const generatedIdeas = await generateTattooIdeas(prompt);
      setIdeas(generatedIdeas);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="idea-generator" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2 text-amber-400">AI Tattoo Idea Generator</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">Stuck for ideas? Describe a theme, subject, or style, and let AI create unique concepts for you.</p>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., 'a geometric wolf on a forearm'"
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-amber-400 text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-amber-300 transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : 'Get Ideas'}
            </button>
          </div>
        </form>

        {error && <p className="text-red-400 bg-red-900/50 p-3 rounded-md">{error}</p>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {ideas.map((idea, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transform transition-transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-amber-400 mb-3">{idea.title}</h3>
              <p className="text-amber-500 font-semibold mb-3">{idea.style}</p>
              <p className="text-gray-300">{idea.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdeaGenerator;