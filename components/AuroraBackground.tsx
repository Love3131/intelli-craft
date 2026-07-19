"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-white" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 100, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-cyan-400/40 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -140, 80, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/35 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, 70, -70, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-sky-300/35 blur-3xl"
      />
    </div>
  );
}