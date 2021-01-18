import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Search from "./Search";
import Favorites from "./Favorites";
import NavigationBar from "./NavigationBar";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedCities: JSON.parse(window.localStorage.getItem("savedCities")) || [],
    };
    this.addToSaved = this.addToSaved.bind(this);
    this.removeCity = this.removeCity.bind(this);
  }
  async addToSaved(newCity) {
    if (this.state.savedCities.some((city) => city.name === newCity.name)) {
      alert("This city already exists in favorites!");
    } else {
      await this.setState({
        savedCities: [...this.state.savedCities, newCity],
      });
      window.localStorage.setItem(
        "savedCities",
        JSON.stringify(this.state.savedCities)
      );
    }
  }
  async removeCity(id) {
    await this.setState({
      savedCities: this.state.savedCities.filter((city) => city.name !== id),
    });
    window.localStorage.setItem(
      "savedCities",
      JSON.stringify(this.state.savedCities)
    );
  }
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Favorites
                cities={this.state.savedCities}
                removeCity={this.removeCity}
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => <Search addToSaved={this.addToSaved} />}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}
