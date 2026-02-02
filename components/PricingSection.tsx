import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check, MessageSquare, Users, Code, Video, FileText, Wrench } from 'lucide-react';

const plans = [
  {
    name: '伴走プラン',
    tagline: 'AI専門家が、御社のそばに',
    price: '15万円',
    discountPrice: '10万円',
    isPopular: false,
    color: 'zinc',
    target: 'まずはAI活用を始めたい方向け',
    features: [
      { icon: MessageSquare, text: 'チャット相談 無制限' },
      { icon: Video, text: 'キックオフMTG' },
      { icon: Video, text: '振り返りMTG（3ヶ月後）' },
      { icon: FileText, text: '月次レポート' },
    ],
  },
  {
    name: '自走プラン',
    tagline: '社内にAI人材を育てる',
    price: '40万円',
    discountPrice: '30万円',
    isPopular: true,
    color: 'orange',
    target: '社員にAIスキルを身につけさせたい方向け',
    features: [
      { icon: Check, text: '伴走プランの全内容', highlight: true },
      { icon: Users, text: '社員研修（4名まで）' },
      { icon: Wrench, text: '内製化支援' },
    ],
  },
  {
    name: 'エージェント開発プラン',
    tagline: '御社専用のAIツールを開発',
    price: '60万円',
    discountPrice: '50万円',
    isPopular: false,
    color: 'zinc',
    target: '「これを作ってほしい」がある方向け',
    features: [
      { icon: Video, text: '要件整理MTG' },
      { icon: Video, text: '月1開発MTG' },
      { icon: Code, text: 'オーダーメイド開発' },
    ],
  },
];

export const PricingSection: React.FC = () => {
  return (
    <Section id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">PLANS</h2>
        <p className="text-zinc-500 font-mono uppercase text-base">3つのプランからお選びいただけます</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 ${
              plan.isPopular
                ? 'border-2 border-orange-500 bg-zinc-900/50'
                : 'border border-white/20 bg-zinc-900/20'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-orange-500 text-black text-sm font-bold px-3 py-1">
                RECOMMENDED
              </div>
            )}

            <h3 className={`text-2xl font-bold mb-1 ${plan.isPopular ? 'text-orange-500' : ''}`}>
              {plan.name}
            </h3>
            <p className="text-zinc-500 text-base mb-6">{plan.tagline}</p>

            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-zinc-600 line-through text-base">¥{plan.price}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-black text-white">¥{plan.discountPrice}</span>
                <span className="text-sm text-zinc-500 font-mono">/ MONTH</span>
              </div>
              <p className="text-sm text-orange-500 mt-2">モニター価格</p>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3 text-base">
                  <feature.icon className={`shrink-0 mt-0.5 ${feature.highlight ? 'text-zinc-400' : 'text-orange-500'}`} size={18} />
                  <span className={feature.highlight ? 'text-zinc-400' : ''}>{feature.text}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6 p-3 bg-zinc-800/50 border border-white/5">
              <p className="text-sm text-zinc-400">{plan.target}</p>
            </div>

            <Button
              variant={plan.isPopular ? 'primary' : 'outline'}
              className="w-full"
            >
              詳細を見る
            </Button>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 text-zinc-500 text-sm font-mono">
        ※ モニター価格でのご提供となります。予告なく終了する場合がございます。<br />
        ※ 詳細は下記の比較表をご覧ください。
      </div>
    </Section>
  );
};
