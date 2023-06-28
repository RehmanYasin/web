import ContactImg from "../assets/Contact-us-banner.jpg";
import Contactus from "../Components/Contactus";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact Us"
        btnClass="hide"
      />
      <Contactus />
      <Footer />
    </>
  );
}

export default Contact;
