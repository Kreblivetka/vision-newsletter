import "./SocialMedia.css";
import fb1 from "../../assets/socialmedia/facebook1.png";
import fb2 from "../../assets/socialmedia/facebook2.svg";
import inst1 from "../../assets/socialmedia/instagram1.png";
import inst2 from "../../assets/socialmedia/insta2.svg";
import tw1 from "../../assets/socialmedia/twitter1.png";
import tw2 from "../../assets/socialmedia/twitter2.svg";
import yt1 from "../../assets/socialmedia/youtube1.png";
import yt2 from "../../assets/socialmedia/youtube2.svg";
import React, { Fragment, useState } from "react";

const icons = [
  { name: "facebook", hovered: fb2, normal: fb1 },
  { name: "instagram", hovered: inst2, normal: inst1 },
  { name: "twitter", hovered: tw2, normal: tw1 },
  { name: "youtube", hovered: yt2, normal: yt1 },
];

function SocialMedia() {
  const [hoveredIcons, setHoveredIcons] = useState(
    Array(icons.length).fill(false)
  );

  const handleMouseOver = (index) => {
    setHoveredIcons(hoveredIcons.map((val, i) => i === index));
  };

  const handleMouseOut = () => {
    setHoveredIcons(Array(icons.length).fill(false));
  };

  return (
    <Fragment>
      <div className="limit_line"/>
      <div className="social">
        {icons.map((icon, index) => (
          <img
            key={icon.name}
            className={`social-icon`}
            src={hoveredIcons[index] ? icon.hovered : icon.normal}
            alt={icon.name}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default SocialMedia;