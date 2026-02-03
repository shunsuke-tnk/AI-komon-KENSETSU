import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Large Background Text */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden opacity-50 pointer-events-none select-none z-0">
                <div className="whitespace-nowrap text-[18vw] font-black leading-none text-outline animate-marquee">
                    CONSTRUCTION AI ADVISOR DIGITAL TRANSFORMATION
                </div>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

                <div className="lg:col-span-8">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="h-[1px] w-12 bg-orange-500"></span>
                        <span className="text-orange-500 font-bold tracking-[0.15em] text-xs">CONSTRUCTION AI ADVISOR</span>
                    </div>

                    {/* Main Catch Copy */}
                    <p className="text-zinc-400 text-lg md:text-xl mb-4 font-medium">
                        「AIを使いたいけど、何から始めれば...」
                    </p>

                    <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8">
                        建設業専門のAI顧問が、<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">月10万円で御社に</span>
                    </h1>

                    {/* Sub Copy */}
                    <div className="border-l-2 border-orange-500 pl-4 sm:pl-6 mb-10">
                        <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed mb-3">
                            <span className="text-white font-bold">複数回全国トップセールス獲得</span>
                            <span className="text-zinc-500 mx-1 sm:mx-2">・</span>
                            <span className="text-white font-bold">5年連続 個人年間売上2億円</span>
                        </p>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                            建設業の現場を知り尽くしたAI専門家が、<br className="hidden md:block" />
                            御社のAI活用を<span className="text-orange-500 font-bold">0から伴走支援</span>します。
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link to="/contact">
                            <Button size="lg" icon className="text-sm sm:text-xl md:text-2xl px-6 sm:px-10 py-4 sm:py-5 whitespace-nowrap">
                                無料AI活用診断に申し込む
                            </Button>
                        </Link>
                        <div className="flex items-center gap-2 text-zinc-500 text-base">
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                            毎月3社限定・Zoom 30分
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
                    <div className="glass-card p-4 sm:p-6 border border-white/10 bg-zinc-900/50 backdrop-blur-md w-full sm:max-w-sm">
                        <div className="text-sm text-zinc-500 mb-3 uppercase tracking-wider font-mono">こんな方へ</div>
                        <ul className="space-y-4 text-base font-medium">
                            <li className="flex items-center gap-3">
                                <ArrowDownRight className="text-orange-500 shrink-0" size={18} />
                                <span>AIを使いたいが何から始めればいいかわからない</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <ArrowDownRight className="text-orange-500 shrink-0" size={18} />
                                <span>見積もり・日報作成の時間を短縮したい</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <ArrowDownRight className="text-orange-500 shrink-0" size={18} />
                                <span>若手にAIを教えられる人がいない</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 p-12 hidden md:block">
                <div className="flex items-center gap-4 -rotate-90 origin-right translate-x-8">
                    <span className="text-xs font-bold tracking-widest text-zinc-500">SCROLL DOWN</span>
                    <div className="w-16 h-[1px] bg-zinc-700 overflow-hidden relative">
                        <div className="absolute inset-0 bg-white w-full h-full -translate-x-full animate-[marquee_2s_infinite]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
