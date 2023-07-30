import React from 'react'
import "./Join.css"
// import "./herofonts.css"
// import "./infofonts.css"



const Join = (props) => {
    const {
    fontSize,
    color,
    fontFamily,
    fontStyle,
    fontWeight,
    lineHeight,
    letterSpacing,
    content
  } = props;

  const textStyle = {
    fontSize: fontSize,
    color: color,
    fontFamily: fontFamily,
    fontStyle: fontStyle,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
  };

  return (
    <>
    <div className="text-wrapper">
    <article className="rect-out">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="63" height="63" rx="7.5" stroke="url(#paint0_linear_222_31)"/>
<defs>
<linearGradient id="paint0_linear_222_31" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
<stop stopColor="#CFF1FF"/>
<stop offset="1" stopColor="#2D5666"/>
</linearGradient>
</defs>
</svg>

    </article>
    <div className="rect-text"><h3 style={textStyle}>{content}</h3>
    </div>
    </div>
    </>
  )
}

export default Join