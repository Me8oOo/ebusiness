/** @format */

import React, { Component } from "react";
import { axios } from "./axios";
import styled, { css } from "styled-components";

export function Settings() {
  async function getSettings() {
    try {
      const response = await axios.get("/api/settings");

      return (document.title = response.data.response.data["site.title"]);
    } catch (error) {
      console.error(error);
    }
  }
  return <div onLoad={getSettings()}> </div>;
}

export class Logo extends Component {
  state = {
    Logo: "",
  };

  async componentDidMount() {
    const response = await axios.get("/api/settings");
    this.setState({ Logo: response.data.response.data["site.logo"] });
  }

  render() {
    const logo = this.state.Logo;
    return (
      <a>
        <img className='logo' alt='logo' href='/' src={logo} />
      </a>
    );
  }
}
