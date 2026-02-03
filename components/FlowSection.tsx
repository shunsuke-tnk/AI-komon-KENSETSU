import React from 'react';
import { Section } from './ui/Section';

const flowSteps = [
  {
    step: '01',
    title: '無料AI活用診断',
    desc: 'Zoom（30分）で現状の業務をヒアリング。改善ポイントを洗い出し、「何が改善できて、何ができないか」を明確化します。',
    highlight: true,
  },
  {
    step: '02',
    title: 'ロードマップ提示',
    desc: '「何を」「どの順番で」改善するかを明確化。「これとこれを改善するなら約◯ヶ月」という絵を提示します。',
    highlight: false,
  },
  {
    step: '03',
    title: 'ご契約',
    desc: 'プランを選択し、契約を締結。ご不明点があればこの段階で何でもご質問ください。',
    highlight: false,
  },
  {
    step: '04',
    title: 'サービス開始',
    desc: 'キックオフミーティングから開始。チャット相談もスタートし、AI活用の伴走がはじまります。',
    highlight: false,
  },
];

export const FlowSection: React.FC = () => {
  return (
    <Section id="flow">
      {/* Header with Background Text */}
      <div className="relative text-center mb-16 md:mb-20">
        {/* Background FLOW text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[12rem] md:text-[18rem] font-black text-zinc-800/30 tracking-tighter select-none">
            FLOW
          </span>
        </div>
        {/* Main Title */}
        <h2 className="relative text-4xl md:text-6xl font-black tracking-tight">
          ご利用の流れ
        </h2>
      </div>

      {/* Flow Steps - Centered */}
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-zinc-800"></div>

          <div className="space-y-10">
            {flowSteps.map((item, i) => (
              <div key={i} className="relative pl-12 group">
                {/* Dot */}
                <div className={`absolute left-[-5px] top-2 w-[12px] h-[12px] border-2 ${
                  item.highlight
                    ? 'bg-orange-500 border-orange-500'
                    : 'bg-black border-zinc-500 group-hover:bg-orange-500 group-hover:border-orange-500'
                } transition-colors`}></div>

                <div className="text-sm font-mono text-orange-500 mb-2">STEP {item.step}</div>
                <h4 className={`text-2xl font-bold mb-3 ${
                  item.highlight ? 'text-orange-500' : 'group-hover:text-orange-500'
                } transition-colors`}>
                  {item.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed text-lg">{item.desc}</p>

                {item.highlight && (
                  <div className="mt-4 inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/30 text-orange-500 text-sm font-bold">
                    無料・押し売り一切なし
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
