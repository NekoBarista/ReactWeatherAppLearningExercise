import "./styles.css";
import CityName from "./CityName";
import LastUpdated from "./LastUpdated";
import WeatherImage from "./WeatherImage";
import CurrentTemperature from "./CurrentTemperature";
import Units from "./Units";
import WeatherDescription from "./WeatherDescription";
import CityForm from "./CityForm.js";

export default function WeatherBackground() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <div className="card">
            <div className="card-body">
              <span id="current-city-pin" role="img" aria-label="pin emoji">
                📍
              </span>
              <CityName />
              <LastUpdated />
              <WeatherImage />
              <CurrentTemperature />
              <Units />
              <WeatherDescription />
              <CityForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
