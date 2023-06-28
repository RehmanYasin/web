import "./DestinationStyles.css";

const DestinationData = (props) => {
  return (
    <div className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img alt="img" src={props.img1} />
      </div>
    </div>
  );
};

export default DestinationData;
