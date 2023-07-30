import React from 'react'
import "./Hero.css"
import {Join} from "../../components";

const hero = () => {

   const joinPropsH = {
     fontSize: "1.5rem",
     color: "#FFF",
     fontFamily: "DM Sans",
     fontStyle: "normal",
     fontWeight: "400",
     lineHeight: "2.5rem",
     letterSpacing: "-0.045rem",
   };
  return (
    <header>
      <div className='big-cont'>
        <div className='wrapper'>
          <div className='intro-text'>
            <h1>Be better at DSA & CP</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </h3>
          </div>
          <div className='btns'>
            <a href='#' className='Join-btn'>
              Join now{" "}
            </a>
            <a href='#' className='View-btn'>
              View curriculum{" "}
            </a>
          </div>
          <div className='box-list'>
            <Join {...joinPropsH} content='Lorem ipsum dolor sit amet' />
            <Join {...joinPropsH} content='Lorem ipsum dolor sit amet' />
            <Join {...joinPropsH} content='Lorem ipsum dolor sit amet' />
            <Join {...joinPropsH} content='Lorem ipsum dolor sit amet' />
          </div>
        </div>

        <div className='logo-algo'></div>
      </div>
    </header>
  );
}

export default hero