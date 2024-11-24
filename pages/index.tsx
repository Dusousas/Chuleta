import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Galery from "@/components/Galery";
import Main from "@/components/Main";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Menu />
      <Galery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
