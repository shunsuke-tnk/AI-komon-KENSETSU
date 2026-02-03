import React from 'react';
import { Section } from './ui/Section';

const comparisonData = [
  {
    label: '月額コスト',
    hiring: '25万円〜',
    advisor: '10万円',
    hiringNote: '給与・社会保険・福利厚生',
    advisorNote: 'シンプルな月額制',
  },
  {
    label: '導入スピード',
    hiring: '採用活動が必要',
    advisor: '今すぐ始められる',
    hiringNote: '求人・面接・選考で数ヶ月',
    advisorNote: '契約後すぐにスタート',
  },
  {
    label: '教育',
    hiring: '教育が必要',
    advisor: '教育してくれる',
    hiringNote: '社内教育の負担が発生',
    advisorNote: 'むしろ御社を教育',
  },
  {
    label: 'スキル',
    hiring: '見極めが困難',
    advisor: '実績で証明済み',
    hiringNote: '採用後のミスマッチリスク',
    advisorNote: 'どんなAIにも対応可能',
  },
  {
    label: '継続性',
    hiring: '辞めるリスク',
    advisor: '辞めない',
    hiringNote: '退職時の引き継ぎ問題',
    advisorNote: '安定した長期サポート',
  },
];

export const ConceptSection: React.FC = () => {
  return (
    <Section id="concept">
      {/* Large Title */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          AI人材を「採用」するのではなく、<br />
          <span className="text-orange-500">「顧問」として迎える</span>
        </h2>
      </div>

      {/* High-Impact Comparison Table */}
      <div className="max-w-5xl mx-auto">
        {/* Header Row */}
        <div className="flex">
          <div className="w-[160px] md:w-[220px] shrink-0"></div>
          <div className="flex-1 text-center py-8 md:py-10 bg-zinc-800/80">
            <span className="text-zinc-300 font-bold text-2xl md:text-3xl tracking-wide">AI人材を採用</span>
          </div>
          <div className="flex-1 text-center py-8 md:py-10 bg-orange-500">
            <span className="text-black font-black text-2xl md:text-3xl tracking-wide">AI顧問</span>
          </div>
        </div>

        {/* Data Rows */}
        {comparisonData.map((row, index) => (
          <div key={index} className="flex border-t border-zinc-800">
            {/* Label */}
            <div className="w-[160px] md:w-[220px] shrink-0 flex items-center py-8 md:py-10 px-5 md:px-8 bg-zinc-900/80 border-r border-zinc-800">
              <span className="text-xl md:text-2xl font-black text-white leading-tight">{row.label}</span>
            </div>

            {/* Hiring - Negative */}
            <div className="flex-1 py-8 md:py-10 px-5 md:px-10 bg-zinc-900/40">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-zinc-500 text-2xl md:text-3xl font-bold">✕</span>
                <span className="text-zinc-300 font-black text-xl md:text-2xl leading-tight">{row.hiring}</span>
              </div>
              <p className="text-zinc-500 text-base md:text-lg pl-10 md:pl-12">{row.hiringNote}</p>
            </div>

            {/* Advisor - Positive */}
            <div className="flex-1 py-8 md:py-10 px-5 md:px-10 bg-orange-500/10 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-orange-500 text-2xl md:text-3xl font-bold">✓</span>
                <span className="text-white font-black text-xl md:text-2xl leading-tight">{row.advisor}</span>
              </div>
              <p className="text-zinc-400 text-base md:text-lg pl-10 md:pl-12">{row.advisorNote}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Key Message - Bold & Large */}
      <div className="mt-24 md:mt-32 mb-8">
        <div className="text-center">
          <p className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
            「この人に聞けば、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">AI周りはなんとかなる」</span>
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-zinc-400 font-bold mt-8 md:mt-12">
            そんな安心感を、<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">月10万円</span>で。
          </p>
        </div>
      </div>
    </Section>
  );
};
