import React, { Component } from "react";
import "./Header.sass";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiSunset, FiSunrise } from "react-icons/fi";

class Header extends Component {
  state = {
    temperature: "",
    sunrise: "",
    sunset: "",
  };

  API_key = "c4c8854fb0426dd04df7f7f0d3bab41c";
  API_cityName = "Wroclaw";
  API = `http://api.openweathermap.org/data/2.5/weather?q=${this.API_cityName}&appid=${this.API_key}&units=metric`;

  componentDidMount() {
    fetch(this.API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const temperature = Math.round(data.main.temp);
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        this.setState({
          temperature,
          sunrise,
          sunset,
        });
      });
  }
  render() {
    const { temperature, sunrise, sunset } = this.state;

    return (
      <header>
        <div className="header">
          <h2>welcome in wroclaw</h2>
          <aside className="cityInfo">
            <p>
              <FaTemperatureHigh />
              {temperature}
            </p>
            <p>
              <FiSunrise />
              {sunrise}
            </p>
            <p>
              <FiSunset />
              {sunset}
            </p>
          </aside>
        </div>
      </header>
    );
  }
}

export default Header;
