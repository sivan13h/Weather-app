import { Component } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import { withStyles } from "@material-ui/styles";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  Search: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },

  SearchForm: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    "& button": {
      marginLeft: "10px",
    },
  },
};

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: {
        cityDetails: "",
        currCity: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      city: {
        currCity: e.target.value,
        cityDetails: "",
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.getInfo(this.state.city.currCity);
  };

  getInfo = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7b9ec8ee7b2f3164505c0c0a89986b25`
      )
      .then((res) => {
        this.setState({
          city: { cityDetails: res.data, currCity: city },
        });
      })
      .catch((err) => {
        alert("city does not exist", err);
      });
  };

  addToSaved = (city) => {
    this.props.addToSaved(city);
  };

  render() {
    const { cityDetails } = this.state.city;
    const { classes } = this.props;
    return (
      <div className={classes.Search}>
        <h2>Show Me The Weather In:</h2>
        <form className={classes.SearchForm} onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-success">
            Go!
          </button>
        </form>

        {cityDetails && (
          <WeatherCard
            cityDetails={this.state.city.cityDetails}
            addToSaved={this.addToSaved}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Search);
