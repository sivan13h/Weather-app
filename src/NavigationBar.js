import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar className="mb-3" bg="light" style={{ width: "100%" }}>
        <NavLink className="navBrand" to="/search">
          Weather-App
        </NavLink>
        <Nav style={{ marginLeft: "30px" }}>
          <NavLink
            className="navLink"
            exact
            to="/search"
            style={{ marginRight: "10px" }}
          >
            Search
          </NavLink>

          <NavLink className="navLink" exact to="/">
            Favorites
          </NavLink>
        </Nav>
      </Navbar>
    );
  }
}
