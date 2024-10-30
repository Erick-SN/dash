import '@/app/ui/global.css';
import { monserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${monserrat.className} antialiased`}>
        {children}
        <footer className='text-center text-sm text-gray-500'>
          Hecho con amor por vercel
        </footer>
      </body>
    </html>
  );
}
