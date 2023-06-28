import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import HomeImg1 from "../assets/white.jpg";
import HomeImg2 from "../assets/swace.jpg";
import HomeImg3 from "../assets/canal.jpg";
import Navbar from "../Components/Navbar";
import Slider from "react-slick";
import Trip from "../Components/Trip";

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <Navbar />
      <Slider {...sliderSettings}>
        <div>
          <Hero
            cName="hero"
            heroImg={HomeImg1}
            title="Welcome To Suzuki Canal Motors"
            text="Choose your car"
            subtitle="hide"
            buttonText="Car Booking"
            url="/bookcar" // Update the URL to the bookCar page
            btnClass="show"
          />
        </div>
        <div>
          <Hero
            cName="hero"
            heroImg={HomeImg2}
            title="Welcome To Suzuki Canal Motors"
            text="Choose your car"
            buttonText="Car Booking"
            url="/bookcar" // Update the URL to the bookCar page
            btnClass="show"
          />
        </div>
        <div>
          <Hero
            cName="hero"
            heroImg={HomeImg3}
            title="Welcome To Suzuki Canal Motors"
            text="Choose your car"
            buttonText="Car Booking"
            url="/bookcar" // Update the URL to the bookCar page
            btnClass="show"
          />
        </div>
      </Slider>
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
