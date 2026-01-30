import React from 'react';
import { Section } from './ui/Section';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    name: 'RECRUITING',
    cost: 800,
    label: '正社員採用: 約800万円',
  },
  {
    name: 'ADVISOR',
    cost: 120,
    label: '本サービス: 120万円〜',
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 p-4 border border-orange-500/50 shadow-2xl backdrop-blur-sm">
        <p className="text-zinc-500 text-xs font-mono mb-1">{label}</p>
        <p className="text-white font-bold text-lg">{payload[0].payload.label}</p>
      </div>
    );
  }
  return null;
};

export const ConceptSection: React.FC = () => {
  return (
    <Section id="concept">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Left: Text */}
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">CONCEPT</h2>
          <div className="h-1 w-20 bg-orange-500 mb-8"></div>

          <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-8">
            AI人材を<br />
            「採用」するのではなく、<br />
            <span className="text-orange-500">「顧問」として迎える</span>
          </h3>

          <p className="text-zinc-400 leading-relaxed text-lg mb-8">
            専門知識を持つ人材を採用するのは高コストかつ、ミスマッチのリスクも高いのが現状です。
            当サービスなら、実績のある専門家を必要な時に必要なだけ活用できます。
          </p>

          <div className="border border-white/10 p-6 bg-zinc-900/30 backdrop-blur">
            <p className="font-mono text-sm text-zinc-500 mb-2">// VALUE PROPOSITION</p>
            <p className="text-xl font-bold">
              「この人に頼んでおけば<br />AI周りはなんとかなる」
            </p>
            <p className="text-orange-500 mt-2 font-bold">
              → 安心感を、月10万円で。
            </p>
          </div>
        </div>

        {/* Right: Chart */}
        <div className="md:w-1/2 flex flex-col justify-end">
          <div className="w-full h-[400px] border border-white/10 p-6 bg-black relative">
            <div className="absolute top-0 right-0 p-2 bg-orange-500 text-black text-xs font-bold">COST PERFORMANCE</div>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                <XAxis type="number" stroke="#666" tickFormatter={(value) => `${value}`} hide />
                <YAxis dataKey="name" type="category" width={110} stroke="#fff" tick={{ fontSize: 14, fontFamily: 'monospace', fill: '#d4d4d8' }} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                <Bar dataKey="cost" barSize={40} radius={[0, 4, 4, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 1 ? '#f97316' : '#3f3f46'} strokeWidth={0} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="absolute bottom-4 right-4 text-xs text-zinc-400 font-mono tracking-widest">
              UNIT: 10,000 JPY / YEAR
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};