import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { WhyFailSection } from './components/WhyFailSection';
import { StorySection } from './components/StorySection';
import { ConceptSection } from './components/ConceptSection';
import { PricingSection } from './components/PricingSection';
import { ComparisonTableSection } from './components/ComparisonTableSection';
import { FlowSection } from './components/FlowSection';
import { FAQSection } from './components/FAQSection';
import { CredentialsSection } from './components/CredentialsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 antialiased selection:bg-orange-500 selection:text-white">
      <main>
        {/* ページ1: 表紙 */}
        <Hero />

        {/* ページ2: こんなお悩みありませんか？ */}
        <ProblemSection />

        {/* ページ3: なぜ多くの会社がAI導入に失敗するのか */}
        <WhyFailSection />

        {/* ページ4: なぜ私が建設業に特化するのか（原体験ストーリー） */}
        <StorySection />

        {/* ページ5: サービスのコンセプト（採用 vs 顧問） */}
        <ConceptSection />

        {/* ページ6: 3つのプラン */}
        <PricingSection />

        {/* ページ7: プラン比較表 */}
        <ComparisonTableSection />

        {/* ページ8: 契約条件・ご利用の流れ */}
        <FlowSection />

        {/* ページ9: よくある質問 */}
        <FAQSection />

        {/* 別紙D: 指導実績 */}
        <CredentialsSection />

        {/* ページ10: 次のステップ（CTA） */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
