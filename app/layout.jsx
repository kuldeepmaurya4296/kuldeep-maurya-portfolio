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
  generator: 'v0.app'
};
