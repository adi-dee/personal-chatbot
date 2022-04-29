import React, { Component } from "react";
import Pace from 'react-pace-progress'
import Comics from "../comics/comics";
import CustomChatbot from "../chatbot/CustomChatbot";
import Illustration from "../screens/illustration";
import Design from "../screens/design";
import Ceramic from "../screens/ceramic";
import Game from "../screens/game";
import Cv from "../screens/cv";
import Text from "../screens/text";



class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: false,
      cv: false,
      design: false,
      game: false,
      illustration: false,
      ceramic: false,
      text: false,
      isLoading: true,
      menu: false
        };
  }

  handelMenu = () => {
      this.setState({
        menu: !this.state.menu
      });
  }


  clickEventHandler = popUp => {
    if (popUp === "comics") {
      this.setState({
        comics: !this.state.comics
      });
    } else if (popUp === "game") {
      this.setState({
        comics: false,
        design: false,
        illustration: false,
        text:false,
        game: !this.state.game
      });
    } else if (popUp === "design") {
      this.setState({
        game: false,
        comics: false,
        illustration: false,
        text:false,
        design: !this.state.design
      });
     } else if (popUp === "illustration") {
        this.setState({
          design: false,
          game: false,
          comics: false,
          text:false,
          illustration: !this.state.illustration
        });
      } else if (popUp === "text") {
          this.setState({
            illustration: false,
            game: false,
            comics: false,
            illustration: false,
            text: !this.state.text
          });
    } else {
      this.setState({
        veggie: !this.state.veggie
      });
    }
  };

  render() {

    const comicsPopUp = this.state.comics && <Comics eventHandler={this.clickEventHandler} />;
    const illuPopUp = this.state.illustration && <Illustration eventHandler={this.clickEventHandler} />;
    const designPopUp = this.state.design && <Design eventHandler={this.clickEventHandler} />;
    const cvPopUp = this.state.cv && <Cv eventHandler={this.clickEventHandler} />;
    const textPopUp = this.state.text && <Text eventHandler={this.clickEventHandler} />;
    const gamePopUp = this.state.game && <Game eventHandler={this.clickEventHandler} />;
    const ceramicPopUp = this.state.ceramic && <Ceramic eventHandler={this.clickEventHandler} />;


       setTimeout(() => {
      this.setState({isLoading: false})
    }, 5000);

    return (
        <div className="react-wrapper">
      {this.state.isLoading ? 
        <div  className="load-screen">
          <div className="loader-wrapper">
           <Pace color="#40E0D0"/>
          </div> 
        </div>
  
        : 
        <>
        <CustomChatbot eventHandler={this.clickEventHandler} /> 
        { comicsPopUp }
        { illuPopUp }
        { designPopUp }
        { cvPopUp }
        { textPopUp }
        { gamePopUp }
        { ceramicPopUp }


         <div onClick={this.handelMenu}
         className={this.state.menu  ? "menu open" : "menu " }
         >
         <span>{this.state.menu  ? "ᐅ" : "ᐊ" } <span className="menu-title"> menu </span></span>
         <div>

          <ul>
            <li onClick={() => this.setState({ceramic: false, game: true,comics: false, illustration: false, text: false, cv: false})}>Game</li>
            <li onClick={() => this.setState({ceramic: false, illustration: true, game: false,comics: false, text: false, cv: false})}>Web-<br />Comic</li>
            <li onClick={() => this.setState({ceramic: false, comics: true, game: false, illustration: false, text: false, cv: false})}>Comics</li>
            <li onClick={() => this.setState({ceramic: false, text: true, illustration: false, game: false,comics: false, cv: false})}>Activism</li>
            <li onClick={() => this.setState({ceramic: true, text: false, illustration: false, game: false,comics: false, cv: false})}>Ceramics</li>
            <li className="cv-pop" onClick={() => this.setState({cv: true, illustration: false, game: false,comics: false, text: false })}>cv</li>
          </ul>
         </div>
         </div>
        </>
      }

      

        </div>
    );
  }
}

export default Screen;
