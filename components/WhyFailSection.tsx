import React from 'react';
import { Section } from './ui/Section';
import { AlertTriangle, Target, Users } from 'lucide-react';

export const WhyFailSection: React.FC = () => {
  return (
    <Section id="why-fail">
      <div className="mb-16 relative">
        {/* 背景の WHY FAIL */}
        <span className="absolute -top-4 left-0 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/5 select-none pointer-events-none leading-none">
          WHY FAIL
        </span>
        {/* 前面のタイトル */}
        <h2 className="relative text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          なぜ、多くの会社が<br />
          <span className="text-orange-500">AI導入に失敗する</span>のか
        </h2>
      </div>

      {/* Row 1: 左にテキスト / 右に画像 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
        {/* Left: Text Content */}
        <div className="space-y-12">
          {/* 多くの人が想像する"効率化" */}
          <div className="border-l-2 border-zinc-700 pl-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-zinc-500" size={22} />
              <span className="text-sm font-mono text-zinc-500 uppercase tracking-wider">多くの人が想像する"効率化"</span>
            </div>
            <div className="space-y-4 text-zinc-400">
              <p className="text-xl">「見積もり作成が、ボタン一つで終わる」</p>
              <p className="text-xl">「提案書が、自動で完璧に仕上がる」</p>
              <p className="text-base text-zinc-500 mt-6">
                たしかに、AIがあれば実現可能です。<br />
                しかし、<span className="text-white font-bold">最大の効率化とは、もっと地味な改善の積み重ねです。</span>
              </p>
            </div>
          </div>

          {/* 本当の効率化 */}
          <div className="border-l-2 border-orange-500 pl-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-orange-500" size={22} />
              <span className="text-sm font-mono text-orange-500 uppercase tracking-wider">本当の効率化とは</span>
            </div>
            <div className="space-y-3 text-zinc-300 text-lg">
              <p>見積もり作成の中の、「原価を調べる5分」を2分に。</p>
              <p>日報作成の中の、「文章を考える3分」を1分に。</p>
              <p>写真整理の中の、「ファイル名をつける2分」を30秒に。</p>
            </div>
            <div className="mt-8 p-6 bg-zinc-900/50 border border-white/10">
              <p className="text-white font-bold text-xl mb-2">5分の短縮を10個実現するだけで、50分。</p>
              <p className="text-white font-bold text-xl mb-4">これを10日やったら、500分。</p>
              <p className="text-zinc-400 text-base">
                無限にあるような小さな作業を、一つ一つ見つけて、一つ一つ効率化していく。
              </p>
              <p className="text-orange-500 font-bold mt-4 text-lg">それが、本当の効率化です。</p>
            </div>
          </div>
        </div>

        {/* Right: Image Placeholder */}
        <div className="aspect-[4/3] bg-zinc-900 border border-white/10 flex items-center justify-center">
          <div className="text-center text-zinc-600">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-zinc-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-sm">画像を配置</p>
          </div>
        </div>
      </div>

      {/* Row 2: 左に画像 / 右にテキスト */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Image Placeholder */}
        <div className="aspect-[4/3] bg-zinc-900 border border-white/10 flex items-center justify-center order-2 lg:order-1">
          <div className="text-center text-zinc-600">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-zinc-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🤝</span>
            </div>
            <p className="text-sm">画像を配置</p>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="space-y-12 order-1 lg:order-2">
          {/* でも、アプリや外注では解決しない */}
          <div className="border border-white/10 p-8 bg-black">
            <h3 className="text-2xl font-bold mb-6 text-white">でも、アプリや外注では解決しない</h3>
            <div className="space-y-4 text-zinc-400 text-base">
              <p>それを実現するには、アプリを入れるだけでは足りません。</p>
              <p>外注したって、解決しません。</p>
              <p className="pt-4 border-t border-white/10 mt-6">
                なぜなら、<span className="text-white font-bold">「常に、あなたの会社のどこを効率化できるか」を見極め続ける人</span>が必要だから。
              </p>
              <ul className="space-y-2 mt-4 text-zinc-300 text-lg">
                <li>・ 業務はどんなものがあって、どう分解すればいいのか</li>
                <li>・ どこにAIが使えて、どこにAIが使えないのか</li>
              </ul>
              <p className="mt-4">
                それを判断して、解決策まで導く。<br />
                <span className="text-orange-500 font-bold">これは、専門家がいないとできません。</span><br />
                そして、一度診断して終わりではありません。
              </p>
            </div>
          </div>

          {/* だから「AI顧問」という形を作りました */}
          <div className="border-2 border-orange-500 p-8 bg-orange-500/5 relative">
            <div className="absolute -top-4 left-6 bg-black px-4 py-1">
              <span className="text-orange-500 font-bold text-base">SOLUTION</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-orange-500" size={28} />
              <h3 className="text-2xl font-bold text-white">だから、「AI顧問」という形を作りました</h3>
            </div>
            <div className="space-y-4">
              <p className="text-zinc-300 text-xl">常に寄り添ってくれる人。</p>
              <p className="text-zinc-300 text-xl">伴走してくれる人。</p>
              <p className="text-white font-bold text-2xl mt-6 border-t border-orange-500/30 pt-6">
                それが、このサービスの本質です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
