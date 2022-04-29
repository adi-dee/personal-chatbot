import React from "react";

function Design(props) {
  
  return (
    <div className="draggable">
      <div className="pop-up resize">
        <span  onClick={() => {props.eventHandler("design")}}>X</span>
        <div className="pop-up-content design">
        <a href="http://adissun.com/design.html" target="_blank">
            http://adissun.com/design.html
        </a>
        </div>
      </div>
    </div>
  );
}

export default Design;
