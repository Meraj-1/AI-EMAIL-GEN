import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Terminal, Zap, ShieldCheck, Activity } from "lucide-react";
import Header from "./Header";
import LightRays from "../animations/LightRays";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullMessage = "Based on our objectives, I've identified a 42% increase in efficiency via our new neural integration. Shall we proceed?";

  // Typing Effect Simulation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullMessage.slice(0, i));
      i++;
      if (i > fullMessage.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#02040a]">
      {/* 1. ANIMATED BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#22d3ee"
          raysSpeed={0.4}
          lightSpread={0.5}
          rayLength={1.2}
          followMouse
          mouseInfluence={0.03}
          className="mix-blend-screen opacity-40"
        />
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* 2. OVERLAYS & GLOWS */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02040a]/0 via-[#02040a]/60 to-[#02040a] z-10" />
      <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-cyan-500/10 blur-[150px] z-10 animate-pulse" />
      
      <Header />

      <div className="relative z-30 flex min-h-screen items-center px-8 md:px-20 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT: SYSTEM BOOTUP ANIMATION */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* BRAIN MODULE BADGE */}
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-cyan-950/30 border border-cyan-500/30 rounded-full text-cyan-400 text-[10px] font-bold tracking-[0.3em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Neural Core v2.0 Active
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-[1.1] tracking-tighter text-white">
              Precision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                Neural Messaging
              </span>
            </h1>

            <p className="text-gray-400 max-w-lg text-lg leading-relaxed font-light">
              Bypass the generic AI "fluff." Serenedale uses 
              <span className="text-cyan-400 font-mono italic"> cognitive intent mapping </span> 
              to draft emails that sound more like you than you do.
            </p>

            {/* CTAS WITH HOVER EFFECTS */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                to="/generator"
                className="group relative px-10 py-4 bg-cyan-500 text-black font-black text-xs tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                <div className="relative z-10 flex items-center gap-2">
                  Initialize Neural Link <ChevronRight size={16} />
                </div>
              </Link>

              <button className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                  <Activity size={16} />
                </div>
                View System Specs
              </button>
            </div>

            {/* LIVE SYSTEM TELEMETRY */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
              {[
                { label: "Latency", val: "1.2ms", icon: Zap },
                { label: "Privacy", val: "AES-256", icon: ShieldCheck },
                { label: "Throughput", val: "850/m", icon: Terminal },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    <stat.icon size={12} className="text-cyan-600" /> {stat.label}
                  </div>
                  <div className="text-sm font-mono text-gray-200">{stat.val}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT PANEL: INTERACTIVE TERMINAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative group"
          >
            {/* Decorative Corner Brackets */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500/40" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-purple-500/40" />

            <div className="relative overflow-hidden backdrop-blur-3xl bg-[#0b0f19]/80 border border-white/10 p-1 rounded-sm shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-gray-500 tracking-[0.2em]">CORE_OUTPUT_MODULE.sh</div>
              </div>

              {/* Terminal Content */}
              <div className="p-8 space-y-6 font-mono text-sm leading-relaxed min-h-[320px]">
                <div className="space-y-1">
                  <span className="text-cyan-500/50 text-xs tracking-tighter">TO:</span>
                  <span className="text-white ml-2">stakeholder_id_09</span>
                </div>
                <div className="space-y-1">
                  <span className="text-purple-500/50 text-xs tracking-tighter">SUB:</span>
                  <span className="text-cyan-100 ml-2">Integration Protocol Enhancement</span>
                </div>
                
                <div className="pt-4 text-gray-300 border-t border-white/5">
                  <span className="text-cyan-400">root@neural:~$</span> generate --tone=persuasive
                  <br />
                  <p className="mt-4 text-white leading-loose">
                    {displayText}
                    <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1 align-middle" />
                  </p>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="px-6 py-4 bg-cyan-500/5 flex justify-between items-center border-t border-white/5">
                <div className="text-[10px] text-cyan-500/70 animate-pulse">● ENGINES RUNNING</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Confidence: 99.4%</div>
              </div>
            </div>

            {/* Floating Background Element */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600/20 blur-[60px] rounded-full z-[-1]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;