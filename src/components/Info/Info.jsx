import React from "react";
import "./Info.css";
import { Join } from "../../components";
// import { InfoJoin } from "../../components";
// import "./infofonts.css"
const Info = () => {
  const joinProps = {
    fontSize: "1.5rem",
    color: "#FFF",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "2.5rem",
    letterSpacing: "-0.045rem",
  };

  const joinProps2 = {
    fontSize: "2rem",
    color: "#000",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "2.25rem",
    letterSpacing: "-0.06rem",
  };

  return (
    <header className='info-main'>
      <div className='wrappera'>
        <div className='intro-texta'>
          <h1>
            Invest in skills,<br></br>
            <font color='#05445E'>earn 10X</font> of what you paid.
          </h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h3>
        </div>
        <div className='box-lista'>
          <Join
            {...joinProps2}
            content='1.2 Cr/Year
highest fresher package'
          />
          <Join
            {...joinProps2}
            content='Multiple <100 Ranks
in kickstart last year'
          />
          <Join
            {...joinProps2}
            content='1000+ Offers
from top companies'
          />
          <Join
            {...joinProps2}
            content='Trusted by IITians
          for their career prep'
          />
        </div>
      </div>

      <div className='pricing'>
        <div className='big-price'>
          <h3 className='small-txt'>Premium Victory Batch</h3>
          <h6 className='striked-txt'>₹19,999</h6>
          <h5 className='final-txt'>₹13,999</h5>
        </div>
        <div className='price-text'>
          <Join {...joinProps} content='100+ Hrs Live Content' />
          <Join {...joinProps} content='50+ Hrs Contest' />
          <Join {...joinProps} content='500+ Problems' />
          <Join
            {...joinProps}
            content='Includes an interview bootcamp and access to a mentor network'
          />
          <Join
            {...joinProps}
            content='Enjoy access to our content for one year (paid extensions available)'
          />
          <Join
            {...joinProps}
            content='Flexible payment options, including no-cost EMI, are available.'
          />
        </div>
        <div className='join-btn'>
          <a href='#' className='join-price'>
            Join now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Info;
