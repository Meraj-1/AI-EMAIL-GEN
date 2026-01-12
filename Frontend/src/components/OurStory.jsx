import React from "react";

const OurStory = () => {
  return (
    <section className="relative py-32 bg-gray-950 text-white px-6 overflow-hidden">

      {/* Background Glow Circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto">

        {/* Main Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Our Story
          </h2>
          <p className="text-gray-400 text-lg">
            At Serenedale, writing emails should never be a struggle. We help professionals,
            students, founders, and freelancers save time while making every email impactful.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Our Mission 🚀
            </h3>
            <p className="text-gray-300">
              Combine AI power with human-like clarity to generate professional emails in seconds.
            </p>
            <p className="text-gray-300">
              Focus on productivity, precision, and privacy — AI that understands context, audience, and tone.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Our Vision 🌟
            </h3>
            <p className="text-gray-300">
              A world where writing professional emails is as simple as clicking a button.
            </p>
            <p className="text-gray-300">
              Serenedale aspires to be the smartest AI communication assistant for professionals worldwide.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Our Core Values 💡
          </h3>
          <ul className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Simplicity", desc: "Intuitive interface, zero confusion." },
              { title: "Speed", desc: "Professional results in seconds." },
              { title: "Privacy", desc: "Sensitive data never stored or shared." },
              { title: "Reliability", desc: "Consistent, context-aware output." },
            ].map((v) => (
              <li key={v.title} className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition">
                <h4 className="font-semibold mb-2">{v.title}</h4>
                <p>{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Meet The Team 👥
          </h3>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { emoji: "👨‍💻", name: "Alex Johnson", role: "CEO & Co-founder — Passionate about AI & productivity." },
              { emoji: "🤖", name: "Rhea Kapoor", role: "Lead AI Engineer — Builds smarter, context-aware email algorithms." },
              { emoji: "🎨", name: "Samir Patel", role: "UI/UX Designer — Ensures Serenedale is intuitive & beautiful." },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition hover:scale-105 shadow-lg">
                <div className="text-5xl mb-4">{t.emoji}</div>
                <h4 className="font-semibold mb-2">{t.name}</h4>
                <p className="text-gray-300 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Join Us On Our Journey 🌟
          </h3>
          <p className="text-gray-300 mb-4">
            Serenedale is more than an AI email generator — it’s a movement to make professional communication effortless.
          </p>
          <p className="text-gray-300 mb-8">
            Students, freelancers, and professionals alike can write better emails, save time, and achieve more.
          </p>
          <button className="px-12 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg shadow-lg">
            Start Writing Smarter Emails 🚀
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
