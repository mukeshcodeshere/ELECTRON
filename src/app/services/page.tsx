// src/pages/services.tsx
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services - Your Company</title>
        <meta name="description" content="Our Services at Your Company" />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <p className="text-lg">Explore the variety of services we offer to help your business grow.</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
