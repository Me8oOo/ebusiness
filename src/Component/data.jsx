/** @format */
import React, { Component, useState, useRef } from "react";
import { axios } from "./axios";
import { Studentt } from "./Student";

class Student extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    await axios
      .get("/api/homepage")
      .then((response) => {
        this.setState({ students: response.data.response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let titles = [];
    titles = this.state;
    console.log(titles);

    return (
      <Studentt
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
export default Student;
