import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';

// EmailJS設定
const EMAILJS_SERVICE_ID = 'service_ge0upmi';
const EMAILJS_TEMPLATE_ID = 'template_ai0rsz2';
const EMAILJS_PUBLIC_KEY = 'vx50aV6eOQr3aUKIJ';

// Google Sheets Web App URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw1zMNsitPgh5WA-RH0QZZSNcXEmU8ncJdx6LrTolBRhnP5SWx84zglP4ighssGWAXXuA/exec';

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

    try {
      // 1. Google スプレッドシートにデータを送信
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: formData.companyName,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          plan: formData.plan || '未選択',
          message: formData.message || '',
        }),
      });

      // 2. お客様への自動返信メール送信
      const templateParams = {
        to_email: formData.email,
        to_name: formData.name,
        company_name: formData.companyName,
        plan: formData.plan || '未選択',
        message: formData.message || 'なし',
        phone: formData.phone || '未入力',
        calendar_link: 'https://calendar.app.google/N8cfmp62m55CpWcq7',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error('送信エラー:', error);
      // エラーでも送信完了として扱う（後で手動対応）
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            お申し込みありがとうございます
          </h1>
          <p className="text-zinc-600 text-lg mb-8">
            内容を確認の上、2営業日以内にご連絡いたします。<br />
            しばらくお待ちください。
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              <ArrowLeft className="mr-2" size={20} />
              トップページに戻る
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200 py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors">
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
            <p className="text-zinc-600 text-lg">
              以下のフォームに必要事項をご記入ください。<br />
              2営業日以内にご連絡いたします。
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 会社名 */}
            <div>
              <label htmlFor="companyName" className="block text-lg font-bold text-zinc-700 mb-2">
                会社名 <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors text-lg"
                placeholder="株式会社〇〇建設"
              />
            </div>

            {/* お名前 */}
            <div>
              <label htmlFor="name" className="block text-lg font-bold text-zinc-700 mb-2">
                お名前 <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors text-lg"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-lg font-bold text-zinc-700 mb-2">
                メールアドレス <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors text-lg"
                placeholder="example@company.co.jp"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label htmlFor="phone" className="block text-lg font-bold text-zinc-700 mb-2">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="^$|^\d{2,4}-\d{2,4}-\d{3,4}$"
                title="ハイフンを含む形式で入力してください（例: 03-1234-5678）"
                className="w-full px-4 py-4 bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors text-lg"
                placeholder="03-1234-5678"
              />
              <p className="text-zinc-500 text-sm mt-1">※ ハイフン付きで入力してください（例: 03-1234-5678）</p>
            </div>

            {/* ご検討中のプラン */}
            <div>
              <label htmlFor="plan" className="block text-lg font-bold text-zinc-700 mb-2">
                ご検討中のプラン
              </label>
              <select
                id="plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-zinc-50 border border-zinc-300 text-zinc-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors text-lg appearance-none cursor-pointer"
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
              <label htmlFor="message" className="block text-lg font-bold text-zinc-700 mb-2">
                ご相談内容・ご質問など
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors text-lg resize-none"
                placeholder="現在のお悩みや、ご質問があればご記入ください"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                size="xl"
                className="w-full text-2xl font-black tracking-wide [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]"
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
      <footer className="border-t border-zinc-200 py-8 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center text-zinc-500 text-sm">
          © 2026 株式会社ノヴァリス
        </div>
      </footer>
    </div>
  );
};
