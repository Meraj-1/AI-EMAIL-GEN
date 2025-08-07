import React, { useState } from 'react';
import axios from 'axios';

const EmailGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setGeneratedEmail(''); // Optional: clear previous result
    try {
      const res = await axios.post('http://localhost:5000/generate-email', { prompt });
      setGeneratedEmail(res.data.generatedEmail);
    } catch (error) {
      alert('Error generating email');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        ✉️ AI Email Generator
      </h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt (e.g., Write a thank-you email)..."
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition mb-4 text-gray-700"
        rows={5}
      />

      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className={`px-6 py-2 rounded-md text-white font-medium transition-colors ${
            loading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Email'}
        </button>
      </div>

      {generatedEmail && (
        <div className="mt-8 p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">📧 Generated Email:</h2>
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{generatedEmail}</div>
        </div>
      )}
    </div>
  );
};

export default EmailGenerator;
