import CityName from "./CityName";
import LastUpdated from "./LastUpdated";
import WeatherImage from "./WeatherImage";
import CurrentTemperature from "./CurrentTemperature";
import WeatherDescription from "./WeatherDescription";
import CityForm from "./CityForm.js";
import "./WeatherBackground.css";

export default function WeatherBackground() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <span
                className="current-city-pin"
                role="img"
                aria-label="pin emoji"
              >
                📍
              </span>
              <CityName />
              <LastUpdated />
              <WeatherImage />
              <CurrentTemperature />
              <WeatherDescription />
              <CityForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
