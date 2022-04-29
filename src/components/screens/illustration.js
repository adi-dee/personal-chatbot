import React from "react";
import image1 from "./images/comic1.png"
import image2 from "./images/comic2.png"
import image3 from "./images/comic3.png"

function Illustration(props) {
  
  return (
    <div className="draggable">
      <div className="pop-up resize">
        <span  onClick={() => {props.eventHandler("illustration")}}>X</span>
        <div className="pop-up-content illustration">
        <h4>Web Comics - Infinite Scroll</h4> 
        <a href="http://adissun.com/comics" target="_blank">
        http://adissun.com/comics</a>

        <p>
        <b>Infinite scroll </b> 
         is another digital media experimental artwork by Adi. It is an online comic that combines animation and allows user interaction by scroll and mouse event. The comics’ name, Infinite scroll, is named after a computer science concept, which enables the user of social media apps to scroll down and get infinite content, similar to how a slot machine creates a sensation of rush and an addictive behavior for the user. Infinite scroll is also the title of the comics.
        <br />
          <a href="http://adissun.com/comics" target="_blank"><img alt="infinite-scroll" className="comic-img1" src={image3} /></a>
            The comic is a three part story, taking place in the past, present and future.
            It is based on the tale “the mechanical bird” by Edgar Allan Pho. Although it was written before the industrial age, it captures as an accurate metaphor for the human tendency to replace real life’s joy with quick artificial satisfaction.
        </p>
        <img alt="comic-1" className="pop-img comic-img2" src={image1} />
        <img alt="comic-2" className="pop-img comic-img2" src={image2} />
            <p>
              Adi wrote the story's adaptation, illustrated the visual and additionally programmed the platform using the programming language Javascript in a way which enabled scrolling the comics in an interactive way.
            </p>

        </div>
      </div>
    </div>
  );
}

export default Illustration;
