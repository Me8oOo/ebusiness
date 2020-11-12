/** @format */

import React, { Component } from "react";
import { axios } from "../Component/axios";
import { HeroContent } from "./Hero";

class Hero extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    await axios
      .get("/api/homepage")
      .then((response) => {
        this.setState({ data: response.data.response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let titles = [];
    titles = this.state.data;

    return (
      <HeroContent
        upper_row_text={titles.upper_row_text}
        main_text={titles.main_text}
        lower_row_text={titles.lower_row_text}
        button_text={titles.button_text}
        button_url={titles.button_url}
        image_url={titles.image_url}
      />
    );
  }
}
export default Hero;
