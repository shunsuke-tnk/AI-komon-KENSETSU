import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { MessageSquare, Users, Code, Video, FileText, Wrench, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: '伴走プラン',
    tagline: 'AI専門家が、御社のそばに',
    description: 'AI活用の第一歩を踏み出したい企業様に。専門家がいつでも相談に乗り、最適な活用方法をアドバイスします。',
    price: '15万円',
    discountPrice: '10',
    target: 'まずはAI活用を始めたい方向け',
    features: [
      { icon: MessageSquare, title: 'チャット相談 無制限', desc: 'Slackで24時間いつでも質問OK' },
      { icon: Video, title: 'キックオフMTG', desc: '現状把握と目標設定（90分）' },
      { icon: Video, title: '振り返りMTG', desc: '3ヶ月後に成果を振り返り' },
      { icon: FileText, title: '月次レポート', desc: '活用状況と改善提案をお届け' },
    ],
  },
  {
    name: '自走プラン',
    tagline: '社内にAI人材を育てる',
    description: '社員がAIを使いこなせるようになる研修付きプラン。内製化を目指す企業様におすすめです。',
    price: '40万円',
    discountPrice: '30',
    target: '社員にAIスキルを身につけさせたい方向け',
    features: [
      { icon: MessageSquare, title: '伴走プランの全内容', desc: 'チャット相談・MTG・レポート全て込み' },
      { icon: Users, title: '社員研修（4名まで）', desc: '実践的なAI活用スキルを習得' },
      { icon: Wrench, title: '内製化支援', desc: '自社でAI活用を進める体制づくり' },
    ],
  },
  {
    name: 'エージェント開発',
    tagline: '御社専用のAIツールを開発',
    description: '業務を自動化するAIエージェントをオーダーメイドで開発。「こんなツールがほしい」を形にします。',
    price: '60万円',
    discountPrice: '50',
    target: '「これを作ってほしい」がある方向け',
    features: [
      { icon: Video, title: '要件整理MTG', desc: '何を作るか一緒に決めます' },
      { icon: Video, title: '月1開発MTG', desc: '進捗確認とフィードバック' },
      { icon: Code, title: 'オーダーメイド開発', desc: '御社専用のAIツールを構築' },
    ],
  },
];

export const PricingSection: React.FC = () => {
  return (
    <Section id="pricing">
      {/* Header */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">PLANS</h2>
        <p className="text-xl md:text-2xl text-zinc-400">御社の状況に合わせて、3つのプランからお選びください</p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative p-8 md:p-10 border border-zinc-700 bg-zinc-900/60 hover:border-orange-500/50 transition-all duration-300 group"
          >
            {/* Plan Header */}
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-lg text-zinc-400">{plan.tagline}</p>
            </div>

            {/* Price */}
            <div className="mb-8 pb-8 border-b border-zinc-700">
              <div className="flex items-end gap-3">
                <span className="text-zinc-600 line-through text-xl">¥{plan.price}</span>
                <span className="text-orange-500 text-sm font-bold">モニター価格</span>
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                  ¥{plan.discountPrice}
                </span>
                <span className="text-2xl text-zinc-400 font-bold">万円</span>
                <span className="text-lg text-zinc-500 font-mono">/ 月</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              {plan.description}
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {plan.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <feature.icon className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{feature.title}</p>
                    <p className="text-zinc-400 text-base">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Target */}
            <div className="mb-8 p-4 bg-zinc-800/80 border-l-4 border-orange-500">
              <p className="text-zinc-300 text-base font-medium">{plan.target}</p>
            </div>

            {/* CTA */}
            <Button
              variant="primary"
              className="w-full text-lg py-4 group-hover:bg-orange-400 transition-colors"
            >
              詳細を見る
              <ArrowRight className="ml-2 inline-block" size={20} />
            </Button>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center mt-12 md:mt-16">
        <p className="text-zinc-500 text-base">
          ※ モニター価格でのご提供となります。予告なく終了する場合がございます。
        </p>
      </div>
    </Section>
  );
};
