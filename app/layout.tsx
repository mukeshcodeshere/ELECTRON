// app/layout.tsx
import { FC, ReactNode } from 'react';
import './styles/globals.css';  // Import the global styles

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Electron - Unlocking Global Access to India’s Private Markets</title>
      </head>
      <body>
        <header>
          <img src="/logo.svg" alt="Electron Logo" />  {/* Logo at the top */}
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

        <footer>
          <p>© 2024 Electron, All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
