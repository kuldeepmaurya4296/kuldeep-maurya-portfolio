
import HomePage from '../components/sections/homepage';
import { portfolioData } from '../data/portfolio-data';

export const metadata = {
  title: 'Kuldeep Maurya - Home',
  description: 'Portfolio of Kuldeep Maurya - Full Stack Developer & Designer',
  keywords: ['Kuldeep Maurya', 'Portfolio', 'Full Stack Developer', 'React', 'Next.js', 'MERN'],
  authors: [{ name: 'Kuldeep Maurya', url: 'https://yourdomain.com' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0ea5e9', // Primary Tailwind color
  icons: {
    icon: '/logo2.png', // favicon
  },
  openGraph: {
    title: 'Kuldeep Maurya - Home',
    description: 'Portfolio of Kuldeep Maurya - Full Stack Developer & Designer',
    url: 'https://yourdomain.com',
    siteName: 'Kuldeep Maurya Portfolio',
    images: [
      {
        url: '/logo2.png',
        width: 800,
        height: 600,
        alt: 'Kuldeep Maurya Portfolio Logo',
      },
    ],
    type: 'website',
  },
};
export default function Home() {
  return (
    <>
    <HomePage portfolioData={portfolioData}/>
      </>
  );
}
