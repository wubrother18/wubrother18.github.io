import InView from '@/components/InView';

export const metadata = {
  title: '關於我們',
};

export default function AboutPage() {
  return (
    <section className="space-y-12 py-8">
      <InView>
        <div className="text-center space-y-4">
          <h1 className="section-title gradient-text">歡迎來到 WakuWaku Lab 的心臟地帶</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
            想像一下，在數位世界的無垠星空中，藏著無數等待被點亮的創意火花。
            <br />
            每一次點擊、每一次滑動，都可能是一段奇妙旅程的開端。
            <br />
            在 WakuWaku Lab，我們就是這樣的探險家——專注於捕捉那些稍縱即逝的靈感，將它們打造成能讓人心跳加速、嘴角上揚的驚喜體驗。
          </p>
        </div>
      </InView>

      <InView>
        <div className="card p-6 md:p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center">從靈感到微笑的魔法</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto leading-7">
            我們擅長將創意化為觸手可及的體驗：用 Flutter 打造跨越平台的直覺互動、運用 AI 讓日常充滿意想不到的驚喜、精心設計 UI/UX 讓每一次操作都能自然而然地帶來微笑。我們整合技術、創意與用戶洞察，創造出既有趣又有價值的作品。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <SkillCard
              title="原生開發"
              description="深入 Android (Java/Kotlin) 與 iOS (Swift/Objective-C) 的核心，打造最流暢、最貼近系統的頂級體驗。"
            />
            <SkillCard
              title="跨平台開發"
              description="以 Flutter (Dart) 為畫筆，一次開發就能在多個平台繪出絢麗且一致的畫面，高效實現您的創意藍圖。"
            />
            <SkillCard
              title="後端與雲服務"
              description="活用 Firebase (Auth, Firestore, Functions) 與各式 REST API，為您的應用程式建立穩定可靠的後盾與無限擴展的可能。"
            />
            <SkillCard
              title="UI/UX 設計"
              description="不只追求美觀，更在乎感受。我們用心雕琢每一個介面與互動，讓使用者在不知不覺中愛上您的產品。"
            />
            <SkillCard
              title="版本控制"
              description="透過 Git 進行嚴謹的版本管理，確保每一次的程式碼迭代都在安全穩定的軌道上進行。"
            />
            <SkillCard
              title="應用程式上架"
              description="熟悉 Google Play 與 App Store 的完整上架流程，讓您的心血結晶順利航向廣大的使用者海洋。"
            />
          </div>
        </div>
      </InView>

      <InView>
        <div className="text-center space-y-4 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold">探索，才剛開始...</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            歡迎你在 WakuWaku Lab 的世界裡慢慢發現更多可能，
            <br />
            也許下一個意想不到的瞬間，就在你的指尖等著你。
          </p>
        </div>
      </InView>
    </section>
  );
}

function SkillCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="ag-card p-5">
      <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-6">{description}</p>
    </div>
  );
}

