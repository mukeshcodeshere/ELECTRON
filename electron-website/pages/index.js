import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Electron - Unlocking Global Access to India’s Private Markets</title>
        <meta name="description" content="Electron: Democratizing Access to India’s Private Markets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-900 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Electron</h1>
        <p className="mt-2">Unlocking Global Access to India’s Private Markets</p>
        <Link href="/about">
          <a className="mt-4 inline-block text-white bg-blue-500 py-2 px-4 rounded">Learn More</a>
        </Link>
      </header>

      <main className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Electron?</h2>
        <p className="text-lg">
          Electron enables global investors to participate in India's high-growth private equity, venture capital, and alternative assets.
        </p>
        <Link href="/contact">
          <a className="mt-8 inline-block text-blue-600 hover:text-blue-800">Contact Us</a>
        </Link>
      </main>

      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2024 Electron. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
