import React from 'react';
import { Link } from 'react-router-dom';
import { Video, MessageSquare, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black py-24 md:py-32 px-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Main Content */}
        <div className="text-center mb-12">
          <p className="font-bold tracking-widest mb-4 uppercase text-base">Next Step</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            まずは<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700">無料診断</span>から
          </h2>
        </div>

        {/* Message */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
            「何を導入すべきかわからない」<br />
            「どこを改善すべきかわからない」
          </p>
          <p className="text-xl opacity-90">
            そんな状態で大丈夫です。
          </p>
          <p className="text-2xl font-bold mt-4">
            大事なのは、「どこを直すべきか」を知ること。<br />
            それがわかれば、あとは一つずつ進めるだけです。
          </p>
        </div>

        {/* What You Get */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-orange-500/40 p-6 text-center">
            <Video className="mx-auto mb-3" size={32} />
            <p className="font-bold text-lg">Zoomで実施</p>
            <p className="text-base opacity-80 mt-1">30分・オンライン</p>
          </div>
          <div className="bg-orange-500/40 p-6 text-center">
            <MessageSquare className="mx-auto mb-3" size={32} />
            <p className="font-bold text-lg">業務ヒアリング</p>
            <p className="text-base opacity-80 mt-1">御社の課題を把握</p>
          </div>
          <div className="bg-orange-500/40 p-6 text-center">
            <CheckCircle className="mx-auto mb-3" size={32} />
            <p className="font-bold text-lg">改善点を提示</p>
            <p className="text-base opacity-80 mt-1">優先順位もお伝え</p>
          </div>
        </div>

        {/* Important Note */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <XCircle size={24} />
          <p className="font-bold text-lg">押し売りは一切ありません。診断だけでもOK。</p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center font-black tracking-wider transition-all duration-300 px-16 py-8 text-2xl bg-gradient-to-b from-orange-500 via-orange-600 to-orange-700 text-white rounded-lg shadow-[0_10px_40px_rgba(234,88,12,0.5)] hover:shadow-[0_15px_50px_rgba(234,88,12,0.7)] hover:-translate-y-1 border-t-2 border-orange-400 overflow-hidden animate-heartbeat"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative">無料AI活用診断に申し込む</span>
            <ArrowRight className="relative ml-4 w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-6 text-base font-bold opacity-70">
            ※ 毎月3社限定 / Zoom 30分
          </p>
        </div>
      </div>
    </div>
  );
};
