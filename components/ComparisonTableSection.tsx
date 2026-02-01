import React from 'react';
import { Section } from './ui/Section';
import { Check, Minus, Circle } from 'lucide-react';

const comparisonItems = [
  { label: '月額', bansou: '15万円（モニター10万円）', jisou: '40万円（モニター30万円）', agent: '60万円（モニター50万円）' },
  { label: 'チャット相談', bansou: 'full', jisou: 'full', agent: 'partial', note: '開発関連' },
  { label: 'キックオフMTG', bansou: 'full', jisou: 'full', agent: 'full' },
  { label: '振り返りMTG（3ヶ月後）', bansou: 'full', jisou: 'full', agent: 'full' },
  { label: '月1開発MTG', bansou: 'none', jisou: 'none', agent: 'full' },
  { label: '月次レポート', bansou: 'full', jisou: 'full', agent: 'partial' },
  { label: '社員研修（4名まで）', bansou: 'none', jisou: 'full', agent: 'none' },
  { label: '内製化支援', bansou: 'none', jisou: 'full', agent: 'none' },
  { label: 'オーダーメイド開発', bansou: 'none', jisou: 'none', agent: 'full' },
];

const renderCell = (value: string, note?: string) => {
  if (value === 'full') {
    return <Check className="text-orange-500 mx-auto" size={20} />;
  }
  if (value === 'partial') {
    return (
      <div className="flex flex-col items-center">
        <Circle className="text-orange-500/60 mx-auto" size={16} />
        {note && <span className="text-xs text-zinc-500 mt-1">{note}</span>}
      </div>
    );
  }
  if (value === 'none') {
    return <Minus className="text-zinc-600 mx-auto" size={20} />;
  }
  return <span className="text-sm font-medium">{value}</span>;
};

export const ComparisonTableSection: React.FC = () => {
  return (
    <Section id="comparison">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">COMPARISON</h2>
        <p className="text-zinc-500 font-mono uppercase text-sm">プラン比較表</p>
      </div>

      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead>
            <tr>
              <th className="p-4 text-left bg-zinc-900 border border-white/10 w-1/4">
                <span className="text-zinc-400 text-sm font-mono">項目</span>
              </th>
              <th className="p-4 text-center bg-zinc-900 border border-white/10">
                <span className="text-white font-bold text-sm">伴走プラン</span>
              </th>
              <th className="p-4 text-center bg-orange-500/20 border-2 border-orange-500">
                <span className="text-orange-500 font-bold text-sm">自走プラン</span>
                <span className="block text-xs text-orange-400 mt-1">おすすめ</span>
              </th>
              <th className="p-4 text-center bg-zinc-900 border border-white/10">
                <span className="text-white font-bold text-sm">エージェント開発</span>
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {comparisonItems.map((item, index) => (
              <tr key={index} className="hover:bg-white/5 transition-colors">
                <td className="p-4 bg-zinc-900/50 border border-white/10">
                  <span className="text-zinc-300 text-sm">{item.label}</span>
                </td>
                <td className="p-4 text-center border border-white/10">
                  {renderCell(item.bansou)}
                </td>
                <td className="p-4 text-center border-x-2 border-orange-500/50 bg-orange-500/5">
                  {renderCell(item.jisou)}
                </td>
                <td className="p-4 text-center border border-white/10">
                  {renderCell(item.agent, item.note)}
                </td>
              </tr>
            ))}

            {/* Recommendation Row */}
            <tr className="bg-zinc-800/50">
              <td className="p-4 border border-white/10">
                <span className="text-orange-500 text-sm font-bold">おすすめ</span>
              </td>
              <td className="p-4 text-center border border-white/10">
                <span className="text-zinc-400 text-xs">AI活用を<br />始めたい方</span>
              </td>
              <td className="p-4 text-center border-x-2 border-orange-500/50 bg-orange-500/10">
                <span className="text-white text-xs font-medium">社内にAIチームを<br />作りたい方</span>
              </td>
              <td className="p-4 text-center border border-white/10">
                <span className="text-zinc-400 text-xs">具体的なツールが<br />欲しい方</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-8 flex justify-center gap-8 text-sm text-zinc-500">
        <div className="flex items-center gap-2">
          <Check className="text-orange-500" size={16} />
          <span>対応</span>
        </div>
        <div className="flex items-center gap-2">
          <Circle className="text-orange-500/60" size={14} />
          <span>一部対応</span>
        </div>
        <div className="flex items-center gap-2">
          <Minus className="text-zinc-600" size={16} />
          <span>非対応</span>
        </div>
      </div>
    </Section>
  );
};
