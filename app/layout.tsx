import { FC, ReactNode } from 'react';
import Link from 'next/link';  // Import Link from Next.js
import Image from 'next/image'; // Import Image from Next.js
import '../styles/globals.css';  // Correct import path to global styles

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/">
            <Image 
              src="/logo.svg" 
              alt="Electron Logo" 
              width={200} 
              height={100} 
            />
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
