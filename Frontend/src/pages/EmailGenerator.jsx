import React, { useState } from "react";
import axios from "axios";

const EmailGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setGeneratedEmail("");
    try {
      const res = await axios.post("http://localhost:5000/generate-email", { prompt });
      setGeneratedEmail(res.data.generatedEmail);
    } catch (error) {
      alert("❌ Error generating email");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "linear-gradient(to bottom, #B372CF, #1E1E2E)",
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-white/20">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-white to-[#B372CF] bg-clip-text text-transparent mb-3">
          ✉️ AI Email Generator
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Generate professional, personalized emails in seconds — powered by AI.
        </p>

        {/* Textarea */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="E.g., Write a thank-you email to a client for their purchase..."
          className="w-full p-4 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6 resize-none"
          rows={5}
        />

        {/* Button */}
        <button
          onClick={handleGenerate}
          className={`w-full py-3 rounded-xl font-medium shadow-md transition-all duration-200 ${
            loading
              ? "bg-purple-400 cursor-not-allowed text-white"
              : "bg-gradient-to-r from-[#B372CF] to-purple-600 hover:opacity-90 text-white"
          }`}
          disabled={loading}
        >
          {loading ? "Generating..." : "🚀 Generate Email"}
        </button>

        {/* Output */}
        {generatedEmail && (
          <div className="mt-8 p-6 bg-black/30 border border-white/20 rounded-xl shadow-inner text-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">📧 Generated Email:</h2>
              <button
                className="text-sm text-purple-300 hover:underline"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>
            {isEditing ? (
              <textarea
                value={generatedEmail}
                onChange={(e) => setGeneratedEmail(e.target.value)}
                className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                rows={8}
              />
            ) : (
              <div className="whitespace-pre-wrap leading-relaxed">{generatedEmail}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailGenerator;
