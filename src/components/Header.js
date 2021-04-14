import React, { Component } from "react";
import "./Header.sass";
import wroclaw1 from "../img/wroclaw1.jpg";
import wroclaw2 from "../img/wroclaw2.jpg";
import wroclaw3 from "../img/wroclaw3.jpg";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiSunset, FiSunrise } from "react-icons/fi";

class Header extends Component {
  state = {
    temperature: "",
    sunrise: "",
    sunset: "",
    activeElement: 0,
    backgroundImage: wroclaw1,
  };

  backgroundImage = [wroclaw1, wroclaw2, wroclaw3];
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
    this.backgroundInterval = setInterval(() => {
      let activeElement = this.state.activeElement;
      activeElement++;
      if (activeElement === this.backgroundImage.length) activeElement = 0;
      const backgroundImage = this.backgroundImage[activeElement];
      this.setState({
        activeElement,
        backgroundImage,
      });
    }, 5000);
  }

  render() {
    const { temperature, sunrise, sunset } = this.state;

    return (
      <header>
        <img src={this.state.backgroundImage} alt="wroclaw" />
        <div className="header">
          <h2>welcome in wroclaw</h2>
          <aside className="cityInfo">
            <p>
              <FaTemperatureHigh /> {temperature}
            </p>
            <p>
              <FiSunrise /> {sunrise}
            </p>
            <p>
              <FiSunset /> {sunset}
            </p>
          </aside>
        </div>
      </header>
    );
  }
}

export default Header;
