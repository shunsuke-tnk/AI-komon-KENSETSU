import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <Section id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">PLANS</h2>
        <p className="text-zinc-500 font-mono uppercase">Select your strategy</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Plan 1 */}
        <div className="border border-white/20 bg-zinc-900/20 p-8 md:p-12 relative group hover:border-white/40 transition-all">
          <h3 className="text-2xl font-bold mb-2">伴走プラン</h3>
          <p className="text-zinc-500 text-sm mb-8 h-10">まずはAI活用を始めたい方向けのスタンダードプラン。</p>

          <div className="flex items-baseline gap-4 mb-8 border-b border-white/10 pb-8">
            <span className="text-zinc-600 line-through text-sm">¥200,000</span>
            <span className="text-4xl md:text-5xl font-black text-white">¥100,000</span>
            <span className="text-xs text-zinc-500 ml-auto font-mono self-end mb-1">/ MONTH</span>
          </div>

          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3 text-sm">
              <Check className="text-orange-500 shrink-0" size={18} />
              チャット相談 無制限
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Check className="text-orange-500 shrink-0" size={18} />
              月1つ程度の簡易アプリ開発
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Check className="text-orange-500 shrink-0" size={18} />
              環境構築支援
            </li>
          </ul>

          <Button variant="outline" className="w-full">SELECT PLAN</Button>
        </div>

        {/* Plan 2 */}
        <div className="border border-orange-500 bg-zinc-900/50 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-orange-500 text-black text-xs font-bold px-3 py-1">RECOMMENDED</div>

          <h3 className="text-2xl font-bold mb-2 text-orange-500">自走プラン</h3>
          <p className="text-zinc-500 text-sm mb-8 h-10">内製化チームを立ち上げ、社内にノウハウを蓄積する。</p>

          <div className="flex items-baseline gap-4 mb-8 border-b border-white/10 pb-8">
            <span className="text-zinc-600 line-through text-sm">¥500,000</span>
            <span className="text-4xl md:text-5xl font-black text-white">¥300,000</span>
            <span className="text-xs text-zinc-500 ml-auto font-mono self-end mb-1">/ MONTH</span>
          </div>

          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3 text-sm">
              <Check className="text-orange-500 shrink-0" size={18} />
              <span className="text-zinc-400">伴走プランの全内容</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Check className="text-orange-500 shrink-0" size={18} />
              キックオフMTG / ロードマップ策定
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Check className="text-orange-500 shrink-0" size={18} />
              AIチーム立ち上げ研修（4名まで）
            </li>
          </ul>

          <Button variant="primary" className="w-full">SELECT PLAN</Button>
        </div>
      </div>

      <div className="text-center mt-12 text-zinc-500 text-xs font-mono">
        ※ モニター価格でのご提供となります。予告なく終了する場合がございます。
      </div>
    </Section>
  );
};