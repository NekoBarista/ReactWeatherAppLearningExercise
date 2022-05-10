import React from "react";
import "./CityForm.css";
export default function CityForm() {
  return (
    <form id="city-form">
      <div className="form-group">
        <input type="text" placeholder="Enter a city" id="city-input" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
