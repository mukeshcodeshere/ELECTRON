// src/pages/about.tsx
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Your Company</title>
        <meta name="description" content="Learn more about Your Company" />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">We are a team of dedicated professionals, committed to delivering top-notch services to help your business thrive.</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
