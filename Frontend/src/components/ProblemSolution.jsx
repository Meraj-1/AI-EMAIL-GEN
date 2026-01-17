import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, Zap, BarChart3, Clock, BrainCircuit } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    { title: "Latency in Composition", desc: "Excessive time spent drafting and restructuring.", icon: Clock },
    { title: "Low Response Probability", desc: "Messages lack clarity or engagement signals.", icon: BarChart3 },
    { title: "Tone Calibration Errors", desc: "Inconsistent balance between formal and casual.", icon: AlertTriangle },
  ];

  const solutions = [
    { title: "Real-time Generation", desc: "Context-aware emails in under 5 seconds.", icon: Zap },
    { title: "Precision-Tuned Tone", desc: "Optimized for sales, hiring, and follow-ups.", icon: BrainCircuit },
    { title: "Zero Cognitive Load", desc: "No drafting or second-guessing required.", icon: ShieldCheck },
  ];

  return (
    <section className="relative py-32 bg-[#02040a] text-white overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 border border-cyan-500/30 rounded-full bg-cyan-500/5 mb-6"
          >
            <p className="text-[10px] tracking-[0.4em] text-cyan-400 font-bold uppercase">
              System Diagnostic : 0x442
            </p>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 italic">
            Human Error is <span className="text-gray-600 line-through">Inevitable</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Obsolete.
            </span>
          </h2>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch relative">
          
          {/* THE DIVIDER ICON */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 items-center justify-center bg-[#02040a] border border-white/10 rounded-full">
            <div className="w-10 h-10 rounded-full border border-cyan-500/50 flex items-center justify-center animate-spin-slow">
               <Zap size={20} className="text-cyan-400" />
            </div>
          </div>

          {/* LEFT: THE PROBLEM (CRITICAL STATE) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative p-1 bg-gradient-to-b from-red-500/20 to-transparent rounded-3xl"
          >
            <div className="h-full bg-[#0b0f19]/80 backdrop-blur-3xl rounded-[22px] p-10 border border-white/5">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-xl font-bold tracking-widest uppercase text-red-500/80">
                  Legacy Workflow
                </h3>
                <span className="text-[10px] font-mono text-red-500 animate-pulse">● DEGRADED</span>
              </div>

              <div className="space-y-10">
                {problems.map((item, idx) => (
                  <div key={idx} className="flex gap-6 group/item opacity-60 hover:opacity-100 transition-opacity">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/5 border border-red-500/20 flex items-center justify-center text-red-400">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-200 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: THE SOLUTION (OPTIMAL STATE) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative p-1 bg-gradient-to-b from-cyan-500/30 to-purple-500/30 rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.1)]"
          >
            <div className="h-full bg-[#0b0f19]/80 backdrop-blur-3xl rounded-[22px] p-10 border border-cyan-500/20">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-xl font-bold tracking-widest uppercase text-cyan-400">
                  Neural Core v2
                </h3>
                <span className="text-[10px] font-mono text-cyan-400 animate-pulse">● OPTIMIZED</span>
              </div>

              <div className="space-y-10">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex gap-6 group/item">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* METRICS SECTION */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Drafting Time", old: "15m", new: "2s", color: "cyan" },
            { label: "Accuracy", old: "72%", new: "99%", color: "purple" },
            { label: "Energy Cost", old: "High", new: "Min", color: "cyan" },
            { label: "Output Quality", old: "Var", new: "Const", color: "purple" },
          ].map((stat, i) => (
            <div key={i} className="p-6 border border-white/5 bg-white/2 backdrop-blur-sm text-center">
              <p className="text-[10px] uppercase tracking-tighter text-gray-500 mb-2">{stat.label}</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs text-red-500/50 line-through">{stat.old}</span>
                <span className="text-lg font-mono font-bold text-white">→ {stat.new}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;