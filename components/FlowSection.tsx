import React from 'react';
import { Section } from './ui/Section';
import { ArrowDown } from 'lucide-react';

export const FlowSection: React.FC = () => {
  return (
    <Section id="flow" className="!bg-white !border-gray-300">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">
          ご利用の流れ
        </h2>
      </div>

      {/* Flow Steps - Vertical Cards */}
      <div className="max-w-3xl mx-auto space-y-4">

        {/* STEP 01 - Gold */}
        <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200 border-2 border-amber-400 p-6 md:p-8 rounded-lg shadow-lg">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 via-amber-500 to-amber-700">
                01
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 mb-3">
                無料AI活用診断
              </h3>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
                改善の第一歩は<span className="text-amber-700 font-bold">現状を把握すること</span>。<br />
                一緒に業務を棚卸しし、「何が改善できて、何ができないか」を明確にします。
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white text-sm font-bold rounded shadow">
                  完全無料
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white text-sm font-bold rounded shadow">
                  Zoom 30分
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-2">
          <ArrowDown className="text-amber-500" size={32} />
        </div>

        {/* STEP 02 - Silver */}
        <div className="bg-gradient-to-br from-gray-100 via-slate-50 to-gray-200 border-2 border-slate-300 p-6 md:p-8 rounded-lg shadow">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-400 via-gray-500 to-slate-600">
                02
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                ロードマップ提示
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                「何を」「どの順番で」改善するか、具体的な計画と期間をご提示します。
              </p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-2">
          <ArrowDown className="text-slate-400" size={32} />
        </div>

        {/* STEP 03 - Silver */}
        <div className="bg-gradient-to-br from-gray-100 via-slate-50 to-gray-200 border-2 border-slate-300 p-6 md:p-8 rounded-lg shadow">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-400 via-gray-500 to-slate-600">
                03
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                ご契約
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                最適なプランをご選択。最初の1ヶ月は試用期間なので安心してスタートできます。
              </p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center py-2">
          <ArrowDown className="text-slate-400" size={32} />
        </div>

        {/* STEP 04 - Silver */}
        <div className="bg-gradient-to-br from-gray-100 via-slate-50 to-gray-200 border-2 border-slate-300 p-6 md:p-8 rounded-lg shadow">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-400 via-gray-500 to-slate-600">
                04
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                サービス開始
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                キックオフMTGで目標を共有。Slackでいつでも相談できる体制で伴走します。
              </p>
            </div>
          </div>
        </div>

        {/* Contract Terms Note */}
        <div className="mt-8 pt-6 border-t-2 border-gray-300 flex justify-center gap-8 text-sm text-gray-600">
          <span>最低契約期間：<span className="text-gray-900 font-bold">3ヶ月</span></span>
          <span>試用期間：<span className="text-gray-900 font-bold">最初の1ヶ月</span></span>
        </div>

      </div>
    </Section>
  );
};
