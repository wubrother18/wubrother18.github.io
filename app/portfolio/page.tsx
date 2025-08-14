import InView from '@/components/InView';
import Link from 'next/link';
export const metadata = {
  title: 'Portfolio',
};

type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  external?: boolean;
};

const GP_DEV = 'https://play.google.com/store/apps/developer?id=WakuWaku+Lab';

const projects: Project[] = [
  {
    title: '靈根實驗室：你是哪種修仙體質？',
    description: '修仙體質測驗與養成遊戲 App',
    image: '/images/linggen.png',
    href: '/portfolio/linggen',
  },
  {
    title: 'Mood Gacha - Daily Feels',
    description: '心情抽卡 · 每日感受與心情記錄',
    image: '/images/mood-gacha.png',
    href: GP_DEV,
    external: true,
  },
  {
    title: 'CountDeck - freestyle counter',
    description: '自由計數器 · 輕鬆追蹤你的目標',
    image: '/images/countdeck.webp',
    href: GP_DEV,
    external: true,
  },
  {
    title: 'Fish - 就只是想養個魚而已',
    description: '輕鬆養魚 · 放鬆小品',
    image: '/images/fish.webp',
    href: GP_DEV,
    external: true,
  },
];

export default function PortfolioPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title gradient-text">Portfolio</h1>
      <InView>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            p.external ? (
              <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="card overflow-hidden group tilt">
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-4 space-y-1">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-300 text-sm">{p.description}</p>
                </div>
              </a>
            ) : (
              <Link key={p.title} href={p.href} className="card overflow-hidden group tilt">
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-4 space-y-1">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-300 text-sm">{p.description}</p>
                </div>
              </Link>
            )
          ))}
        </div>
      </InView>
    </section>
  );
}

