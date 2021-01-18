import dayImg from "../images/day_image.svg";
import nightImg from "../images/night_image.svg";

const styles = {
  WeatherCard: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    background: "white",
    boxShadow: "0 0 15px 1px rgba(0, 0, 0, 0.4)",
    height: "75vh",
    width: "100%",
    borderRadius: "50px",
    overflow: "hidden",
    alignSelf: "center",
    "&:before": {
      content: '""',
      background: (props) =>
        props.cityDetails.weather[0].icon.includes("d")
          ? `url(${dayImg}) top center/cover`
          : `url(${nightImg}) top center/cover`,
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "50%",
      opacity: "0.7",
    },
    "&:hover div:nth-child(3)": {
      opacity: "1",
    },
    "&:hover": {
      "&:after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        background: "rgba(0,0,0,0.7)",
      },
    },
  },

  weatherDetails: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    bottom: "3rem",
    width: "100%",
  },
  cityName: {
    position: "absolute",
    top: "20px",
  },
  temperatures: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: "2rem",
  },
  tempCurrent: {
    fontSize: "3rem",
  },
  minMax: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  addButton: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    textAlign: "center",
    opacity: "0",
    transition: "opacity 0.1s ease-in-out",
    zIndex: "22",
  },
};

export default styles;
