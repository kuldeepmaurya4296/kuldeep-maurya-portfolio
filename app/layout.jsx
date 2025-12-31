// layout.jsx (Server Component)
import './globals.css';
import ThemeProvider from '../components/ThemeProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
export const metadata = {
  generator: 'Next.js',
  applicationName: 'Kuldeep Portfolio',
  manifest: '/manifest.json',
  // themeColor: '#000000'
};
