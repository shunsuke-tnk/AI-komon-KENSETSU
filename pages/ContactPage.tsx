import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ここで実際のフォーム送信処理を行う
    // 例: API呼び出し、メール送信など
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            お申し込みありがとうございます
          </h1>
          <p className="text-zinc-400 text-lg mb-8">
            内容を確認の上、2営業日以内にご連絡いたします。<br />
            しばらくお待ちください。
          </p>
          <Link to="/">
            <Button variant="outline" size="lg">
              <ArrowLeft className="mr-2" size={20} />
              トップページに戻る
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span>トップページに戻る</span>
          </Link>
          <span className="text-orange-500 font-bold tracking-wider text-sm">CONSTRUCTION AI ADVISOR</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              無料相談に申し込む
            </h1>
            <p className="text-zinc-400 text-lg">
              以下のフォームに必要事項をご記入ください。<br />
              2営業日以内にご連絡いたします。
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 会社名 */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-bold text-zinc-300 mb-2">
                会社名 <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors text-lg"
                placeholder="株式会社〇〇建設"
              />
            </div>

            {/* お名前 */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-zinc-300 mb-2">
                お名前 <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors text-lg"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-zinc-300 mb-2">
                メールアドレス <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors text-lg"
                placeholder="example@company.co.jp"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-zinc-300 mb-2">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors text-lg"
                placeholder="03-1234-5678"
              />
            </div>

            {/* ご検討中のプラン */}
            <div>
              <label htmlFor="plan" className="block text-sm font-bold text-zinc-300 mb-2">
                ご検討中のプラン
              </label>
              <select
                id="plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-orange-500 transition-colors text-lg appearance-none cursor-pointer"
              >
                <option value="">選択してください</option>
                <option value="伴走プラン">伴走プラン（月10万円）</option>
                <option value="自走プラン">自走プラン（月30万円）</option>
                <option value="エージェント開発">エージェント開発（月50万円）</option>
                <option value="未定">まだ決めていない / 相談したい</option>
              </select>
            </div>

            {/* ご相談内容 */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-zinc-300 mb-2">
                ご相談内容・ご質問など
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors text-lg resize-none"
                placeholder="現在のお悩みや、ご質問があればご記入ください"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                size="xl"
                className="w-full text-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>送信中...</>
                ) : (
                  <>
                    無料相談を申し込む
                    <Send className="ml-3" size={24} />
                  </>
                )}
              </Button>
            </div>

            {/* Note */}
            <p className="text-zinc-500 text-sm text-center">
              ※ ご入力いただいた情報は、お問い合わせへの対応以外の目的には使用いたしません。
            </p>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-zinc-500 text-sm">
          © 2026 株式会社ノヴァリス
        </div>
      </footer>
    </div>
  );
};
