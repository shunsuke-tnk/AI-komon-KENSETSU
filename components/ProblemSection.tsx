import React from 'react';
import { Section } from './ui/Section';
import { Square } from 'lucide-react';

const problems = [
  "日中は現場、定時後に事務処理。気づけば毎月35時間以上の残業",
  "見積もり作成に2時間以上。原価表を見ながら電卓を叩く日々",
  "日報・写真整理・報告書作成。この「ちょっとした作業」の積み重ねが残業に",
  "提案資料がいつも似たようなものになり、差別化できず契約率が上がらない",
  "チラシ制作を外注すると約20万円。自分で作りたいがデザインスキルも時間もない",
  "AIを使いたいが、何から始めればいいかわからない。高額な投資のイメージも",
  "AI人材を採用したいが年収も高額。でも若手に教えられるほど自分も詳しくない",
];

export const ProblemSection: React.FC = () => {
  return (
    <Section id="issues">
      {/* メイン見出し */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          こんなお悩みありませんか？
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          現場の忙しさに追われ、新しい技術を取り入れる余裕がない。<br />
          そんな経営者の悩みを解決します。
        </p>
      </div>

      {/* チェックボックス付きリスト（1つのボックス） */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8 md:p-10">
          <ul className="space-y-5">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start gap-4">
                <Square className="text-orange-500 shrink-0 mt-1" size={22} />
                <span className="text-base md:text-lg text-zinc-300 leading-relaxed">
                  {problem}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 下部メッセージ */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-zinc-900/50 border border-white/10 rounded-lg px-8 py-6 md:px-12 md:py-8">
          <p className="text-xl md:text-2xl text-zinc-300 mb-4">
            「AIを導入したいけど、どこから手をつければ...」
          </p>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            その悩み、建設業で<span className="text-orange-500 font-bold">毎日0時残業から定時帰り</span>を実現した私が、<br className="hidden md:block" />
            <span className="font-bold">0から一緒に解決します。</span>
          </p>
        </div>
      </div>
    </Section>
  );
};
