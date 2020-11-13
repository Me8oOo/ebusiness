/** @format */

import React, { Component } from "react";
import { axios } from "./axios";
import "../Css/contact.css";

class Contactus extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/contact-us", this.state)
      .then((response) => {
        console.log(response.status);
        if (response.status == "200") {
          window.alert("Sent Successfully");
        }
      })
      .catch((errors) => {
        console.log(errors);
        window.location.reload();
      });
  };

  render() {
    const { name, email, company, subject, message } = this.state;

    return (
      <>
        <div>
          <hr />
        </div>
        <div className='container bg-blue col-6'>
          <div className='text-center'>
            <h2>Contact Us</h2>
          </div>
          <form onSubmit={this.handleSubmit} className='form-group'>
            <div className='input-group mb-3'>
              <input
                className='  form-control'
                type='text'
                onChange={this.changeHandler}
                name='name'
                value={name}
                ref={this.inputRef}
                placeholder='Enter Your Name'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                className='  form-control'
                type='text'
                onChange={this.changeHandler}
                name='email'
                value={email}
                placeholder='Enter Your Email'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                className=' form-control'
                type='text'
                onChange={this.changeHandler}
                name='company'
                value={company}
                placeholder='Enter Company Name'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                className=' form-control'
                type='text'
                onChange={this.changeHandler}
                name='subject'
                value={subject}
                placeholder='Enter Subject'
              />
            </div>
            <div className='input-group mb-3'>
              <textarea
                className='  form-control'
                name='message'
                onChange={this.changeHandler}
                value={message}
                placeholder='Enter Message'
              ></textarea>
            </div>
            <div className='text-center'>
              <input
                type='submit'
                value='Submit'
                className='btn btn-primary '
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default Contactus;
