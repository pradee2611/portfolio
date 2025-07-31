import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pradeep Kumar S - Full Stack Developer',
  description: 'Full Stack Developer specializing in MERN & Next.js - Passionate about Scalable AI-integrated Web Apps',
  keywords: 'Full Stack Developer, MERN Stack, Next.js, React, Node.js, MongoDB, JavaScript, TypeScript',
  authors: [{ name: 'Pradeep Kumar S' }],
  openGraph: {
    title: 'Pradeep Kumar S - Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN & Next.js - Passionate about Scalable AI-integrated Web Apps',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}