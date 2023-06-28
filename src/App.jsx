import "./styles.css";

import { Route, Routes, useNavigate } from "react-router-dom";

import About from "./routes/About";
import BookCarPage from "./routes/BookCarPage";
import Contact from "./routes/Contact";
import FeedbackPage from "./routes/FeedbackPage";
import GenuineAccessories from "./routes/GenuineAccessories";
import GenuineOil from "./routes/GenuineOil";
import GenuineParts from "./routes/GenuineParts";
import Home from "./routes/Home";
import LoginPage from "./routes/LoginPage";
import PartsPage from "./routes/PartsPage";
import Service from "./routes/Service";
import SignupPage from "./routes/SignupPage";
import SteeringWheel from "./Components/SteeringWheel";
import { useState } from "react";

export default function App() {
  const [isBookCarOpen, setIsBookCarOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookCarClick = () => {
    setIsBookCarOpen(true);
    navigate("/bookcar");
  };

  const handlePartsClick = () => {
    setIsBookCarOpen(false);
    navigate("/parts");
  };

  const handleFeedbackClick = () => {
    setIsBookCarOpen(false);
    navigate("/feedback");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/parts" element={<PartsPage />} />
        {isBookCarOpen && <Route path="/bookcar" element={<BookCarPage />} />}
        <Route path="/parts/genuine-parts" element={<GenuineParts />} />
        <Route
          path="/parts/genuine-accessories"
          element={<GenuineAccessories />}
        />
        <Route path="/parts/genuine-oil" element={<GenuineOil />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
      <SteeringWheel
        onBookCarClick={handleBookCarClick}
        onPartsClick={handlePartsClick}
        onFeedbackClick={handleFeedbackClick}
      />
    </div>
  );
}
