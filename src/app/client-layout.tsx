'use client';

import { usePathname } from 'next/navigation';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <>
      {!isLoginPage && (
        <header className="app-header">
          <div className="container">
            <a href="/" className="app-header__brand">
              <span className="app-header__icon" aria-hidden>
                🔥
              </span>
              <span className="app-header__title">BBQ Journal</span>
            </a>
          </div>
        </header>
      )}
      <main className={isLoginPage ? '' : 'app-main'}>{children}</main>
      {!isLoginPage && (
        <footer className="app-footer">
          <div className="container">
            <p>Built for tasty experiments and better next times.</p>
          </div>
        </footer>
      )}
    </>
  );
}