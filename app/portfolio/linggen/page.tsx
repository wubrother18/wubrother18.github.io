export const metadata = {
  title: '靈根實驗室｜你是哪種修仙體質？',
  description: '修仙體質測驗 × 養成遊戲｜測你的靈根屬性，合成限定靈根、蒐集成就、打造專屬洞府，開啟你的修仙之旅！',
  openGraph: {
    title: '靈根實驗室｜你是哪種修仙體質？',
    description:
      '修仙體質測驗 × 養成遊戲｜測你的靈根屬性，合成限定靈根、蒐集成就、打造專屬洞府，開啟你的修仙之旅！',
    images: [{ url: '/images/linggen-hero.png', width: 1200, height: 630 }],
  },
};

const GP_APP = 'https://play.google.com/store/apps/details?id=com.wu.ling_gen.ling_gen';

import DownloadCta from '@/components/DownloadCta';
import Starfield from '@/components/Starfield';
import Mist from '@/components/Mist';
import Runes from '@/components/Runes';
import Screenshots from './Screenshots';

export default function LinggenLanding() {
  return (
    <section className="space-y-12">
      <Starfield />
      <Mist />
      <Runes />
      {/* Hero */}
      <div className="relative overflow-hidden card p-8 md:p-12 shimmer">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-500 via-accent-500 to-sun opacity-40 blur-2xl animate-pulse" />
        <div className="absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(closest-side,rgba(255,255,255,.25),transparent)] opacity-30" />
        <div className="relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-gray-200">
            <span>全新活動</span>
            <span className="h-1.5 w-1.5 rounded-full bg-sun animate-pulse" />
            <span>Tech World TW 小島篇</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold gradient-text">靈根實驗室：你是哪種修仙體質？</h1>
          <p className="text-gray-200 max-w-3xl mx-auto">
            參與限時「東海祕聞」活動，簽到領素材、完成測驗蒐集更多專屬材料，合成全新限定靈根。測出你的修仙體質，打造洞府、煉丹煉器、遊歷奇遇，踏上成仙之路！
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <a href={GP_APP} target="_blank" rel="noreferrer" className="btn btn-primary">前往 Google Play 下載</a>
            <a href="#features" className="btn bg-white/10 hover:bg-white/20 text-white border border-white/10">看看亮點</a>
          </div>
        </div>
      </div>

      {/* Event Callout */}
      <div className="card p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-2">🌊 Tech World TW 小島篇｜東海祕聞限時開啟</h2>
        <p className="text-gray-300">
          每日簽到、探索祕聞、蒐集時空碎片，完成測驗可掉落活動素材，合成全新限定靈根！遊歷、煉丹等系統將與活動素材聯動，別錯過！
        </p>
        <ul className="mt-4 grid md:grid-cols-3 gap-3 text-gray-200 text-sm">
          <li className="ag-card">每日簽到：連續七日觸發關鍵劇情</li>
          <li className="ag-card">全域聯動：遊歷、測驗出現活動素材與事件</li>
          <li className="ag-card">新靈根：限定靈根已投入化靈池，等待有緣人合成</li>
        </ul>
      </div>

      {/* Features */}
      <div id="features" className="grid md:grid-cols-3 gap-6">
        <div className="card p-6 tilt relative">
          <h3 className="text-xl font-semibold mb-2">📌 體質測驗 × 命運開局</h3>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li>首次入門進行靈根測驗，決定修仙起點</li>
            <li>題目結合修仙世界觀，趣味又沉浸</li>
            <li>每日可免費測驗 1 次；會員每日 24 次</li>
          </ul>
          <a href={GP_APP} target="_blank" rel="noreferrer" className="absolute top-3 right-3 ag-card text-xs">立即下載</a>
        </div>
        <div className="card p-6 tilt relative">
          <h3 className="text-xl font-semibold mb-2">🌀 化靈養成 × 靈根蒐集</h3>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li>測驗獲得素材，投入「化靈池」合成靈根</li>
            <li>從五行到變異、限時靈根，持續擴充</li>
            <li>靈根影響修煉效率、奇遇、煉丹結果</li>
          </ul>
          <a href={GP_APP} target="_blank" rel="noreferrer" className="absolute top-3 right-3 ag-card text-xs">立即下載</a>
        </div>
        <div className="card p-6 tilt relative">
          <h3 className="text-xl font-semibold mb-2">🏡 洞府模擬 × 輕鬆修行</h3>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li>煉丹／煉器系統、悟道樹、閉關修煉</li>
            <li>每日小任務，建立修煉儀式感</li>
            <li>隨機奇遇與活動彩蛋，增添驚喜</li>
          </ul>
          <a href={GP_APP} target="_blank" rel="noreferrer" className="absolute top-3 right-3 ag-card text-xs">立即下載</a>
        </div>
      </div>

      {/* Member Benefits */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-2">👑 會員加值（選購）</h3>
        <ul className="text-gray-300 space-y-1 text-sm">
          <li>每日 24 次測驗、無限制遊歷</li>
          <li>免廣告、修煉效率加成、每日靈力補給</li>
          <li>新功能搶先體驗：輪迴再修、仙體系統、靈根進化</li>
        </ul>
      </div>

      {/* Screenshots */}
      <Screenshots />

      {/* CTA */}
      <div className="text-center space-y-3">
        <p className="text-gray-300">準備開啟你的修仙之旅？現在就加入，遇見你的專屬靈根！</p>
        <a href={GP_APP} target="_blank" rel="noreferrer" className="btn btn-primary">立即前往 Google Play</a>
      </div>

      {/* Floating CTA */}
      <DownloadCta />
    </section>
  );
}

