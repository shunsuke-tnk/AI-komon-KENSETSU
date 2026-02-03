import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 px-6 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto space-y-4">
        {/* 1行目: 企業情報 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-xs sm:text-sm text-zinc-400 text-center">
          <span className="text-white font-bold">株式会社ノヴァリス</span>
          <span className="break-words px-2">〒152-0004 東京都目黒区鷹番2丁目20番20号 イニッゾ学芸大学5-17</span>
          <a href="https://novalisgroup.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            novalisgroup.jp
          </a>
        </div>

        {/* 2行目: リンクとコピーライト */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-xs text-zinc-500">
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">特定商取引法</a>
          </div>
          <span>© 2026 株式会社ノヴァリス</span>
        </div>
      </div>
    </footer>
  );
};