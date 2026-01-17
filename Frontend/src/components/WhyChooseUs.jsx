import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, Zap, ShieldAlert, Settings2, 
  BarChart, Layers, ChevronRight, Activity 
} from "lucide-react";

const usps = [
  {
    title: "Neural Design Core",
    description: "Engineered with cutting-edge AI and precision mechanics for unmatched autonomous reliability.",
    icon: Cpu,
    tag: "v4.0"
  },
  {
    title: "Rapid Deployment",
    description: "Fully functional units ready for production lines in record time — zero integration lag.",
    icon: Zap,
    tag: "INSTANT"
  },
  {
    title: "Fail-Safe Protocols",
    description: "Designed with hardware-level safety locks to ensure secure operation in human-centric spaces.",
    icon: ShieldAlert,
    tag: "ISO-9001"
  },
  {
    title: "Modular Interface",
    description: "Minimal setup required. Just connect, configure, and start automating immediately.",
    icon: Settings2,
    tag: "SDK 2.0"
  },
  {
    title: "Efficiency Tuning",
    description: "Algorithmically optimized to streamline operations and maximize output across industries.",
    icon: BarChart,
    tag: "+40% EFF"
  },
  {
    title: "Variable Logic",
    description: "Easily adapt hardware to different tasks with flexible programming and adjustable modules.",
    icon: Layers,
    tag: "FLEX"
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-32 bg-[#02040a] text-white px-6 overflow-hidden">
      
      {/* 1. CYBERNETIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER SECTION */}
        <div className="mb-32 text-left md:text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-8"
          >
            <Activity size={12} className="animate-pulse" /> System Advantages
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase">
            Superior <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400">Robotic</span> IQ
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            RoboTech is the hardware-software synthesis. We engineer autonomous agents 
            that don't just work—they evolve.
          </p>
        </div>

        {/* USP GRID - MODULAR DESIGN */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-8 bg-[#0b0f19]/40 border border-white/5 rounded-sm hover:border-indigo-500/50 transition-all duration-500"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] text-gray-600 tracking-widest">{item.tag}</span>
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm font-light mb-6">
                {item.description}
              </p>

              {/* Technical Indicator */}
              <div className="h-0.5 w-0 bg-indigo-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* TELEMETRY STATS SECTION */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">
          {[
            { label: "UNITS DEPLOYED", value: "500+", detail: "GLOBAL_FLEET" },
            { label: "EFFICIENCY GAIN", value: "2.4x", detail: "PEAK_LOAD" },
            { label: "RELIABILITY", value: "99.9%", detail: "UPTIME_STAT" },
            { label: "SAFETY RATING", value: "SIL-3", detail: "CERTIFIED" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#02040a] p-10 text-center group">
              <p className="text-[10px] font-mono text-gray-500 tracking-[0.3em] mb-4 group-hover:text-indigo-400 transition-colors">{stat.label}</p>
              <h4 className="text-5xl font-black text-white mb-2">{stat.value}</h4>
              <p className="text-[9px] font-mono text-indigo-500/40">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* INTEGRATED CTA BLOCK */}
        <div className="mt-32 relative group">
          <div className="absolute inset-0 bg-indigo-600/20 blur-[100px] group-hover:bg-indigo-600/30 transition-all" />
          
          <div className="relative border border-white/10 bg-[#0b0f19]/80 backdrop-blur-md rounded-3xl p-12 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-4xl font-black mb-4 tracking-tighter">
                  READY TO SCALE <br />
                  <span className="text-indigo-400 underline decoration-indigo-500/30">OPERATIONS?</span>
                </h3>
                <p className="text-gray-400 font-light max-w-md">
                  Join the network of leaders using RoboTech to define the next era of industrial automation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <button className="px-8 py-4 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-indigo-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
                  Initialize Demo <ChevronRight size={14} />
                </button>
                <button className="px-8 py-4 border border-white/10 text-white font-bold text-xs tracking-widest uppercase hover:bg-white/5 transition-all">
                  Full Specs
                </button>
              </div>
            </div>

            {/* Visual scanline effect inside CTA */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent animate-scan" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;