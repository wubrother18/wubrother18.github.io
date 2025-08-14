import Link from 'next/link';
import InView from '@/components/InView';

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="text-center space-y-6 pt-8">
        <h1 className="section-title gradient-text">探索未知，把驚喜裝進你的口袋。</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          WakuWaku Lab——專注於開發讓人期待、微笑、想探索更多的 App。
        </p>
        <div className="pt-2 flex items-center justify-center gap-4">
          <a href="https://play.google.com/store/apps/developer?id=WakuWaku+Lab" target="_blank" rel="noreferrer" className="btn btn-primary">
            前往 Google Play
          </a>
          <Link href="/portfolio" className="btn bg-white/10 hover:bg-white/20 text-white border border-white/10">
            查看所有作品
          </Link>
        </div>
      </div>

      <InView>
        <div className="marquee card p-4">
          <div className="marquee__track text-gray-200">
          <span>靈根實驗室 · 修仙體質測驗</span>
          <span>Unsay · 匿名分享</span>
          <span>CountDeck · freestyle counter</span>
          <span>Mood Gacha · Daily Feels</span>
          <span>Fish · 就只是想養個魚而已</span>
          <span>WakuWaku Lab · 讓創意發光</span>
          <span>靈根實驗室 · 修仙體質測驗</span>
          <span>Unsay · 匿名分享</span>
          <span>CountDeck · freestyle counter</span>
          <span>Mood Gacha · Daily Feels</span>
          <span>Fish · 就只是想養個魚而已</span>
          <span>WakuWaku Lab · 讓創意發光</span>
          </div>
        </div>
      </InView>

      <InView>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/portfolio/linggen" className="card p-4 shimmer tilt block">
            <img src="/images/linggen.png" alt="靈根實驗室" className="w-full h-48 object-cover rounded-lg" />
          </Link>
          <Link href="/portfolio" className="card p-4 shimmer tilt block">
            <img src="/images/mood-gacha.png" alt="Mood Gacha" className="w-full h-48 object-cover rounded-lg" />
          </Link>
          <Link href="/portfolio" className="card p-4 shimmer tilt block">
            <img src="/images/countdeck.webp" alt="CountDeck" className="w-full h-48 object-cover rounded-lg" />
          </Link>
        </div>
      </InView>
    </section>
  );
}

