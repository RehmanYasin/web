import "./HeroStyles.css";

import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <div className={props.cName}>
      <img alt="heroImg" src={props.heroImg} />
      <div className="hero-text">
        <div className="hero-content">
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
        <Link to={props.url} className={props.btnClass}>
          {props.buttonText}
        </Link>
      </div>
    </div>
  );
}

export default Hero;
