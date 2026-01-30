import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { StorySection } from './components/StorySection';
import { ConceptSection } from './components/ConceptSection';
import { PricingSection } from './components/PricingSection';
import { FlowSection } from './components/FlowSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 antialiased selection:bg-orange-500 selection:text-white">
      <main>
        <Hero />
        <ProblemSection />
        <StorySection />
        <ConceptSection />
        <PricingSection />
        <FlowSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;