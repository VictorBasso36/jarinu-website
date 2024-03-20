import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OpenProvider } from './providers/providers'
const inter = Inter({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', ], variable: '--Inter' }, );

export const metadata: Metadata = {
  title: "Jarinu - Imob - Inteligência Imobiliária",
  description: "Imob - Inteligência Imobiliária",
  icons: "/mainlogo.svg",
  authors: [{
    name: 'Guilherme Luziac',
    url: 'https://www.linkedin.com/in/guilherme-carvalho-bispo/?originalSubdomain=br'
  },
  {
    name: 'Victor Basso Dev',
    url: 'www.linkedin.com/in/victor-basso-b3090a189'
  }  
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <OpenProvider key={0}>
        <body className={inter.className}>{children}</body>
      </OpenProvider>
    </html>
  );
}
