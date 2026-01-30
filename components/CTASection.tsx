import React from 'react';
import { Button } from './ui/Button';

export const CTASection: React.FC = () => {
  return (
    <div className="bg-orange-600 text-black py-24 md:py-40 px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
            <div>
                <p className="font-bold tracking-widest mb-4 uppercase">Free Consultation</p>
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.8]">
                    LET'S<br/>
                    START.
                </h2>
                <p className="mt-8 text-xl font-medium max-w-xl leading-relaxed border-l-2 border-black pl-6">
                    「何を導入すべきかわからない」<br/>
                    そんな状態で大丈夫です。<br/>
                    プロの目で、御社のAI活用ポイントを診断します。
                </p>
            </div>
            
            <div className="w-full md:w-auto">
                 <Button variant="primary" size="xl" className="w-full md:w-auto bg-black text-white hover:bg-white hover:text-black border-black hover:border-black" icon>
                    無料診断を予約する
                 </Button>
                 <p className="mt-4 text-sm font-bold opacity-70">
                    ※ 毎月3社限定 / Zoom 30分
                 </p>
            </div>
        </div>
    </div>
  );
};