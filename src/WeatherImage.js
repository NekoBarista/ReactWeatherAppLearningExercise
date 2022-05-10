import React from "react";
import "./WeatherImage.css";

export default function WeatherImage() {
  return (
    <div id="weather-image">
      <img src={"/images/summer.png"} alt="sunny icon" />
    </div>
  );
}
