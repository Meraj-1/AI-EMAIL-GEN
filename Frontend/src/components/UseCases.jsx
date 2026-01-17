import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, Rocket, GraduationCap, Users, 
  UserPlus, TrendingUp, CheckCircle2, ArrowUpRight 
} from "lucide-react";

const useCases = [
  {
    title: "Working Professionals",
    role: "Daily Operations",
    desc: "Automate routine professional emails, follow-ups, and client reports with high-fidelity output.",
    icon: Briefcase,
    color: "from-blue-500/20"
  },
  {
    title: "Startup Founders",
    role: "Leadership Outreach",
    desc: "Draft investor updates and partnership proposals with authority and tactical clarity.",
    icon: Rocket,
    color: "from-purple-500/20"
  },
  {
    title: "Job Seekers",
    role: "Career Deployment",
    desc: "Generate impactful applications and networking emails that bypass HR filters.",
    icon: GraduationCap,
    color: "from-cyan-500/20"
  },
  {
    title: "HR & Recruitment",
    role: "Hiring Scalability",
    desc: "Standardize interview invites and updates while maintaining a personalized human touch.",
    icon: Users,
    color: "from-emerald-500/20"
  },
  {
    title: "Freelancers",
    role: "Client Protocol",
    desc: "Streamline pitches, onboarding, and payment follow-ups without administrative friction.",
    icon: UserPlus,
    color: "from-orange-500/20"
  },
  {
    title: "Sales Teams",
    role: "Revenue Growth",
    desc: "Scale high-converting cold outreach and lead nurturing cycles with zero drafting time.",
    icon: TrendingUp,
    color: "from-red-500/20"
  },
];

const UseCases = () => {
  return (
    <section className="relative py-32 bg-[#02040a] text-white overflow-hidden">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-cyan-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-4"
          >
            <div className="w-8 h-[1px] bg-cyan-500" />
            Deployment Scenarios
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-500">
              Every Profession.
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl font-light">
            Neural Core adapts its linguistic parameters based on the user's specific 
            deployment environment. Select your protocol.
          </p>
        </div>

        {/* TARGETING GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-sm">
          {useCases.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              className="group relative bg-[#02040a] p-10 transition-all duration-500"
            >
              {/* Corner Accents (Targeting Reticle) */}
              <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/10 group-hover:border-cyan-500/50 transition-colors" />
              <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/10 group-hover:border-cyan-500/50 transition-colors" />

              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon size={24} className="text-white group-hover:text-cyan-400 transition-colors" />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-mono tracking-[0.2em] text-cyan-500/60 uppercase mb-1">
                    {item.role}
                  </p>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-sm text-gray-500 leading-relaxed min-h-[60px]">
                  {item.desc}
                </p>

                <div className="pt-4 flex items-center gap-2 text-[10px] font-black tracking-widest text-white/20 group-hover:text-cyan-500 transition-all">
                  INITIALIZE PROTOCOL <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION: ANALYTICS PREVIEW */}
        <div className="mt-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-3xl font-bold tracking-tight">
              Operational Efficiency <br />
              Across All Modules
            </h3>
            
            <div className="space-y-6">
              {[
                "Average Time Saved: 14.5 hrs/week",
                "Grammatical Integrity: 100%",
                "Tone Consistency: Guaranteed",
                "Global Deployment: Instant"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-5 h-5 rounded-full border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                    <CheckCircle2 size={12} className="text-cyan-500" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative group">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-[80px] group-hover:bg-cyan-500/20 transition-all" />
            
            <div className="relative border border-white/10 bg-[#0b0f19]/50 backdrop-blur-xl p-8 rounded-sm">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <span className="text-[10px] font-mono text-gray-500">SYSTEM_PERFORMANCE_INDEX</span>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => <div key={i} className="w-1 h-3 bg-cyan-500/40" />)}
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed italic mb-8">
                "Whether you are managing a startup or applying for your first role, 
                communication is your primary leverage. We've built the engine that 
                multiplies that leverage."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-cyan-500" />
                <span className="text-xs font-bold tracking-[0.2em] text-white">CORE ARCHITECTS</span>
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA BOX */}
        <div className="mt-32 relative py-20 border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-transparent text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#02040a] text-cyan-500 text-[10px] font-bold tracking-[0.5em]">
            READY FOR DEPLOYMENT
          </div>
          
          <h4 className="text-4xl font-black mb-10">
            Activate Neural Core Today
          </h4>
          
          <button className="relative px-12 py-4 bg-transparent border border-cyan-400 group overflow-hidden">
            <div className="absolute inset-0 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            <span className="relative z-10 text-cyan-400 group-hover:text-black font-black text-xs tracking-[0.3em]">
              START SYSTEM INITIALIZATION
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;