// src/app/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Welcome to Your Company</h2>
          <p className="text-lg">We provide innovative solutions for your business.</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
