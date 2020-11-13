/** @format */

import React, { Component, useState, useRef } from "react";
import { axios } from "./axios";

import styled, { css } from "styled-components";
import "../Css/Student.css";
import Carousel from "nuka-carousel";

// import { Button, Overlay, FormControl, ControlLabel } from "react-bootstrap";

class Student extends React.Component {
  state = {
    students: [],
  };

  async componentDidMount() {
    await axios
      .get("/api/testamonials")
      .then((response) => {
        this.setState({ students: response.data.response.data });
        // console.log(response.data.response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getusers() {
    this.componentDidMount();
  }
  render() {
    return (
      <div className='section-center'>
        <Carousel
          slideIndex={this.state.slideIndex}
          afterSlide={(slideIndex) => this.setState({ slideIndex })}
        >
          {this.state.students.map((test) => (
            <div className='caro' key={test.id}>
              <div>
                <div className='container'>
                  <img src={test.image_url} className='pics' />
                  <div>
                    <h3 className='name'>{test.student_name}</h3>
                  </div>
                  <div className='location'>
                    <h3>{test.student_location}</h3>
                  </div>
                  <div>
                    <h4 className='text'>{test.student_testamonial}</h4>
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

export default Student;
