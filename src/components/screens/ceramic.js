import React from "react";
import image1 from "./images/cera1.jpeg"
import image2 from "./images/cera2.jpeg"
import image3 from "./images/cera3.jpeg"
import image4 from "./images/cera4.jpeg"
import image5 from "./images/cera5.jpeg"
import image6 from "./images/cera6.jpeg"
import image7 from "./images/cera7.jpeg"


function Ceramic(props) {
  
  return (
    <div className="draggable">
      <div className="pop-up resize">
        <span  onClick={() => {props.eventHandler("ceramic")}}>X</span>
        <div className="pop-up-content illustration">
        <h4>Nature Inspired and Judaica Ceramic</h4> 

        After a long day of code writing in front of the screen, Adi enjoys the tangible craft of sculpting. Her works are inspired by Berlin’s nature and Judaica ceremonial art, which belongs to her jewish roots. 
        <br /><br />
        <img alt="comic-1" className="pop-img pop-img comic-img" src={image3} />
        <img alt="comic-1" className="pop-img pop-img comic-img" src={image4} />
       <hr />
        <img alt="comic-1" className="pop-img comic-img2" src={image1} />
        <img alt="comic-2" className="pop-img comic-img2" src={image2} />
        <hr />

        <img alt="comic-1" className="pop-img pop-img comic-img" src={image5} />
        <img alt="comic-1" className="pop-img pop-img comic-img" src={image6} />
        <hr />

        <img alt="comic-1" className="pop-img pop-img comic-img" src={image7} />

        </div>
      </div>
    </div>
  );
}

export default Ceramic;
