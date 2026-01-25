import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Moritz Hauschulz',
    template: '%s | Moritz Hauschulz',
  },
  description: "Moritz Hauschulz's personal website.",
  keywords: [
    'Moritz Hauschulz',
    'data scientist',
    'machine learning',
    'full-stack developer',
    'engineer',
    'portfolio',
  ],
  authors: [{ name: 'Moritz Hauschulz' }],
  creator: 'Moritz Hauschulz',
  metadataBase: new URL('https://moritzhauschulz.github.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moritzhauschulz.github.io',
    siteName: 'Moritz Hauschulz',
    title: 'Moritz Hauschulz',
    description: 'AI Researcher.',
    images: [
      {
        url: '/images/me.jpg',
        width: 713,
        height: 713,
        alt: 'Moritz Hauschulz',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
