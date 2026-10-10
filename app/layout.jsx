import { Space_Grotesk } from 'next/font/google';
import { AppProvider } from '@/context/AppContext';
import './globals.css';

const sg = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-sg' });

export const metadata = {
  title: 'Ralph Lauren Te | UI/UX Designer & MERN Stack',
  description: 'Portfolio of Ralph Lauren Te, a student who turns ideas into real web applications. UI/UX Designer | MERN Stack.',
  keywords: ['Ralph Lauren Te', 'UI/UX Designer', 'MERN Stack', 'Portfolio'],
  openGraph: { title: 'Ralph Lauren Te | Portfolio', description: 'UI/UX Designer | MERN Stack', type: 'website' },
};
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

const themeScript = "try{var t=JSON.parse(localStorage.getItem('theme'));if(t)document.documentElement.dataset.theme=t}catch(e){}";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={sg.variable} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body><AppProvider>{children}</AppProvider></body>
    </html>
  );
}
