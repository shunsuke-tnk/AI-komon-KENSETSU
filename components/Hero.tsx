import React from 'react';
import { Button } from './ui/Button';
import { ChevronDown, ArrowDownRight } from 'lucide-react';

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
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Large Background Text */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden opacity-70 pointer-events-none select-none z-0">
                <div className="whitespace-nowrap text-[20vw] font-black leading-none text-outline animate-marquee">
                    CONSTRUCTION AI ADVISOR DIGITAL TRANSFORMATION
                </div>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

                <div className="lg:col-span-8">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="h-[1px] w-12 bg-orange-500"></span>
                        <span className="text-orange-500 font-bold tracking-[0.2em] text-sm">PRODUCED BY TOP SALES</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-10 mix-blend-difference">
                        建設業のための<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">AI顧問サービス</span>
                    </h1>

                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 border-l border-zinc-800 pl-6">
                        年間売上2億円を生成AIで効率化した実践者が、<br />
                        御社のAI導入を伴走支援。<br />
                        <span className="text-white mt-2 block">リフォーム会社のための実践的AI戦略。</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button size="lg" icon>
                            無料AI活用診断
                        </Button>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                            毎月3社限定・30分無料
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
                    <div className="glass-card p-6 border border-white/10 bg-zinc-900/50 backdrop-blur-md max-w-xs">
                        <div className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Target</div>
                        <ul className="space-y-3 text-sm font-medium">
                            <li className="flex items-center gap-3">
                                <ArrowDownRight className="text-orange-500" size={16} />
                                見積もり時間を短縮したい
                            </li>
                            <li className="flex items-center gap-3">
                                <ArrowDownRight className="text-orange-500" size={16} />
                                若手の教育コストを下げたい
                            </li>
                            <li className="flex items-center gap-3">
                                <ArrowDownRight className="text-orange-500" size={16} />
                                内製化チームを作りたい
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