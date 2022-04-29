import React from "react";
import image1 from "./comics.gif"
import image3 from "./comics3.jpeg"
import image5 from "./illu1.jpg"
import image6 from "./illu2.jpg"
import image7 from "./illu3.jpg"


function Comics(props) {
  
  return (
    <div className="draggable">
      <div className="pop-up resize">
        <span  onClick={() => {props.eventHandler("comics")}}>X</span>
        <div className="pop-up-content comics">
        <h3>Comic Strips and illustrations</h3> 
        <p>Adi's first love is illustrating and writing stories. She published her first comic book in 2014 and won 1st place at the Berlin Comic Competition in 2017.
          Here is a glimpse of her recent selected illustrations and comic strips
        </p>

        <h4>Meta Verse Woman</h4>
          <p>Drawn with pencil and digital coloring, inspired by the meta verse</p>
          <img className="pop-img comic-img" alt="francesca" src={image6} />
          <br />
          <img className="pop-img comic-img" alt="francesca" src={image5} />
          <hr />

          <h4>Hearts of Palm</h4>
          <a href="https://en.calameo.com/read/003270825f2166aef04b2" target="_blank">
          Click here to see full comics PDF</a>
          <p>Full length graphic novel illustrated and written by me, inspired by the time I lived in jerusalem. The controversial city is historically famous for fanatic wars in the name of god. A jewish underground group attacked and killed soldiers of the british colonial army in the 40’s, on the king david hotel army base. This days when similar actions, when done from the Palestinian side, are called out as terror attacks. After learning about israel historical events, I come to ask, who is a freedom warrier and who is a terrorist. </p>
          <a href="https://en.calameo.com/read/003270825f2166aef04b2" target="_blank">
            <img className="pop-img comic-img" alt="palm-hearts" src={image1} />
          </a>  
          <hr />
        <br />

        <h4>Personal Comcis</h4>
        <a href="https://cargocollective.com/adiaviram/Personal-comics-strips" target="_blank">
        Personal comic strips</a>
        <h4>"In the office"</h4>
        <p>Inspired by the absurdity of the need to work while the world order is collapsing</p>
        <img className="pop-img comic-img" alt="francesca" src={image7} />

        <hr />
        <br />


          <h4>Nightmares-comic and poem</h4>
          <a href="https://cargocollective.com/adiaviram/Nightmares-Short-comics" target="_blank">
          Click here to see full comics</a>

          <p>A poem and illustretion for a Nightmares themed book collection;</p>

          <br />
          <a href="https://cargocollective.com/adiaviram/Nightmares-Short-comics" target="_blank">
          <img className="pop-img comic-img"  alt="nightmares" src={image3} />
          </a>

        <br />
        </div>
      </div>
    </div>
  );
}

export default Comics;
