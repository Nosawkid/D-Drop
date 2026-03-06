import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 text-center bg-zinc-950 overflow-hidden">
      {/* Subtle background glow effect for that "secret/cyber" vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto mt-16">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl">
          Want to share a <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            secret?
          </span>
        </h1>
        
        <p className="mb-10 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Type your message, share the generated link, and rest easy knowing it self-destructs the moment they read it. No traces left behind.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={"/generate"} className="px-8 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-200 bg-emerald-400 rounded-full hover:bg-emerald-300 hover:scale-105 active:scale-95">
            Create Secret Link
          </Link>
          <a href='#works' className="px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 border border-zinc-800 rounded-full hover:bg-zinc-800/50">
            How it works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;