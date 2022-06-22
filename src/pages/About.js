import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Skye Jackson</div>
            <div className="brief_description">
            I am a rising junior computer science major at Spelman College in Atlanta, GA.
            I love reading, traveling, coding, and learning about new cultures. I am so excited
            to participate in the IBM Accelerate Program this Summer, and I am looking forward to
            networking and improving both my technical and professional skills.
            </div>
          </div>
        </div>
      </div>
    );
  }
}