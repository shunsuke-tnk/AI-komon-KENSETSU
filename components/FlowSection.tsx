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

const contractTerms = [
  { label: '最低契約期間', value: '3ヶ月' },
  { label: '試用期間', value: '最初の1ヶ月' },
  { label: '支払い', value: '月額・前払い' },
];

export const FlowSection: React.FC = () => {
  return (
    <Section id="flow">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left: Contract Terms */}
        <div className="lg:w-1/3">
          <h2 className="text-5xl font-black tracking-tighter mb-8">FLOW</h2>
          <p className="text-zinc-500 text-sm mb-8">契約条件・ご利用の流れ</p>

          <div className="p-6 border border-white/10 bg-zinc-900/30">
            <h3 className="text-sm font-bold text-orange-500 mb-6 tracking-widest uppercase">Contract Terms</h3>
            <div className="space-y-4 text-sm">
              {contractTerms.map((term, index) => (
                <div key={index} className="flex justify-between border-b border-white/5 pb-3">
                  <span className="text-zinc-500">{term.label}</span>
                  <span className="text-white font-medium">{term.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trial Period Note */}
          <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30">
            <p className="text-sm text-zinc-300">
              <span className="text-orange-500 font-bold">試用期間について：</span><br />
              最初の1ヶ月は「試用期間」です。万が一「合わない」と感じた場合は、1ヶ月で終了可能です。
            </p>
          </div>
        </div>

        {/* Right: Flow Steps */}
        <div className="lg:w-2/3 relative">
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

                <div className="text-xs font-mono text-orange-500 mb-2">STEP {item.step}</div>
                <h4 className={`text-2xl font-bold mb-3 ${
                  item.highlight ? 'text-orange-500' : 'group-hover:text-orange-500'
                } transition-colors`}>
                  {item.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>

                {item.highlight && (
                  <div className="mt-4 inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/30 text-orange-500 text-xs font-bold">
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
