import React, { Component } from "react";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { withStyles } from "@material-ui/styles";
import { Button } from "react-bootstrap";

const styles = {
  Minicard: {
    background: " rgba(170, 220, 230, 0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
    height: "300px",
    boxShadow: "0 0 50px 1px rgba(0, 0, 0, 0.4)",
    marginBottom: "30px",
    "&:hover button": {
      opacity: "1",
    },
  },
  MinicardTitle: {
    fontSize: "1.5rem",
  },
  remove: {
    marginTop: "20px",
    opacity: "0",
    transition: "all 0.2s ease-in-out",
    "&:focus": {
      outline: "none",
    },
  },
};
class MiniCard extends Component {
  handleClick = () => {
    this.props.removeCity(this.props.id);
  };
  render() {
    const { cityDetails, classes } = this.props;
    return (
      <div className={classes.Minicard}>
        <h3 className={classes.MinicardTitle}>{cityDetails.name}</h3>
        <img
          src={`http://openweathermap.org/img/wn/${cityDetails.weather[0].icon}@2x.png`}
          alt="weather-icon"
        />
        <div>{Math.floor(cityDetails.main.temp)} &#8451;</div>
        <Button
          className={classes.remove}
          variant="outline-danger"
          onClick={this.handleClick}
        >
          <DeleteOutlineIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(MiniCard);
