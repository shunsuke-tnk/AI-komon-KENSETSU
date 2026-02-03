import React from 'react';
import { Section } from './ui/Section';
import { ArrowDown } from 'lucide-react';

export const FlowSection: React.FC = () => {
  return (
    <Section id="flow">
      {/* Header with Background Text */}
      <div className="relative text-center mb-16 md:mb-20">
        {/* Background FLOW text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[12rem] md:text-[18rem] font-black text-zinc-800/30 tracking-tighter select-none">
            FLOW
          </span>
        </div>
        {/* Main Title */}
        <h2 className="relative text-4xl md:text-6xl font-black tracking-tight">
          ご利用の流れ
        </h2>
      </div>

      {/* Flow Steps - Vertical Cards */}
      <div className="max-w-3xl mx-auto space-y-4">

        {/* STEP 01 - Highlighted */}
        <div className="bg-gradient-to-r from-amber-900/50 via-amber-900/30 to-zinc-900 border-2 border-amber-500/60 p-6 md:p-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700">
                01
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 mb-3">
                無料AI活用診断
              </h3>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-4">
                Zoomで30分、御社の業務をヒアリング。<br className="hidden md:block" />
                「AIで何が改善できて、何ができないか」を具体的にお伝えします。
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-bold">
                  完全無料
                </span>
                <span className="px-4 py-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-bold">
                  Zoom 30分
                </span>
                <span className="px-4 py-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-bold">
                  押し売り一切なし
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-2">
          <ArrowDown className="text-amber-500/50" size={28} />
        </div>

        {/* STEP 02 */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <span className="text-4xl md:text-5xl font-black text-zinc-600">
                02
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                ロードマップ提示
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                「何を」「どの順番で」改善するか、具体的な計画と期間をご提示します。
              </p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-2">
          <ArrowDown className="text-zinc-700" size={28} />
        </div>

        {/* STEP 03 */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <span className="text-4xl md:text-5xl font-black text-zinc-600">
                03
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                ご契約
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                最適なプランをご選択。最初の1ヶ月は試用期間なので安心してスタートできます。
              </p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-2">
          <ArrowDown className="text-zinc-700" size={28} />
        </div>

        {/* STEP 04 */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <span className="text-4xl md:text-5xl font-black text-zinc-600">
                04
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                サービス開始
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                キックオフMTGで目標を共有。Slackでいつでも相談できる体制で伴走します。
              </p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};
