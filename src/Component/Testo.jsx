/** @format */

import React, { Component } from "react";
import { axios } from "./axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../Css/test.css";

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
        // console.log(response.data.response.data);
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
            <div className='caro' key={imp.id}>
              <div className='overlay'>
                <h3 className='name'>{imp.instructor_name}</h3>
                <div>
                  <img src={imp.image_url} className='photo rounded' />
                  <h4 className='title p-5'>{imp.instructor_title}</h4>
                </div>
              </div>
              <div key={imp.id} className='item'>
                <img src={imp.image_url} className='photo' />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
