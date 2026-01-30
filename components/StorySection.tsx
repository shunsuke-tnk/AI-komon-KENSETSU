import React from 'react';
import { Section } from './ui/Section';
import { TrendingUp, Clock, Users } from 'lucide-react';

export const StorySection: React.FC = () => {
    return (
        <Section className="bg-black p-0" id="story">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left: Text Content (Dark Mode - The Story/Dark Era) */}
                <div className="p-10 md:p-20 border-r border-white/10 flex flex-col justify-center bg-black text-white">
                    <div className="mb-12">
                        <h2 className="text-5xl md:text-7xl font-black mb-2 tracking-tighter">WHY ME</h2>
                        <p className="text-sm font-mono text-zinc-500">なぜ私が建設業に特化するのか</p>
                    </div>

                    <div className="space-y-10">
                        <div className="relative pl-8 border-l border-zinc-800">
                            <span className="absolute -left-1.5 top-0 w-3 h-3 bg-zinc-800 rounded-full"></span>
                            <p className="text-zinc-500 text-sm mb-1 font-mono">BEFORE</p>
                            <p className="text-lg text-zinc-300">
                                リフォーム営業時代、毎日0時超えの残業。<br />
                                見積もり作成に2時間以上、原価表すらない現場。
                            </p>
                        </div>

                        <div className="relative pl-8 border-l border-orange-500">
                            <span className="absolute -left-1.5 top-0 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                            <p className="text-orange-500 text-sm mb-1 font-mono">TURNING POINT</p>
                            <p className="text-xl font-bold text-white">
                                深夜0時からの業務改善。<br />
                                ChatGPTによる圧倒的効率化。
                            </p>
                        </div>

                        <div className="relative pl-8 border-l border-white">
                            <span className="absolute -left-1.5 top-0 w-3 h-3 bg-white rounded-full"></span>
                            <p className="text-white text-sm mb-1 font-mono">AFTER</p>
                            <p className="text-lg text-zinc-300">
                                見積もり10分、5年連続売上2億円。<br />
                                定時帰りを実現。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Visuals/Stats (Light Mode - The Results/Bright Future) */}
                <div className="relative bg-zinc-50 text-black p-10 md:p-20 flex flex-col justify-between gap-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-100 via-zinc-50 to-zinc-50 opacity-50"></div>

                    {/* Stat 1 */}
                    <div className="relative z-10 border-b border-zinc-200 pb-8">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-zinc-500 font-mono text-sm">ESTIMATION TIME</span>
                            <Clock className="text-orange-500" size={24} />
                        </div>
                        <div className="text-5xl md:text-6xl font-black tracking-tighter text-black">
                            <span className="text-zinc-400 text-4xl align-top mr-2 line-through decoration-orange-500">2h</span>
                            10<span className="text-2xl">min</span>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="relative z-10 border-b border-zinc-200 pb-8">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-zinc-500 font-mono text-sm">SALES RECORD</span>
                            <TrendingUp className="text-orange-500" size={24} />
                        </div>
                        <div className="text-5xl md:text-6xl font-black tracking-tighter text-black">
                            <span className="text-2xl block text-zinc-400 mb-1">5 YEARS</span>
                            2.0<span className="text-2xl">億円</span>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="relative z-10">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-zinc-500 font-mono text-sm">WORK STYLE</span>
                            <Users className="text-orange-500" size={24} />
                        </div>
                        <div className="text-4xl font-bold text-black">
                            0時残業 <span className="text-orange-500">→</span> 定時帰り
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-20 bg-black text-white max-w-full">
                <p className="text-2xl md:text-3xl font-bold leading-normal">
                    「現場の痛みを、身をもって知っている。」<br />
                    <span className="text-zinc-500 text-lg mt-4 block">だからこそ提供できる、実用的なソリューションがあります。</span>
                </p>
            </div>
        </Section>
    );
};