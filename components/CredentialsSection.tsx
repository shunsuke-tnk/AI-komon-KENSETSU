import React from 'react';
import { Section } from './ui/Section';
import { Award, Users, Building2, Briefcase } from 'lucide-react';

const credentials = [
  {
    icon: Award,
    title: '竹之内塾 講師',
    description: '「令和の虎」竹之内教博社長運営の経営塾で生成AI講座を担当',
  },
  {
    icon: Users,
    title: '複数の起業塾で指導',
    description: '岩田塾、WORLD OF HAPIAなど、複数の起業塾で生成AI講座を担当',
  },
  {
    icon: Building2,
    title: '医療法人コンサルティング',
    description: '5施設展開の医療法人に対し、生成AIコンサルティングを実施',
  },
  {
    icon: Briefcase,
    title: '1000人以上の経営者に指導',
    description: '医療・建設・美容・人材・士業など、幅広い業種の経営者にAI活用を指導',
  },
];

export const CredentialsSection: React.FC = () => {
  return (
    <Section id="credentials">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">CREDENTIALS</h2>
        <p className="text-zinc-500 font-mono uppercase text-sm">指導実績</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {credentials.map((credential, index) => (
          <div
            key={index}
            className="p-8 border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group"
          >
            <credential.icon className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-lg font-bold mb-2 text-white">{credential.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{credential.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-zinc-500 text-sm">
          ※ その他、多数の企業・個人へのAI活用支援実績あり
        </p>
      </div>
    </Section>
  );
};
