import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Shifraz Nazar - A Software Engineer proficient in App/Web, Cloud, DevOps, AL/ML, and Design. Join my journey."
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shifraz Nazar" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="msapplication-tap-highlight" content="no" />

        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        <link rel="apple-touch-icon" href="/img/logo_rounded.png" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.ico"
        />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:title" content="Shifraz Nazar" key="title" />
        <meta
          property="og:description"
          content="Shifraz Nazar - A Software Engineer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/75434191?v=4"
        />
        <meta
          property="og:image:secure_url"
          content="https://avatars.githubusercontent.com/u/75434191?v=4"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Shifraz Nazar" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://shifraznazar.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:profile"
          content="https://github.com/ShifrazNazar"
        />
        <meta property="og:site_name" content="Shifraz Nazar" />
        <meta property="og:locale" content="en_US" />

        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="640x1136"
        />

        {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
        <meta
          name="keywords"
          content="
    Shifraz Nazar, Software Engineer, Full Stack Developer, DevOps Engineer, Software Engineer,
    Programmer, Software Developer, Portfolio Website, Web Developer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Web Developer, Shifraz Nazar Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, Shifraz Nazar Projects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, Shifraz Nazar Web Developer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    Shifraz Nazar DevOps, IT Portfolio, Web Developer Portfolio, Shifraz Nazar Developer,
    Full Stack Engineer Shifraz Nazar, Shifraz Nazar Coding, Shifraz Nazar IT,
    Shifraz Nazar Full Stack Developer, Shifraz Nazar Software Engineer, Shifraz Nazar DevOps Engineer,
    Shifraz Nazar Programming, Shifraz Nazar Software Development, Shifraz Nazar Coding Projects,
    Shifraz Nazar Tech Portfolio, Shifraz Nazar IT Portfolio, Shifraz Nazar Software Engineer Portfolio,
    Shifraz Nazar Web Developer Portfolio, Shifraz Nazar DevOps Portfolio, Shifraz Nazar Full Stack Engineer,
    Shifraz Nazar Full Stack Developer Portfolio, Shifraz Nazar Coding Portfolio, Shifraz Nazar Programming Portfolio,
    Shifraz Nazar Software Development Portfolio, Shifraz Nazar Technology Projects,
    Shifraz Nazar Computer Science, Shifraz Nazar Cloud Computing, Shifraz Nazar IT Professional,
    Shifraz Nazar Technology Enthusiast, Shifraz Nazar Computer Programmer, Shifraz Nazar Code Portfolio,
    Shifraz Nazar Technology Student, Shifraz Nazar Software Architect,fiaz,fiaz portfolio,fiaz devops,fiaz devops engineer,
    fiaz devops portfolio,fiaz devops projects,fiaz devops specialist,fiaz devops professional,fiaz devops engineer portfolio,
    fiaz devops engineer projects,fiaz devops engineer specialist,fiaz devops engineer professional,fiaz devops engineer coding,
    fiaz devops engineer coding projects,fiaz devops engineer coding portfolio,fiaz devops engineer coding specialist,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist,

"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Shifraz Nazar",
          "url": "https://shifraznazar.vercel.app/"
        }`,
          }}
        />

        {/*theme*/}
        <Script id="theme.util.jsx" strategy="beforeInteractive">
          {`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
        </Script>

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SDJ0K1Y70X"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SDJ0K1Y70X', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
