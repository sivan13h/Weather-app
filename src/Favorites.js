import React, { Component } from "react";
import MiniCard from "./MiniCard";

export default class Favorites extends Component {
  removeCity = (id) => {
    this.props.removeCity(id);
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center mb-4">Favorite Cities</h2>
        <div className="container">
          <div className="row justify-content-center">
            {this.props.cities.map((city) => (
              <div key={city.name} className=" col-sm-6 col-md-4 col-lg-3 ">
                <MiniCard
                  key={city.name}
                  id={city.name}
                  cityDetails={city}
                  removeCity={this.removeCity}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
