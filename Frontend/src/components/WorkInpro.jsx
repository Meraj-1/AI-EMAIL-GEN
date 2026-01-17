import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Settings, Cpu, HardDrive, Terminal } from "lucide-react";
import assets from "../assets/assets";

const WorkInpro = () => {
  // Fake build logs for the immersion
  const logs = [
    "Initializing Neural Core v4.0.2...",
    "Optimizing linguistic weights...",
    "Syncing with Serenedale API...",
    "Compiling interface modules...",
    "Status: 70% complete."
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#02040a] text-white px-6 text-center overflow-hidden">
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* STATUS BADGE */}
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md"
        >
          <span className="text-[10px] tracking-[0.3em] text-cyan-400 font-black uppercase">
            System Deployment in Progress
          </span>
        </motion.div>

        {/* ILLUSTRATION WITH FLOATING ICONS */}
        <div className="relative mb-12">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 text-purple-500/40"
            >
              <Settings size={48} />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-8 text-cyan-500/40"
            >
              <Cpu size={40} />
            </motion.div>
            
            <img
              src={assets.progress}
              alt="Work in Progress"
              className="w-56 md:w-72 drop-shadow-[0_0_50px_rgba(34,211,238,0.3)] relative z-10"
            />
        </div>

        {/* HEADING & SUBTEXT */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Compiling the <br />
            <span className="text-cyan-400">Future Experience.</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Our engineers are currently integrating the next generation of 
            autonomous email protocols. High-fidelity communication is 
            initializing. Please remain on standby.
          </p>
        </div>

        {/* PROGRESS BOX */}
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl mb-12">
          <div className="flex justify-between items-end mb-4">
            <div className="text-left">
              <p className="text-[10px] text-gray-500 font-mono">MODULE_SYNC</p>
              <h3 className="text-xl font-bold font-mono tracking-tighter">70.42%</h3>
            </div>
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-1 h-4 ${i < 4 ? 'bg-cyan-500' : 'bg-gray-800'}`} />
              ))}
            </div>
          </div>
          
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-6">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
            />
          </div>

          {/* TERMINAL LOGS */}
          <div className="bg-black/40 rounded-lg p-4 text-left font-mono text-[9px] text-cyan-500/70 space-y-1 border border-white/5">
            {logs.map((log, i) => (
              <p key={i} className="flex gap-2">
                <span className="text-gray-700">[{10 + i}:00:44]</span> {log}
              </p>
            ))}
            <motion.span 
              animate={{ opacity: [0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1.5 h-3 bg-cyan-500 ml-1 translate-y-0.5"
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            to="/"
            className="group relative px-8 py-3 bg-white text-black font-black text-xs tracking-[0.2em] uppercase overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">Abort & Return</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
          </Link>

          <a
            href="mailto:support@serenedale.com"
            className="flex items-center gap-2 px-8 py-3 border border-white/10 text-white font-black text-xs tracking-[0.2em] uppercase hover:bg-white/5 transition-all"
          >
            <Terminal size={14} className="text-cyan-500" /> System Support
          </a>
        </div>

      </div>

      {/* FOOTER METADATA */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8">
        <div className="flex items-center gap-2 opacity-20">
            <HardDrive size={12} />
            <span className="text-[10px] font-mono tracking-widest uppercase">Node_Mainframe_01</span>
        </div>
        <div className="flex items-center gap-2 opacity-20">
            <span className="text-[10px] font-mono tracking-widest uppercase">Latency: 12ms</span>
        </div>
      </div>
    </div>
  );
};

export default WorkInpro;