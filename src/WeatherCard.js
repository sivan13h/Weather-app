import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./styles/WeatherCardStyles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

class WeatherCard extends Component {
  handleClick = () => {
    this.props.addToSaved(this.props.cityDetails);
  };

  render() {
    const { classes, cityDetails } = this.props;

    return (
      <div className={classes.WeatherCard}>
        <h2 className={classes.cityName}>{cityDetails.name.toUpperCase()}</h2>
        <div className={classes.weatherDetails}>
          <div className={classes.temperatures}>
            <div className={classes.tempCurrent}>
              {Math.floor(cityDetails.main.temp)} &#8451;
            </div>
            <div className={classes.minMax}>
              <div>
                Max
                <ArrowUpwardIcon />
                {Math.floor(cityDetails.main.temp_max)}
              </div>
              <div>
                Min
                <ArrowDownwardIcon />
                {Math.floor(cityDetails.main.temp_min)}
              </div>
            </div>
          </div>

          <p>Wind: {cityDetails.wind.speed} km/h</p>
          <img
            src={`http://openweathermap.org/img/wn/${cityDetails.weather[0].icon}@2x.png`}
            alt="weather-icon"
            className={classes.icon}
          />
          <div>{cityDetails.weather[0].description}</div>
        </div>
        <div className={classes.addButton}>
          <button className="btn btn-success" onClick={this.handleClick}>
            Add To Favorites
          </button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(WeatherCard);
