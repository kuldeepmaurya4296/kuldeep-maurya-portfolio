// layout.jsx (Server Component)
import './globals.css';
import ThemeProvider from '../components/ThemeProvider';
import LenisProvider from '../components/LenisProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LenisProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
export const metadata = {
  generator: 'Next.js',
  applicationName: 'Kuldeep Portfolio',
  // themeColor: '#000000'
};
