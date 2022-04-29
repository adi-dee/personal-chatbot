import React from "react";
import image from "./images/active.png"

function Text(props) {
  
  return (
    <div className="draggable">
      <div className="pop-up resize">
        <span  onClick={() => {props.eventHandler("text")}}>X</span>
        <div className="pop-up-content text">
        <h4>Activism</h4>
       <p> In Israel Adi spent her time fighting for social injustice and active against government corruption. In Berlin, Adi is helping integrate more women in tech roles. She instructs women and minority groups in the open tech school in Kreuzberg  (there she learned code herself), The community’s goal is to have more inclusivity in tech, and to enable technical skills to all, while using it for social projects.
        <br /><br />
        This year Adi organized in her work place a seminar for women/LGBTQIA refugees who are interested in learning programming and gave support to those who are interested of finding  a programming job in Berlin.  
        </p>
        <p>Adi summarizes research and writes articles about women in tech to magazines.
            She joined Taz as an host blog writer, here is her article about use of degrading semantic against women in tech:
        </p>
        <a href="https://blogs.taz.de/infrakulturen/work-your-magic/" target="_blank">
        “Work your magic”- click for the full article on Taz
        </a> 
       
        </div>
      </div>
    </div>
  );
}

export default Text;
