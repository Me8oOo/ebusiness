/** @format */

import React, { Component } from "react";
import styled, { css } from "styled-components";

const Content = styled.div`
  background-image: url(${(props) => props.img});
  padding: 150px 120px 150px 120px !important;
  position: relative;
  height: 80%;
  background-position: 50% 94%;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Wrapper = styled.section`
  padding: 4em;
  background-color: rgba(0, 0, 0, 0.794);
  opacity: 100%;
  color: whitesmoke !important ;
`;
const Button = styled.button`
  &:hover {
    border-radius: 3px;
    border: 2px solid blueviolet;
    background-color: rgba(0, 0, 0, 0);
  }
  background: blueviolet;
  border: 2px solid blueviolet;
  color: whitesmoke;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin: auto;
`;

const Lowertext = styled.div`
  color: white !important;
`;

export class HeroContent extends Component {
  createMarkup = (html) => {
    return { __html: `${html}` };
  };

  render() {
    return (
      <div className='jumbotron-fluid'>
        <Content img={this.props.image_url}>
          <div className='container'>
            <Wrapper className='hover'>
              <div className='row'>
                <div
                  className='col-md-12 mb-4 text-center'
                  dangerouslySetInnerHTML={this.createMarkup(
                    this.props.upper_row_text
                  )}
                ></div>

                <div
                  className='col-md-12 mb-2 text-center'
                  dangerouslySetInnerHTML={this.createMarkup(
                    this.props.main_text
                  )}
                ></div>

                <Lowertext
                  style={{ color: "white !important" }}
                  className='col-md-12 mb-4 text-center'
                  dangerouslySetInnerHTML={this.createMarkup(
                    this.props.lower_row_text
                  )}
                />
                <Button
                  href={this.props.button_url}
                  dangerouslySetInnerHTML={this.createMarkup(
                    this.props.button_text
                  )}
                />

                <div></div>
              </div>
            </Wrapper>
          </div>
        </Content>
      </div>
    );
  }
}
