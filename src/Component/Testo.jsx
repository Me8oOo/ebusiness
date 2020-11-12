/** @format */

import React, { Component, Link, Route, Switch } from "react";
import { axios } from "./axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled, { css } from "styled-components";
import "./test.css";

// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { FaQuoteRight } from "react-icons/fa";

export class Testo extends Component {
  state = {
    persons: [],
  };

  async componentDidMount() {
    await axios
      .get("/api/instructors")
      .then((response) => {
        this.setState({ persons: response.data.response.data });
        // console.log(response.data.response.data[5]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getusers() {
    this.getAllPostsFromApi();
  }

  render() {
    let persons = [];
    persons = this.state.data;

    return (
      <div className='hola'>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
          showDots={false}
        >
          {this.state.persons.map((imp) => (
            <div className='caro'>
              <div>
                <div key={imp.id} className='item'>
                  <img src={imp.image_url} />
                  <div>
                    <h3>{imp.instructor_name}</h3>
                  </div>
                  <div>
                    <h4>{imp.instructor_title}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
