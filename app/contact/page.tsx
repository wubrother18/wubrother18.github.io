export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title gradient-text">聯絡我們</h1>
      <div className="card p-5 space-y-2">
        <p>
          <span className="text-gray-400">Email:</span> <a href="mailto:lsst811118@gmail.com" className="text-brand-400 hover:text-brand-300 underline">contact@wakuwakulab.com</a>
        </p>
        <p>
          <span className="text-gray-400">LinkedIn:</span> <a href="https://linkedin.com/company/wakuwakulab" className="text-brand-400 hover:text-brand-300 underline">linkedin.com/company/wakuwakulab</a>
        </p>
        <p>
          <span className="text-gray-400">Instagram:</span> <a href="https://www.instagram.com/waku_waku_lab" className="text-brand-400 hover:text-brand-300 underline">@waku_waku_lab</a>
        </p>
      </div>
    </section>
  );
}

