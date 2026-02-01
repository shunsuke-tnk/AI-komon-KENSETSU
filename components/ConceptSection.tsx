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
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">CONCEPT</h2>
        <p className="text-zinc-500 font-mono uppercase text-sm">サービスのコンセプト</p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl md:text-4xl font-bold text-center leading-tight mb-4">
          AI人材を「採用」するのではなく、<br />
          <span className="text-orange-500">「顧問」として迎える</span>
        </h3>
      </div>

      {/* Comparison Table */}
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 mb-2">
          <div></div>
          <div className="text-center p-4 bg-zinc-800 border border-white/10">
            <span className="text-zinc-400 font-bold text-sm">AI人材を採用</span>
          </div>
          <div className="text-center p-4 bg-orange-500 text-black">
            <span className="font-bold text-sm">AI顧問</span>
          </div>
        </div>

        {/* Rows */}
        {comparisonData.map((row, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 mb-2">
            <div className="flex items-center p-4 bg-zinc-900/50 border border-white/10">
              <span className="text-sm font-bold text-zinc-300">{row.label}</span>
            </div>
            <div className="p-4 bg-zinc-900/30 border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <X className="text-red-400 shrink-0" size={16} />
                <span className="text-zinc-300 font-medium text-sm">{row.hiring}</span>
              </div>
              <p className="text-zinc-500 text-xs pl-6">{row.hiringNote}</p>
            </div>
            <div className="p-4 bg-orange-500/10 border border-orange-500/30">
              <div className="flex items-center gap-2 mb-1">
                <Check className="text-orange-500 shrink-0" size={16} />
                <span className="text-white font-medium text-sm">{row.advisor}</span>
              </div>
              <p className="text-zinc-400 text-xs pl-6">{row.advisorNote}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Key Message */}
      <div className="mt-20 max-w-3xl mx-auto">
        <div className="border-2 border-orange-500 p-10 bg-orange-500/5 text-center relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black px-6 py-1">
            <span className="text-orange-500 font-bold text-sm tracking-wider">KEY MESSAGE</span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
            「この人に聞けば、<br className="md:hidden" />AI周りはなんとかなる」
          </p>
          <p className="text-xl text-orange-500 font-bold mt-4">
            そんな安心感を、月10万円で。
          </p>
        </div>
      </div>

      {/* Benefits Icons */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="text-center p-6 border border-white/10 bg-zinc-900/30">
          <Zap className="text-orange-500 mx-auto mb-3" size={28} />
          <p className="text-sm font-medium">即戦力</p>
          <p className="text-xs text-zinc-500 mt-1">今すぐ活用開始</p>
        </div>
        <div className="text-center p-6 border border-white/10 bg-zinc-900/30">
          <Clock className="text-orange-500 mx-auto mb-3" size={28} />
          <p className="text-sm font-medium">時間削減</p>
          <p className="text-xs text-zinc-500 mt-1">採用活動不要</p>
        </div>
        <div className="text-center p-6 border border-white/10 bg-zinc-900/30">
          <GraduationCap className="text-orange-500 mx-auto mb-3" size={28} />
          <p className="text-sm font-medium">教育支援</p>
          <p className="text-xs text-zinc-500 mt-1">社員も成長</p>
        </div>
        <div className="text-center p-6 border border-white/10 bg-zinc-900/30">
          <Shield className="text-orange-500 mx-auto mb-3" size={28} />
          <p className="text-sm font-medium">低リスク</p>
          <p className="text-xs text-zinc-500 mt-1">試用期間あり</p>
        </div>
      </div>
    </Section>
  );
};
