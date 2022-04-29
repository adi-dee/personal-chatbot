import React from "react";
import image from "./images/game2.png"

function Game(props) {
  
  return (
    <div className="draggable">
      <div className="pop-up resize">
        <span  onClick={() => {props.eventHandler("game")}}>X</span>
        <div className="pop-up-content game">
        <h3>Escape my room</h3> 
        <a href="http://adissun.com" target="_blank">http://adissun.com/room</a>
        <p><b>An audiovisual click-and-point HTML / Javascript game </b><br />
         and a representation of Adi’s digital illustrated room, which reveal her illustrations to the viewer by the room escape game genre roles. Adi, a child of the 90s, grew up playing online flash games and was inspired by the genre, she also started learning code in order to be able to make her own version of these games.
        The viewer is welcome to click around, solve the puzzles and reveal all the small details and hints that hide in the screen.
        </p><br />
      <a href="http://adissun.com/room" target="_blank">
        <img className="game-img" alt="adi-room" src={image} />
      </a>
        </div>
      </div>
    </div>
  );
}

export default Game;
