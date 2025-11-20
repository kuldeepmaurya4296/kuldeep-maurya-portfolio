import AllProjects from "../../components/sections/allProjects";
import { portfolioData } from "../../data/portfolio-data";

export const metadata = {
  title: 'Kuldeep Maurya - Projects',
  description: 'Portfolio Projects of Kuldeep Maurya - Full Stack Developer & Designer',
  icons: {
    icon: '/logo2.png',
  },
  openGraph: {
    title: 'Kuldeep Maurya - Projects',
    description: 'Portfolio Projects of Kuldeep Maurya - Full Stack Developer & Designer',
    url: 'https://yourdomain.com/projects',
    siteName: 'Kuldeep Maurya Portfolio',
    images: [
      {
        url: '/logo2.png',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kuldeep Maurya - Projects',
    description: 'Portfolio Projects of Kuldeep Maurya - Full Stack Developer & Designer',
    images: ['/logo2.png'],
  },
};

export default function ProjectsPage() {
  const { projects } = portfolioData;

 

  return (
    <>
   <AllProjects/>
    </>
  );
}
