import React from 'react';
import { Section } from './ui/Section';
import { Clock, FileText, DollarSign, PenTool, HelpCircle, UserX, CheckSquare } from 'lucide-react';

const problems = [
  {
    id: "01",
    icon: Clock,
    title: "残業地獄",
    text: "日中は現場、定時後に事務処理。気づけば毎月35時間以上の残業"
  },
  {
    id: "02",
    icon: FileText,
    title: "見積もり作成",
    text: "見積もり作成に2時間以上。原価表を見ながら電卓を叩く日々"
  },
  {
    id: "03",
    icon: PenTool,
    title: "書類作成",
    text: "日報・写真整理・報告書作成。この「ちょっとした作業」の積み重ねが残業に"
  },
  {
    id: "04",
    icon: CheckSquare,
    title: "提案の差別化",
    text: "提案資料がいつも似たようなものになり、差別化できず契約率が上がらない"
  },
  {
    id: "05",
    icon: DollarSign,
    title: "外注コスト",
    text: "チラシ制作を外注すると約20万円。自分で作りたいがデザインスキルも時間もない"
  },
  {
    id: "06",
    icon: HelpCircle,
    title: "AI導入の壁",
    text: "AIを使いたいが、何から始めればいいかわからない。高額な投資のイメージも"
  },
  {
    id: "07",
    icon: UserX,
    title: "人材不足",
    text: "AI人材を採用したいが年収も高額。でも若手に教えられるほど自分も詳しくない"
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <Section id="issues">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">ISSUES</h2>
          <p className="text-orange-500 font-bold tracking-widest text-sm">こんなお悩みありませんか？</p>
        </div>
        <p className="text-zinc-500 max-w-md text-right md:text-left mt-4 md:mt-0">
          現場の忙しさに追われ、新しい技術を取り入れる余裕がない。<br />
          そんな経営者の悩みを解決します。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {problems.map((problem, index) => (
          <div key={index} className="group border-b border-r border-white/10 p-8 relative hover:bg-white/5 transition-colors duration-300 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <span className="text-3xl font-thin text-zinc-600 font-mono group-hover:text-orange-500 transition-colors opacity-50">{problem.id}</span>
              <problem.icon className="text-zinc-500 group-hover:text-white transition-colors" size={24} />
            </div>
            <div>
              <h3 className="text-xs text-orange-500 font-bold tracking-wider mb-2 uppercase">{problem.title}</h3>
              <p className="text-base text-zinc-400 font-medium leading-relaxed">{problem.text}</p>
            </div>
          </div>
        ))}

        {/* 空のカードでグリッドを埋める */}
        <div className="hidden xl:block border-b border-r border-white/10 p-8"></div>
      </div>

      <div className="mt-20 p-10 md:p-16 border border-white/10 bg-zinc-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-zinc-400 mb-6 text-center">
            「AIを導入したいけど、どこから手をつければ...」
          </p>
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed text-center">
            その悩み、建設業で<span className="text-orange-500 font-bold">毎日0時残業から定時帰り</span>を実現した私が、<br className="hidden md:block" />
            <span className="text-white font-bold">0から一緒に解決します。</span>
          </p>
        </div>
      </div>
    </Section>
  );
};
