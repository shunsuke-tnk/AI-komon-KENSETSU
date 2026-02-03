import React from 'react';
import { Section } from './ui/Section';
import { X, Check, Zap, Clock, GraduationCap, Shield } from 'lucide-react';

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
      <div className="max-w-6xl mx-auto">
        {/* Header Row */}
        <div className="grid grid-cols-[140px_1fr_1fr] md:grid-cols-[200px_1fr_1fr] gap-1 mb-1">
          <div></div>
          <div className="text-center py-6 md:py-8 bg-zinc-800 border border-zinc-700">
            <span className="text-zinc-400 font-bold text-xl md:text-2xl">AI人材を採用</span>
          </div>
          <div className="text-center py-6 md:py-8 bg-orange-500">
            <span className="text-black font-black text-xl md:text-2xl">AI顧問</span>
          </div>
        </div>

        {/* Data Rows */}
        {comparisonData.map((row, index) => (
          <div key={index} className="grid grid-cols-[140px_1fr_1fr] md:grid-cols-[200px_1fr_1fr] gap-1 mb-1">
            {/* Label */}
            <div className="flex items-center justify-start py-6 md:py-8 px-4 md:px-6 bg-zinc-900 border-l-4 border-l-zinc-600">
              <span className="text-lg md:text-2xl font-bold text-white">{row.label}</span>
            </div>

            {/* Hiring - Negative */}
            <div className="py-6 md:py-8 px-4 md:px-8 bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-3 md:gap-4 mb-2">
                <X className="text-zinc-600 shrink-0" size={28} strokeWidth={3} />
                <span className="text-zinc-400 font-bold text-lg md:text-2xl">{row.hiring}</span>
              </div>
              <p className="text-zinc-600 text-sm md:text-base pl-10 md:pl-12">{row.hiringNote}</p>
            </div>

            {/* Advisor - Positive */}
            <div className="py-6 md:py-8 px-4 md:px-8 bg-orange-500/10 border-2 border-orange-500/40">
              <div className="flex items-center gap-3 md:gap-4 mb-2">
                <Check className="text-orange-500 shrink-0" size={28} strokeWidth={3} />
                <span className="text-white font-bold text-lg md:text-2xl">{row.advisor}</span>
              </div>
              <p className="text-zinc-400 text-sm md:text-base pl-10 md:pl-12">{row.advisorNote}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Key Message */}
      <div className="mt-20 max-w-3xl mx-auto">
        <div className="border-2 border-orange-500 p-10 bg-orange-500/5 text-center relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black px-6 py-1">
            <span className="text-orange-500 font-bold text-base tracking-wider">KEY MESSAGE</span>
          </div>
          <p className="text-3xl md:text-4xl font-bold text-white leading-relaxed">
            「この人に聞けば、<br className="md:hidden" />AI周りはなんとかなる」
          </p>
          <p className="text-2xl text-orange-500 font-bold mt-4">
            そんな安心感を、月10万円で。
          </p>
        </div>
      </div>

      {/* Benefits Icons */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="text-center p-6 border border-white/10 bg-zinc-900/30">
          <Zap className="text-orange-500 mx-auto mb-3" size={32} />
          <p className="text-base font-medium">即戦力</p>
          <p className="text-sm text-zinc-500 mt-1">今すぐ活用開始</p>
        </div>
        <div className="text-center p-6 border border-white/10 bg-zinc-900/30">
          <Clock className="text-orange-500 mx-auto mb-3" size={32} />
          <p className="text-base font-medium">時間削減</p>
          <p className="text-sm text-zinc-500 mt-1">採用活動不要</p>
        </div>
        <div className="text-center p-6 border border-white/10 bg-zinc-900/30">
          <GraduationCap className="text-orange-500 mx-auto mb-3" size={32} />
          <p className="text-base font-medium">教育支援</p>
          <p className="text-sm text-zinc-500 mt-1">社員も成長</p>
        </div>
        <div className="text-center p-6 border border-white/10 bg-zinc-900/30">
          <Shield className="text-orange-500 mx-auto mb-3" size={32} />
          <p className="text-base font-medium">低リスク</p>
          <p className="text-sm text-zinc-500 mt-1">試用期間あり</p>
        </div>
      </div>
    </Section>
  );
};
