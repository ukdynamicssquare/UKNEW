
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="/favicon.png" rel="icon" />
          <link href="/favicon.png" rel="apple-touch-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Devonshire&family=Anton&family=Mochiy+Pop+One&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" crossOrigin="anonymous"></link>
          <meta name="msvalidate.01" content="EE56DA95B952D734B4521A0EFA1F0E8B" />
          <meta
            name="google-site-verification"
            content="uAsN7nCfnYQszC3rCTid53T7TSRjV1aotOCInjwu6lI"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-G7DMKRQVGJ"></script>
          <Script id="google-analytics" strategy="beforeInteractive">
            {`
               window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-G7DMKRQVGJ'); 
                `}
          </Script>
          {/* Google Tag Manager */}
          <Script id="GoogleTagManager" strategy="beforeInteractive">
            {
              `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5G8CCP6W');`
            }
          </Script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tib4o2otj4");
            `,
            }}
          />
          {/* <Script id="hotjar" strategy="beforeInteractive">
            {`
               (function (h, o, t, j, a, r) {
                h.hj =
                  h.hj ||
                  function () {
                    (h.hj.q = h.hj.q || []).push(arguments);
                  };
                h._hjSettings = { hjid: 2914258, hjsv: 6 };
                a = o.getElementsByTagName("head")[0];
                r = o.createElement("script");
                r.async = 1;
                r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                a.appendChild(r);
              })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
                `}
          </Script> */}
          {/* <Script id="apollo" strategy="beforeInteractive">
            {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script"); o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0, o.onload=function(){window.trackingFunctions.onLoad({appId:"66322a5ecb3cc6056bd458d4"})}, document.head.appendChild(o)}initApollo();
                `}
          </Script> */}
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.dynamicssquare.co.uk/#organization",
                  "name": "Dynamics Square UK Ltd.",
                  "url": "https://www.dynamicssquare.co.uk/",
                  "sameAs": [
                    "https://www.facebook.com/dynamicssquareuk/",
                    "https://x.com/dsquare_uk",
                    "https://www.linkedin.com/showcase/dynamics-square-uk/",
                    "https://www.youtube.com/c/DynamicsSquare"
                  ],
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.dynamicssquare.co.uk/#logo",
                    "inLanguage": "en-GB",
                    "url": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                    "contentUrl": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                    "width": "1024",
                    "height": "1024",
                    "caption": "Dynamics Square UK"
                  },
                  "image": { "@id": "https://www.dynamicssquare.co.uk/#logo" },
                  "description": "Dynamics Square™ is a trusted Dynamics 365 Partner in London, UK, offering expert Dynamics 365 solutions for Business Central, CRM, ERP & more. Contact us today!",
                  "alternateName": "Dynamics Square software company in London, United Kingdom",
                  "telephone": "+ 44 203 769 7689, +44 161 394 0487",
                  "email": "info@dynamicssquare.co.uk",
                  "brand": {
                    "@type": "Brand",
                    "name": "Dynamics Square UK Ltd.",
                    "logo": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.3",
                    "reviewCount": "1280"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.dynamicssquare.co.uk/#website",
                  "url": "https://www.dynamicssquare.co.uk/",
                  "name": "Dynamics Square UK Ltd.",
                  "alternateName": "Dynamics Square Microsoft Gold Partner company in London, UK",
                  "description": "Dynamics Square™ is a trusted Dynamics 365 Partner in London, UK, offering expert Dynamics 365 solutions for Business Central, CRM, ERP & more. Contact us today!",
                  "publisher": { "@id": "https://www.dynamicssquare.co.uk/#organization" },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://www.dynamicssquare.co.uk/?s={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "inLanguage": "en-GB"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.dynamicssquare.co.uk/#webpage",
                  "url": "https://www.dynamicssquare.co.uk/",
                  "name": "Trusted Dynamics 365 CRM and ERP Partner for UK Region | Dynamics Square UK",
                  "isPartOf": { "@id": "https://www.dynamicssquare.co.uk/#website" },
                  "about": { "@id": "https://www.dynamicssquare.co.uk/#organization" },
                  "primaryImageOfPage": { "@id": "https://www.dynamicssquare.co.uk/#logo" },
                  "datePublished": "2021-08-31T06:09:16+00:00",
                  "dateModified": "2021-11-07T09:15:37+00:00",
                  "description": "Dynamics Square is Dynamics 365 partner in the UK who help your business succeed by deploying the finest CRM, ERP, and Microsoft cloud solutions for your unique needs.",
                  "inLanguage": "en-GB",
                  "potentialAction": [
                    {
                      "@type": "ReadAction",
                      "target": ["https://www.dynamicssquare.co.uk/"]
                    }
                  ],
                  "headline": "As a Dynamics 365 partner, we assist your business in scaling up by giving unbiased advise on the best Microsoft dynamics ERP and CRM solutions.",
                  "keywords": [
                    "dynamics 365 partner uk",
                    "erp consultants UK",
                    "crm consultancy",
                    "d365 business central",
                    "crm expert online",
                    "d365 for finance",
                    "Microsoft NAV partner",
                    "dynamics crm implementation",
                    "d365 field service",
                    "crm implementation services"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "name": "Dynamics Square UK Ltd. - London Office",
                  "description": "Dynamics Square is Dynamics 365 partner in the London, UK who help your business succeed by deploying the finest CRM, ERP, and Microsoft cloud solutions for your unique needs.",
                  "image": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                  "alternateName": "Dynamics Square Software company in London, UK",
                  "priceRange": "£££-£££",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Kemp House, 152-160 City Road",
                    "addressLocality": "London",
                    "addressRegion": "London",
                    "addressCountry": "United Kingdom",
                    "postalCode": "EC1V 2NX",
                    "telephone": "+44-207-193-2502, +44-747-927-3380",
                    "email": "info@dynamicssquare.co.uk"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 51.52706865727293,
                    "longitude": -0.08876773400079006
                  },
                  "brand": {
                    "@type": "Brand",
                    "name": "Dynamics Square UK Ltd.",
                    "logo": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.3",
                    "reviewCount": "1260"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "17:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Saturday", "Sunday"],
                      "opens": "Closed",
                      "closes": "Closed"
                    }
                  ],
                  "url": "https://www.dynamicssquare.co.uk/",
                  "sameAs": [
                    "https://www.facebook.com/dynamicssquareuk/",
                    "https://twitter.com/dsquare_uk",
                    "https://www.linkedin.com/showcase/dynamics-square-uk/",
                    "https://www.youtube.com/c/DynamicsSquare"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "name": "Dynamics Square UK Ltd. - Manchester Office",
                  "description": "Dynamics Square: Leading Dynamics 365 Business Central partner in Manchester, UK. Transform your business with tailored ERP, CRM solutions and expert support.",
                  "image": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                  "alternateName": "Dynamics Square Software company in Manchester, UK",
                  "priceRange": "£££-£££",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "International House 61 Mosley Street",
                    "addressLocality": "Manchester",
                    "addressRegion": "UK",
                    "addressCountry": "United Kingdom",
                    "postalCode": "M2 3HZ",
                    "telephone": "+44 161 394 0487",
                    "email": "info@dynamicssquare.co.uk"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 53.47866198452941,
                    "longitude": -2.2374762932529038
                  },
                  "brand": {
                    "@type": "Brand",
                    "name": "Dynamics Square UK Ltd.",
                    "logo": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "17:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Saturday", "Sunday"],
                      "opens": "Closed",
                      "closes": "Closed"
                    }
                  ],
                  "url": "https://www.dynamicssquare.co.uk/",
                  "sameAs": [
                    "https://www.facebook.com/dynamicssquareuk/",
                    "https://twitter.com/dsquare_uk",
                    "https://www.linkedin.com/showcase/dynamics-square-uk/",
                    "https://www.youtube.com/c/DynamicsSquare"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "name": "Dynamics Square UK Ltd. - Birmingham Office",
                  "description": "Dynamics Square is your trusted Dynamics 365 ERP & CRM partner in Birmingham, UK, helping businesses streamline operations and boost growth with expert solutions.",
                  "image": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                  "alternateName": "Dynamics Square Software company in Birmingham, UK",
                  "priceRange": "£££-£££",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Izabella House, 24 - 26 Regents Place, City Centre",
                    "addressLocality": "Birmingham",
                    "addressRegion": "Birmingham, UK",
                    "addressCountry": "United Kingdom",
                    "postalCode": "B1 3NJ",
                    "telephone": "+44 121 790 0574",
                    "email": "info@dynamicssquare.co.uk"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 52.486175934043345,
                    "longitude": -1.9099113644176346
                  },
                  "brand": {
                    "@type": "Brand",
                    "name": "Dynamics Square UK Ltd.",
                    "logo": "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "17:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Saturday", "Sunday"],
                      "opens": "Closed",
                      "closes": "Closed"
                    }
                  ],
                  "url": "https://www.dynamicssquare.co.uk/",
                  "sameAs": [
                    "https://www.facebook.com/dynamicssquareuk/",
                    "https://twitter.com/dsquare_uk",
                    "https://www.linkedin.com/showcase/dynamics-square-uk/",
                    "https://www.youtube.com/c/DynamicsSquare"
                  ]
                }
              ]
            }),
          }}
        />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5G8CCP6W"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
          {/* <script src="https://code-eu1.jivosite.com/widget/0vnMaZXeaH" async></script> */}

          <script
            id="zsiqchat"
            async
            dangerouslySetInnerHTML={{
              __html: `
              var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siq2c0a7348126da1eec1533d7b2fe81669a9a9454a36812c4485ee1ce065e0a657e9757eecc59243ed2c9ad7fb7bda1383", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
              `
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument