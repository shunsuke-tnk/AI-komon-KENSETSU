import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 px-6 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
            <h4 className="font-black text-2xl tracking-tighter mb-2">CONSTRUCTION<br/>AI ADVISOR</h4>
            <p className="text-zinc-500 text-xs font-mono">
                AI CONSULTING SERVICE FOR CONSTRUCTION INDUSTRY.<br/>
                OPTIMIZE YOUR WORKFLOW.
            </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-end md:items-center">
             <div className="flex gap-6 text-sm font-bold text-zinc-400">
                <a href="#" className="hover:text-white transition-colors">利用規約</a>
                <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
                <a href="#" className="hover:text-white transition-colors">特定商取引法</a>
             </div>
             <div className="text-zinc-600 text-xs font-mono">
                © 2024 CONSTRUCTION AI ADVISOR.
             </div>
        </div>
      </div>
    </footer>
  );
};