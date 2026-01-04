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
    setIsEditing(false);

    try {
      const res = await axios.post(
        "https://ai-email-gen-three.vercel.app/generate-email",
        { prompt }
      );
      setGeneratedEmail(res.data.generatedEmail);
    } catch (error) {
      console.error(error);
      alert("❌ Error generating email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 relative bg-gradient-to-b from-[#B372CF] to-[#1E1E2E]"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-3xl p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-b from-white to-[#B372CF] bg-clip-text text-transparent mb-3">
          ✉️ AI Email Generator
        </h1>
        <p className="text-center text-gray-200 mb-8 text-sm md:text-base">
          Generate professional, personalized emails in seconds — powered by AI.
        </p>

        {/* Prompt Input */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="E.g., Write a thank-you email to a client for their purchase..."
          rows={5}
          className="w-full p-4 mb-6 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`w-full py-3 rounded-xl font-medium shadow-md transition-all duration-200 ${
            loading
              ? "bg-purple-400 cursor-not-allowed text-white"
              : "bg-gradient-to-r from-[#B372CF] to-purple-600 hover:opacity-90 text-white"
          }`}
        >
          {loading ? "Generating..." : "🚀 Generate Email"}
        </button>

        {/* Generated Email Output */}
        {generatedEmail && (
          <div className="mt-8 p-6 rounded-xl bg-black/30 border border-white/20 shadow-inner text-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">📧 Generated Email</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-sm text-purple-300 hover:underline"
              >
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>

            {isEditing ? (
              <textarea
                value={generatedEmail}
                onChange={(e) => setGeneratedEmail(e.target.value)}
                rows={8}
                className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
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
