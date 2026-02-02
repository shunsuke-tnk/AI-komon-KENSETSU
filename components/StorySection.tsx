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

            {/* Main Story Content - 背景画像付きフルワイド */}
            <div
                className="relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/images/story-bg.jpg)' }}
            >
                {/* 暗いオーバーレイ */}
                <div className="absolute inset-0 bg-black/70" />

                {/* コンテンツ */}
                <div className="relative z-10 px-6 md:px-20 py-20 md:py-32 max-w-4xl">
                    {/* タイトル */}
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-12 leading-tight">
                        残業だらけの営業時代。
                    </h3>

                    <div className="space-y-8 text-white/90 leading-relaxed text-lg md:text-xl">
                        <p>
                            冒頭、トップセールスなどと大それたことを言いましたが、<br />
                            決してかっこいいものではなく、泥臭い道のりでした。
                        </p>

                        <div className="space-y-2 text-white/80">
                            <p>あらゆることがアナログ。手書きでメモし、大量にコピーし、手入力を繰り返す・・・</p>
                            <p>毎日0時を超えるのが当たり前でした。</p>
                            <p>見積もり作成に2時間以上。原価表すらなく、FAXを照らし合わせて原価を調べる。</p>
                            <p>朝から晩まで現場に出て、帰社してから事務作業。</p>
                            <p>どれだけ頑張っても0時より早く帰れない。</p>
                        </div>

                        <p className="text-xl md:text-2xl py-4">
                            「このままじゃ一生残業地獄から抜け出せない。」
                        </p>

                        <div className="space-y-2 text-white/80">
                            <p>そう気づいた日から、来る日も来る日も効率化に取り掛かりました。</p>
                            <p>提案資料は、選ぶだけで自動で完成するようにしました。</p>
                            <p>原価表は、全て仕様書も含めて見積書と連動するように改善。</p>
                            <p>見積もりシステムを自作し、数量を入れるだけで6種類の見積書が完成し、契約処理まで行えるものになりました。</p>
                        </div>

                        <div className="space-y-2 text-white/80 pt-4">
                            <p>誰が使っても使いやすいものにするために、完成後も何十回も修正を繰り返しました。</p>
                            <p className="text-white font-medium">その結果、見積もり作成にかかる時間は15分まで短縮しました。</p>
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
