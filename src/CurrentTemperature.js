import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  return (
    <p className="CurrentTemperature">
      31°
      <span className="Units">
        <a href="#" id="celsius-link">
          C|
        </a>

        <span className="Units">
          <a href="#" id="farenheit-link">
            F
          </a>
        </span>
      </span>
    </p>
  );
}
