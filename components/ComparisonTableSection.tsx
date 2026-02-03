import React from 'react';
import { Section } from './ui/Section';
import { Check, Minus, Circle } from 'lucide-react';

const comparisonItems = [
  {
    label: 'チャット相談',
    desc: 'Slackでいつでも質問',
    bansou: 'full',
    jisou: 'full',
    agent: 'partial',
    agentNote: '開発関連のみ'
  },
  {
    label: 'キックオフMTG',
    desc: '現状把握と目標設定',
    bansou: 'full',
    jisou: 'full',
    agent: 'full'
  },
  {
    label: '振り返りMTG',
    desc: '3ヶ月後の成果確認',
    bansou: 'full',
    jisou: 'full',
    agent: 'full'
  },
  {
    label: '社員研修',
    desc: '4名までのAI活用研修',
    bansou: 'none',
    jisou: 'full',
    agent: 'none'
  },
  {
    label: '内製化支援',
    desc: '自社でAI活用を進める体制づくり',
    bansou: 'none',
    jisou: 'full',
    agent: 'none'
  },
  {
    label: '月1開発MTG',
    desc: '進捗確認とフィードバック',
    bansou: 'none',
    jisou: 'none',
    agent: 'full'
  },
  {
    label: 'オーダーメイド開発',
    desc: '御社専用AIツールを構築',
    bansou: 'none',
    jisou: 'none',
    agent: 'full'
  },
];

const renderCell = (value: string, note?: string) => {
  if (value === 'full') {
    return (
      <div className="flex justify-center">
        <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
          <Check className="text-orange-500" size={24} strokeWidth={3} />
        </div>
      </div>
    );
  }
  if (value === 'partial') {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
          <Circle className="text-orange-400" size={20} strokeWidth={3} />
        </div>
        {note && <span className="text-sm text-zinc-500">{note}</span>}
      </div>
    );
  }
  if (value === 'none') {
    return (
      <div className="flex justify-center">
        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
          <Minus className="text-zinc-600" size={24} strokeWidth={3} />
        </div>
      </div>
    );
  }
  return <span className="text-lg font-bold">{value}</span>;
};

export const ComparisonTableSection: React.FC = () => {
  return (
    <Section id="comparison">
      {/* Header */}
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4">COMPARISON</h2>
        <p className="text-xl md:text-2xl text-zinc-400">各プランの詳細比較</p>
      </div>

      {/* ========== PC用レイアウト（md以上） ========== */}
      <div className="hidden md:block max-w-6xl mx-auto">
        {/* Plan Headers - Card Style */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="p-6"></div>

          {/* 伴走プラン */}
          <div className="p-8 bg-zinc-800 border border-zinc-700 text-center">
            <h3 className="text-2xl font-black text-white mb-2">伴走プラン</h3>
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              ¥10<span className="text-xl">万円</span>
            </div>
            <p className="text-sm text-zinc-500 mt-1">/ 月</p>
          </div>

          {/* 自走プラン */}
          <div className="p-8 bg-zinc-800 border border-zinc-700 text-center">
            <h3 className="text-2xl font-black text-white mb-2">自走プラン</h3>
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              ¥30<span className="text-xl">万円</span>
            </div>
            <p className="text-sm text-zinc-500 mt-1">/ 月</p>
          </div>

          {/* エージェント開発 */}
          <div className="p-8 bg-zinc-800 border border-zinc-700 text-center">
            <h3 className="text-2xl font-black text-white mb-2">エージェント開発</h3>
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              ¥50<span className="text-xl">万円</span>
            </div>
            <p className="text-sm text-zinc-500 mt-1">/ 月</p>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="border border-zinc-700 bg-zinc-900/50">
          {comparisonItems.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 gap-4 ${
                index !== comparisonItems.length - 1 ? 'border-b border-zinc-800' : ''
              }`}
            >
              {/* Feature Label */}
              <div className="p-6 flex flex-col justify-center">
                <span className="text-white font-bold text-lg">{item.label}</span>
                <span className="text-zinc-500 text-sm mt-1">{item.desc}</span>
              </div>

              {/* Bansou */}
              <div className="p-6 flex items-center justify-center bg-zinc-900/30">
                {renderCell(item.bansou)}
              </div>

              {/* Jisou */}
              <div className="p-6 flex items-center justify-center bg-zinc-900/30">
                {renderCell(item.jisou)}
              </div>

              {/* Agent */}
              <div className="p-6 flex items-center justify-center bg-zinc-900/30">
                {renderCell(item.agent, item.agentNote)}
              </div>
            </div>
          ))}
        </div>

        {/* Target Audience Row */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="p-6 flex items-center">
            <span className="text-orange-500 font-bold text-lg">こんな方に</span>
          </div>

          <div className="p-6 bg-zinc-800/50 border border-zinc-700">
            <p className="text-zinc-300 text-base text-center leading-relaxed">
              まずはAI活用を<br />始めたい方
            </p>
          </div>

          <div className="p-6 bg-zinc-800/50 border border-zinc-700">
            <p className="text-zinc-300 text-base text-center leading-relaxed">
              社内にAI人材を<br />育てたい方
            </p>
          </div>

          <div className="p-6 bg-zinc-800/50 border border-zinc-700">
            <p className="text-zinc-300 text-base text-center leading-relaxed">
              専用ツールを<br />作りたい方
            </p>
          </div>
        </div>
      </div>

      {/* ========== スマホ用レイアウト（md未満）========== */}
      <div className="block md:hidden overflow-x-auto">
        {/* Plan Headers - Card Style */}
        <div className="flex gap-2 mb-2 min-w-[460px]">
          {/* 固定列（空） */}
          <div className="w-[100px] shrink-0 sticky left-0 z-10 bg-black p-4"></div>

          {/* 伴走プラン */}
          <div className="w-[120px] shrink-0 p-3 bg-zinc-800 border border-zinc-700 text-center">
            <h3 className="text-base font-black text-white mb-1">伴走プラン</h3>
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              ¥10<span className="text-sm">万円</span>
            </div>
            <p className="text-xs text-zinc-500 mt-1">/ 月</p>
          </div>

          {/* 自走プラン */}
          <div className="w-[120px] shrink-0 p-3 bg-zinc-800 border border-zinc-700 text-center">
            <h3 className="text-base font-black text-white mb-1">自走プラン</h3>
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              ¥30<span className="text-sm">万円</span>
            </div>
            <p className="text-xs text-zinc-500 mt-1">/ 月</p>
          </div>

          {/* エージェント開発 */}
          <div className="w-[120px] shrink-0 p-3 bg-zinc-800 border border-zinc-700 text-center">
            <h3 className="text-sm font-black text-white mb-1">エージェント<br />開発</h3>
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              ¥50<span className="text-sm">万円</span>
            </div>
            <p className="text-xs text-zinc-500 mt-1">/ 月</p>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="border border-zinc-700 bg-zinc-900/50 min-w-[460px]">
          {comparisonItems.map((item, index) => (
            <div
              key={index}
              className={`flex gap-2 ${
                index !== comparisonItems.length - 1 ? 'border-b border-zinc-800' : ''
              }`}
            >
              {/* Feature Label - 固定 */}
              <div className="w-[100px] shrink-0 sticky left-0 z-10 bg-zinc-900 p-3 flex flex-col justify-center border-r border-zinc-800">
                <span className="text-white font-bold text-sm">{item.label}</span>
              </div>

              {/* Bansou */}
              <div className="w-[120px] shrink-0 p-3 flex items-center justify-center bg-zinc-900/30">
                {renderCell(item.bansou)}
              </div>

              {/* Jisou */}
              <div className="w-[120px] shrink-0 p-3 flex items-center justify-center bg-zinc-900/30">
                {renderCell(item.jisou)}
              </div>

              {/* Agent */}
              <div className="w-[120px] shrink-0 p-3 flex items-center justify-center bg-zinc-900/30">
                {renderCell(item.agent, item.agentNote)}
              </div>
            </div>
          ))}
        </div>

        {/* Target Audience Row */}
        <div className="flex gap-2 mt-2 min-w-[460px]">
          {/* 固定列 */}
          <div className="w-[100px] shrink-0 sticky left-0 z-10 bg-black p-3 flex items-center">
            <span className="text-orange-500 font-bold text-sm">こんな方に</span>
          </div>

          <div className="w-[120px] shrink-0 p-3 bg-zinc-800/50 border border-zinc-700">
            <p className="text-zinc-300 text-xs text-center leading-relaxed">
              まずはAI活用を始めたい方
            </p>
          </div>

          <div className="w-[120px] shrink-0 p-3 bg-zinc-800/50 border border-zinc-700">
            <p className="text-zinc-300 text-xs text-center leading-relaxed">
              社内にAI人材を育てたい方
            </p>
          </div>

          <div className="w-[120px] shrink-0 p-3 bg-zinc-800/50 border border-zinc-700">
            <p className="text-zinc-300 text-xs text-center leading-relaxed">
              専用ツールを作りたい方
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
            <Check className="text-orange-500" size={18} strokeWidth={3} />
          </div>
          <span className="text-zinc-400 text-base">対応</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
            <Circle className="text-orange-400" size={16} strokeWidth={3} />
          </div>
          <span className="text-zinc-400 text-base">一部対応</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
            <Minus className="text-zinc-600" size={18} strokeWidth={3} />
          </div>
          <span className="text-zinc-400 text-base">非対応</span>
        </div>
      </div>

      {/* Contract Terms */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-zinc-400 text-base leading-relaxed">
          全プラン共通で、最低契約期間は<span className="text-zinc-200 font-medium">3ヶ月</span>となります。ただし、最初の1ヶ月は<span className="text-zinc-200 font-medium">「試用期間」</span>です。もし、この期間に「合わない」と感じた場合は、その時点でご判断可能です。
        </p>
      </div>
    </Section>
  );
};
