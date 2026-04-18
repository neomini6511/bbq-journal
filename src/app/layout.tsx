import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BBQ Journal",
  description: "A running log of cooks, recipes, and lessons learned.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
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
        <main className="app-main">{children}</main>
        <footer className="app-footer">
          <div className="container">
            <p>Built for tasty experiments and better next times.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
