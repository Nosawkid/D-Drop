import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Enter your message',
    description: 'Type out the sensitive information or secret you want to share securely.',
  },
  {
    number: '02',
    title: 'Generate the link',
    description: 'Create a unique, one-time-use URL that points directly to your encrypted message.',
  },
  {
    number: '03',
    title: 'Share the link',
    description: 'Send the generated link to your intended recipient via any messaging platform.',
  },
  {
    number: '04',
    title: 'Burn after reading',
    description: 'Once the message is seen, it becomes stale and is permanently deleted. It cannot be retrieved again.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id='works' className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            How it <span className="text-emerald-400">works</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg">
            Four simple steps to share information without leaving a trace.
          </p>
        </div>

        {/* Responsive Grid for Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex flex-col p-8 transition-colors duration-300 border rounded-2xl bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900"
            >
              <span className="mb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-600 opacity-80">
                {step.number}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-zinc-100">
                {step.title}
              </h3>
              <p className="leading-relaxed text-zinc-400 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;