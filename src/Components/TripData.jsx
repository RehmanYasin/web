import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
