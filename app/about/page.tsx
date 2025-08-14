export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title gradient-text">About WakuWaku Lab</h1>
      <div className="space-y-4 text-gray-200 leading-7">
        <p>
          WakuWaku Lab - 專注於行動應用程式開發。
          從原生 Android、iOS 到跨平台 Flutter，我們將想法變成可用、流暢又美觀的 App。
          熟悉多種開發語言與行動平台特性，能在不同技術間靈活切換，並將使用者體驗放在首位。
        </p>
        <p>
          我熱愛探索新技術，從功能規劃、UI 設計到上架發佈，享受打造完整產品的每個環節。
        </p>
      </div>
      <div className="card p-5 space-y-3">
        <h2 className="text-xl font-semibold">技能</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>原生開發：Android（Java / Kotlin）、iOS（Objective-C / Swift）</li>
          <li>跨平台開發：Flutter（Dart）</li>
          <li>後端與雲服務：Firebase（Authentication、Firestore、Cloud Functions、Hosting）、REST API 整合</li>
          <li>其他：UI/UX 設計、版本控制（Git）、應用程式上架流程（Google Play / App Store）</li>
        </ul>
      </div>
      <div className="pt-2">
        <a href="https://play.google.com/store/apps/developer?id=WakuWaku+Lab" target="_blank" rel="noreferrer" className="btn btn-primary">在 Google Play 上看更多</a>
      </div>
    </section>
  );
}

