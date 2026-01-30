import React from 'react';
import { Section } from './ui/Section';
import { Clock, FileText, DollarSign, PenTool, HelpCircle, UserX } from 'lucide-react';

const problems = [
  { id: "01", icon: Clock, title: "Time Cost", text: "見積もり作成に時間がかかりすぎる" },
  { id: "02", icon: FileText, title: "Proposal Quality", text: "提案資料がいつも似たようなものになってしまう" },
  { id: "03", icon: DollarSign, title: "Outsourcing", text: "チラシ・広告の外注費がバカにならない" },
  { id: "04", icon: PenTool, title: "Documentation", text: "日報・報告書の作成が面倒で、現場から戻ると深夜になる" },
  { id: "05", icon: HelpCircle, title: "Implementation", text: "AIを使いたいが、何から始めればいいかわからない" },
  { id: "06", icon: UserX, title: "Education", text: "若手にAIを教えたいが、自分もよくわからない" },
];

export const ProblemSection: React.FC = () => {
  return (
    <Section id="issues">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">ISSUES</h2>
          <p className="text-orange-500 font-bold tracking-widest text-sm">建設現場の課題</p>
        </div>
        <p className="text-zinc-500 max-w-md text-right md:text-left mt-4 md:mt-0">
          現場の忙しさに追われ、新しい技術を取り入れる余裕がない。<br />
          そんな経営者の悩みを解決します。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, index) => (
          <div key={index} className="group border-b border-r border-white/10 p-8 relative hover:bg-white/5 transition-colors duration-300 flex flex-col gap-8">
            <div className="flex justify-between items-start">
              <span className="text-3xl font-thin text-zinc-600 font-mono group-hover:text-orange-500 transition-colors opacity-50">{problem.id}</span>
              <problem.icon className="text-zinc-500 group-hover:text-white transition-colors" size={24} />
            </div>
            <div>
              <h3 className="text-xs text-orange-500 font-bold tracking-wider mb-2 uppercase">{problem.title}</h3>
              <p className="text-lg text-zinc-400 font-medium leading-relaxed">{problem.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-10 border border-white/10 bg-zinc-900/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <h3 className="text-2xl md:text-4xl font-bold leading-relaxed relative z-10">
          「AIを導入したいけど、どこから手をつければ…」<br />
          <span className="text-zinc-500 text-lg md:text-xl mt-4 block font-normal">
            その課題、建設業特化の<span className="text-orange-500 font-bold">「顧問」</span>が解決します。
          </span>
        </h3>
      </div>
    </Section>
  );
};