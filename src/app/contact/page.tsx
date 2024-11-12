// src/pages/contact.tsx
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Your Company</title>
        <meta name="description" content="Contact Your Company" />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg">We’d love to hear from you! Reach out to us using the form below.</p>
          {/* You can add a contact form here */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
