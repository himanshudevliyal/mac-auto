import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

import localFont from "next/font/local";
import Layout from "@/components/layout/layout";
import { Toaster } from "sonner";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
// Local SpeedBeast font
const SpeedBeast = localFont({
  src: [
    {
      path: "../../public/fonts/speedbeast/SpeedBeast.ttf",
      weight: "400",
    },
  ],
  variable: "--font-SpeedBeast",
});

export const metadata = {
  metadataBase: new URL("https://mack-ev.com/"),
  title: {
    default: "MACK EV | Electric Rickshaw & E-Cart Manufacturer",
  },
  description:
    "MACK EV is a leading electric vehicle manufacturer in India, offering i-CAT certified e-rickshaws & EVs with patented designs & a PAN-India network.",
  keywords:
    "e rickshaw, e rickshaw price, electric auto rickshaw, electric auto price in india, E Rickshaw price On Road, E Rickshaw manufacturers in India, E Rickshaw Dealers in India, E rickshaw suppliers, Icat approved e rickshaw in india, Electric Rickshaw Manufacturer & Supplier, i-cat certified e rickshaw manufacturers, e rickshaw parts supplier India, electric vehicle manufacturers in India, eco friendly transport in India, E rickshaw parts supplier in India",
  alternates: {
    canonical: `/`,
  },
  // robots: {
  //   index: true,
  //   follow: true,
  // },

  verification: {
    google: "ujgvZFXfQFVhYm59UCfjX9wpScL3VAe13cdjBcJP-Io",
  },
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: "https://mack-ev.com/",
    title: "MACK EV | Electric Rickshaw & E-Cart Manufacturer",
    description:
      "MACK EV is a leading electric vehicle manufacturer in India, offering i-CAT certified e-rickshaws & EVs with patented designs & a PAN-India network.",
    images: [
      {
        url: "https://mack-ev.com/logo.png",
        width: 1000,
        height: 1000,
        alt: "MACK EV Electric Rickshaw",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    domain: "macautoindia.com",
    url: "https://mack-ev.com/",
    title: "MACK EV | Electric Rickshaw & E-Cart Manufacturer",
    description:
      "MACK EV is a leading electric vehicle manufacturer in India, offering i-CAT certified e-rickshaws & EVs with patented designs & a PAN-India network.",
    images: [
      "https://opengraph.b-cdn.net/production/images/b809beb0-ce95-448b-9240-3c11aaa75617.jpg?token=sVMwVS93ylb8wlGovaHw1_xvAHaesPxt-Z95RErdHeY&height=1000&width=1000&expires=33291090671",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: "MACK EV",
              url: "https://mack-ev.com/",
              logo: "https://mack-ev.com/logo.png",
              image: "https://mack-ev.com/img/banner1.png",
              description:
                "MACK EV is a leading electric vehicle manufacturer in India, offering i-CAT certified e-rickshaws & EVs with patented designs & a PAN-India network.",
              telephone: "+91-80-9062-9062",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gurukul Indraprastha College, 121A, 121B",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                postalCode: "121004",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.4983",
                longitude: "78.6598",
              },
              sameAs: [
                "https://www.facebook.com/MacAutoofficial",
                "https://x.com/macautoofficial",
                "https://www.facebook.com/MacAutoofficial",
              ],
              founder: {
                "@type": "Person",
                name: "Abhijeet Wassan",
                jobTitle: "Founder & CEO",
              },
              foundingDate: "2014",
              foundingLocation: {
                "@type": "Place",
                name: "Faridabad, India",
              },
            }),
          }}
        />

        <Script id="fb-pixel" strategy="afterInteractive">
          {`
           !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2154223241771607');
fbq('track', 'PageView');       `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none", visibility: "hidden" }}
            src="https://www.facebook.com/tr?id=2154223241771607&ev=PageView&noscript=1"
          />
        </noscript>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6VR7WHJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5Z8REY1QK8"
        ></Script>

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5Z8REY1QK8');
        `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6VR7WHJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </head>

      <meta
        name="google-site-verification"
        content="eMK-J7AIIge48keTYluNj9JqmmIGzGLqgoohVld9lB4"
      />
      <GoogleAnalytics gaId="G-5Z8REY1QK8" />
      <GoogleTagManager gtmId="GTM-M6VR7WHJ" />

      <body
        className={`${SpeedBeast.variable} antialiased`}
        suppressHydrationWarning
      >
        <Layout>{children}</Layout>
        <Toaster />
      </body>
    </html>
  );
}
