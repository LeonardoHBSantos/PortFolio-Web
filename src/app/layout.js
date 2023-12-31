import './styles/globals.css';
import { Poppins } from 'next/font/google';
import PropTypes from 'prop-types';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

// export const metadata = {
//   title: 'Leonardo Santos - Portfolio',
//   description: 'Leonardo Santos - Portfolio',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Leonardo Santos - Portfolio</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/assets/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/assets/manifest.json"
        />
        <meta
          name="msapplication-TileColor"
          content="#ffffff"
        />
        <meta
          name="msapplication-TileImage"
          content="/ms-icon-144x144.png"
        />
        <meta
          name="theme-color"
          content="#ffffff"
        />
      </head>
      <body className={ poppins.className }>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
