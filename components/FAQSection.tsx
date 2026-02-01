import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'なぜ「3ヶ月」なのですか？',
    answer: 'AIを導入して、仕組みを作るだけでは足りません。慣れる。習慣化する。日常に溶け込ませる。そこまで伴走して、初めて「効果が出た」と実感できます。だから、3ヶ月という期間を設定しています。',
  },
  {
    question: '試用期間とは何ですか？',
    answer: '最初の1ヶ月は「試用期間」です。この期間で、私との相性、サービスの進め方、本当に御社に合っているかをご判断ください。万が一「合わない」と感じた場合は、1ヶ月で終了可能です。',
  },
  {
    question: '途中でプラン変更はできますか？',
    answer: 'はい、可能です。アップグレード・ダウングレードどちらも対応しています。御社の状況に合わせて柔軟にプランを変更いただけます。',
  },
  {
    question: '建設業以外でも利用できますか？',
    answer: 'はい、可能です。建設業に特化したサービスですが、他業種の方もご利用いただけます。AIの基本的な活用方法は業種を問わず共通する部分も多いです。',
  },
  {
    question: '従業員何名から対応可能ですか？',
    answer: '人数の制限はありません。1人社長から、大規模な組織まで対応可能です。御社の規模に合わせた最適なプランをご提案します。',
  },
  {
    question: 'チャット相談はどのくらいで返信がありますか？',
    answer: '24時間以内に返信いたします。緊急の場合はその旨をお伝えいただければ、可能な限り早急に対応いたします。',
  },
  {
    question: 'どんな相談ができますか？',
    answer: 'AIに関することなら、どんな相談でも可能です。「こんなこと聞いていいのかな？」と思うことも、お気軽にご相談ください。基本的な使い方から、業務への応用まで幅広くサポートします。',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">FAQ</h2>
        <p className="text-zinc-500 font-mono uppercase text-sm">よくある質問</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-white/10">
            <button
              className="w-full py-6 flex items-center justify-between text-left group"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium pr-8 group-hover:text-orange-500 transition-colors">
                Q. {faq.question}
              </span>
              <ChevronDown
                className={`shrink-0 text-zinc-500 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 text-orange-500' : ''
                }`}
                size={20}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <div className="pl-6 border-l-2 border-orange-500">
                <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
