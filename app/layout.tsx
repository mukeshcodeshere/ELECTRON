// app/layout.tsx
import { FC, ReactNode } from 'react';
import './styles/globals.css';  // Correct path to the global styles

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Electron - Unlocking Global Access to India’s Private Markets</title>
        {/* You can add other head tags like favicon, etc. here */}
      </head>
      <body>
        <header>
          <h1>Electron</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/product">Product</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 Electron, All Rights Reserved</footer>
      </body>
    </html>
  );
};

export default Layout;
