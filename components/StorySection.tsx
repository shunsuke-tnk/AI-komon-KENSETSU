import React from 'react';
import { Section } from './ui/Section';
import { TrendingUp, Clock, Users, Award, Building } from 'lucide-react';

export const StorySection: React.FC = () => {
    return (
        <Section className="bg-black p-0" id="story">
            {/* Header */}
            <div className="px-6 md:px-20 py-16 border-b border-white/10 relative">
                {/* 背景の WHY ME */}
                <span className="absolute top-1/2 -translate-y-1/2 left-6 md:left-20 text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/5 select-none pointer-events-none leading-none">
                    WHY ME
                </span>
                {/* 前面のタイトル */}
                <h2 className="relative text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    なぜ、私が<br />
                    <span className="text-orange-500">建設業に特化する</span>のか
                </h2>
            </div>

            {/* Main Story Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: The Story */}
                <div className="p-10 md:p-16 border-r border-white/10 bg-black text-white">
                    <h3 className="text-2xl font-bold mb-10 text-orange-500">私がこのサービスを作った理由</h3>

                    <div className="space-y-8 text-zinc-300 leading-relaxed text-lg">
                        <p>
                            リフォーム営業として入社した頃、毎日0時を超える残業が当たり前でした。
                        </p>

                        <div className="border-l-2 border-zinc-700 pl-6 text-zinc-400 text-lg">
                            <p>見積もり作成に2時間以上。</p>
                            <p>原価表すらなく、FAXを指で照らし合わせて原価を調べる。</p>
                            <p>日中は現場、帰社してから事務作業。</p>
                            <p>どれだけ頑張っても、12時を切ることがない。</p>
                        </div>

                        <p className="text-white font-medium text-lg">
                            ある時、気づきました。
                        </p>

                        <div className="bg-zinc-900/50 border border-white/10 p-6">
                            <p className="text-white font-bold text-lg">
                                こんな環境で、新しい社員が定着するわけがない。
                            </p>
                            <p className="text-zinc-400 mt-2 text-base">
                                ということは、いつまで経ってもこの残業地獄から抜け出せない。
                            </p>
                        </div>

                        <p className="text-orange-500 font-bold text-xl">
                            だから私は、効率化を始めました。
                        </p>
                    </div>
                </div>

                {/* Right: What I Did */}
                <div className="p-10 md:p-16 bg-zinc-950 text-white">
                    <h3 className="text-2xl font-bold mb-10 text-zinc-400">取り組んだこと</h3>

                    <div className="space-y-6 text-zinc-300">
                        <div className="border-l-2 border-orange-500 pl-6">
                            <p className="font-medium text-white mb-2 text-lg">提案資料のテンプレートを作り直しました。</p>
                            <p className="text-zinc-500 text-base">誰でも高品質な提案ができる仕組みに</p>
                        </div>

                        <div className="border-l-2 border-orange-500 pl-6">
                            <p className="font-medium text-white mb-2 text-lg">原価表を自分で更新しました。</p>
                            <p className="text-zinc-500 text-base">FAXを探す時間をゼロに</p>
                        </div>

                        <div className="border-l-2 border-orange-500 pl-6">
                            <p className="font-medium text-white mb-2 text-lg">見積もりシステムを自作しました。</p>
                            <p className="text-zinc-500 text-base">入力の回数を減らす工夫を何十回も重ねた</p>
                        </div>

                        <div className="border-l-2 border-orange-500 pl-6">
                            <p className="font-medium text-white mb-2 text-lg">社内の報告書式を片っ端から直しました。</p>
                            <p className="text-zinc-500 text-base">少なくとも20ファイル以上をデジタル化</p>
                        </div>

                        <div className="mt-10 p-6 bg-black border border-white/10">
                            <p className="text-zinc-400 mb-4 text-base">
                                <span className="text-white font-bold">身の回りのすべてを、端から端まで効率化しました。</span>
                            </p>
                            <p className="text-zinc-400 text-base">
                                そして、ただ効率化するだけではなく、<br />
                                <span className="text-orange-500 font-bold">「誰がやっても同じ品質で、効率よくできる仕組み」</span>を作ることを目指しました。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div className="bg-zinc-50 text-black p-10 md:p-16">
                <h3 className="text-2xl font-bold mb-10 text-zinc-600 text-center">その結果——</h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {/* Stat 1 */}
                    <div className="text-center p-6 bg-white border border-zinc-200 shadow-sm">
                        <Clock className="text-orange-500 mx-auto mb-4" size={32} />
                        <div className="text-zinc-500 text-sm font-mono mb-2">見積もり作成</div>
                        <div className="font-black text-2xl">
                            <span className="text-zinc-400 line-through text-xl">2h</span>
                            <span className="text-orange-500 mx-2">→</span>
                            <span>10min</span>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="text-center p-6 bg-white border border-zinc-200 shadow-sm">
                        <Users className="text-orange-500 mx-auto mb-4" size={32} />
                        <div className="text-zinc-500 text-sm font-mono mb-2">勤務時間</div>
                        <div className="font-black text-xl">
                            <span className="text-zinc-400 text-base">0時残業</span>
                            <span className="text-orange-500 mx-2">→</span>
                            <span>定時帰り</span>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="text-center p-6 bg-white border border-zinc-200 shadow-sm">
                        <Award className="text-orange-500 mx-auto mb-4" size={32} />
                        <div className="text-zinc-500 text-sm font-mono mb-2">セールス実績</div>
                        <div className="font-black text-xl">
                            全国トップ<br />
                            <span className="text-base text-zinc-600">複数回獲得</span>
                        </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="text-center p-6 bg-white border border-zinc-200 shadow-sm">
                        <TrendingUp className="text-orange-500 mx-auto mb-4" size={32} />
                        <div className="text-zinc-500 text-sm font-mono mb-2">年間売上</div>
                        <div className="font-black text-2xl">
                            2億円
                            <span className="text-base text-zinc-600 block">5年連続</span>
                        </div>
                    </div>

                    {/* Stat 5 */}
                    <div className="text-center p-6 bg-white border border-zinc-200 shadow-sm col-span-2 md:col-span-1">
                        <Building className="text-orange-500 mx-auto mb-4" size={32} />
                        <div className="text-zinc-500 text-sm font-mono mb-2">会社実績</div>
                        <div className="font-black text-lg">
                            創業40年で<br />
                            <span className="text-orange-600">過去最高売上</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conclusion */}
            <div className="text-center py-20 px-6 bg-black text-white">
                <div className="max-w-3xl mx-auto">
                    <p className="text-2xl md:text-3xl text-zinc-400 mb-6">
                        AIに詳しいだけではありません。<br />
                        売上の上げ方を知っています。<br />
                        現場の痛みを、身をもって知っています。
                    </p>
                    <p className="text-3xl md:text-4xl font-bold text-white">
                        だから、<span className="text-orange-500">建設業に特化したサービス</span>を作りました。
                    </p>
                </div>
            </div>
        </Section>
    );
};
