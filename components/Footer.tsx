export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="container py-8 text-sm text-gray-400 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300">想更了解我們的 App？</p>
          <a
            href="https://play.google.com/store/apps/developer?id=WakuWaku+Lab"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            前往 Google Play
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} WakuWaku Lab. All rights reserved.</p>
          <p className="text-gray-500">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

