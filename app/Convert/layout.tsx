import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { OpenProvider } from '../providers/providers'
import Script from "next/script";
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
       <head>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                  __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N5FBCK62');
          `,
            }}
          />
        </head>
      <OpenProvider key={0}>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5FBCK62"
        height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
        <body className={inter.className}>{children}</body>
      </OpenProvider>
    </html>
  );
}
