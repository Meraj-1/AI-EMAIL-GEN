import { useState } from "react";
import axios from "axios";
import { Loader2, Copy, Pencil } from "lucide-react";

const EmailGeneratorPro = () => {
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const generateEmail = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setEmail("");
    setEditing(false);

    try {
      const res = await axios.post(
        "https://ai-email-gen-three.vercel.app/generate-email",
        { prompt }
      );
      setEmail(res.data.generatedEmail);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("Copied to clipboard ✅");
  };

  return (
    <section className="min-h-screen bg-[#0B0B12] text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            AI Email Workspace
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Describe what you want to say — Serenedale writes the perfect email for you.
          </p>
        </div>

        {/* Workspace */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT: PROMPT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">✍️ Your Instructions</h3>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: Write a polite follow-up email to a recruiter after interview"
              rows={8}
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              onClick={generateEmail}
              disabled={loading}
              className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold
                         bg-purple-600 hover:bg-purple-700 transition disabled:opacity-60"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Generate Email"}
            </button>

            <p className="text-xs text-gray-500 mt-4">
              ⚡ Usually takes less than 5 seconds
            </p>
          </div>

          {/* RIGHT: OUTPUT */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">📨 Generated Email</h3>

              {email && (
                <div className="flex gap-3 text-gray-400">
                  <button onClick={() => setEditing(!editing)}>
                    <Pencil size={18} />
                  </button>
                  <button onClick={copyToClipboard}>
                    <Copy size={18} />
                  </button>
                </div>
              )}
            </div>

            {!email && (
              <div className="h-full flex items-center justify-center text-gray-500 text-sm">
                Generated email will appear here
              </div>
            )}

            {email && (
              <>
                {editing ? (
                  <textarea
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    rows={12}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <div className="whitespace-pre-wrap leading-relaxed text-gray-200">
                    {email}
                  </div>
                )}
              </>
            )}

            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center text-gray-500 text-sm">
          🔒 Your prompts are private • ✨ Unlimited generations • 🚀 AI-powered
        </div>
      </div>
    </section>
  );
};

export default EmailGeneratorPro;
