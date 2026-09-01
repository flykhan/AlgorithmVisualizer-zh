import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "算法可视化 (Algorithm Visualizer)",
  description: "通过可视化探索并学习算法。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // 动态视口高度：精确反映真实可见高度（含浏览器地址栏/工具栏展开收缩）
              (function () {
                function setHeight() {
                  var h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
                  document.documentElement.style.setProperty('--app-height', h + 'px');
                }
                setHeight();
                window.addEventListener('resize', setHeight);
                if (window.visualViewport) {
                  window.visualViewport.addEventListener('resize', setHeight);
                  window.visualViewport.addEventListener('scroll', setHeight);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}