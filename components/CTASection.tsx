import React from 'react';
import { Button } from './ui/Button';
import { Video, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <div className="bg-orange-600 text-black py-24 md:py-32 px-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Main Content */}
        <div className="text-center mb-12">
          <p className="font-bold tracking-widest mb-4 uppercase text-sm">Next Step</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            まずは無料診断から
          </h2>
        </div>

        {/* Message */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
            「何を導入すべきかわからない」<br />
            「どこを改善すべきかわからない」
          </p>
          <p className="text-lg opacity-90">
            そんな状態で大丈夫です。
          </p>
          <p className="text-xl font-bold mt-4">
            大事なのは、「どこを直すべきか」を知ること。<br />
            それがわかれば、あとは一つずつ進めるだけです。
          </p>
        </div>

        {/* What You Get */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-black/20 p-6 text-center">
            <Video className="mx-auto mb-3" size={28} />
            <p className="font-bold">Zoomで実施</p>
            <p className="text-sm opacity-80 mt-1">30分・オンライン</p>
          </div>
          <div className="bg-black/20 p-6 text-center">
            <MessageSquare className="mx-auto mb-3" size={28} />
            <p className="font-bold">業務ヒアリング</p>
            <p className="text-sm opacity-80 mt-1">御社の課題を把握</p>
          </div>
          <div className="bg-black/20 p-6 text-center">
            <CheckCircle className="mx-auto mb-3" size={28} />
            <p className="font-bold">改善点を提示</p>
            <p className="text-sm opacity-80 mt-1">優先順位もお伝え</p>
          </div>
        </div>

        {/* Important Note */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <XCircle size={20} />
          <p className="font-bold">押し売りは一切ありません。診断だけでもOK。</p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="primary"
            size="xl"
            className="bg-black text-white hover:bg-white hover:text-black border-black hover:border-black"
            icon
          >
            無料AI活用診断に申し込む
          </Button>
          <p className="mt-4 text-sm font-bold opacity-70">
            ※ 毎月3社限定 / Zoom 30分
          </p>
        </div>
      </div>
    </div>
  );
};
