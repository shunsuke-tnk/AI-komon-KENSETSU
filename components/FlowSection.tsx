import React from 'react';
import { Section } from './ui/Section';

export const FlowSection: React.FC = () => {
  return (
    <Section id="flow">
        <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
                <h2 className="text-5xl font-black tracking-tighter mb-8">FLOW</h2>
                <div className="p-6 border border-white/10 bg-zinc-900/30">
                    <h3 className="text-sm font-bold text-orange-500 mb-4 tracking-widest uppercase">Contract Terms</h3>
                    <div className="space-y-4 text-sm">
                        <div className="flex justify-between border-b border-white/5 pb-2">
                            <span className="text-zinc-500">Contract Period</span>
                            <span>Min 3 Months</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                            <span className="text-zinc-500">Trial</span>
                            <span>1st Month</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-zinc-500">Payment</span>
                            <span>Prepaid / Month</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-2/3 relative">
                {/* Vertical Line */}
                <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-zinc-800"></div>

                <div className="space-y-12">
                    {[
                        { step: "01", title: "無料AI活用診断", desc: "Zoom (30min). 現状の業務課題をヒアリング。" },
                        { step: "02", title: "ロードマップ提示", desc: "改善の優先順位と具体的な計画をご提案。" },
                        { step: "03", title: "ご契約", desc: "プランの選択・契約締結。" },
                        { step: "04", title: "サービス開始", desc: "チャット開設、またはキックオフMTGの実施。" }
                    ].map((item, i) => (
                        <div key={i} className="relative pl-12 group">
                            {/* Dot */}
                            <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] bg-black border border-zinc-500 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors"></div>
                            
                            <div className="text-xs font-mono text-orange-500 mb-1">STEP {item.step}</div>
                            <h4 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{item.title}</h4>
                            <p className="text-zinc-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
  );
};