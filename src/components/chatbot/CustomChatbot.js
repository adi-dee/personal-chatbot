import React from "react";
import ChatBot from "react-simple-chatbot";

function CustomChatbot(props) {

        const style = {
            backgroundColor: 'none',
            color: 'black'
        };
        
        const steps = [
            {
               id: "Greet",
               message: "Welcome, To the new and improved, 2022 version of ADI - Artificially Designed Intelligence",
               trigger: "intro"
            },
            {
                id: "intro",
                message: "Adi built me to help you view her portfolio in ease. You can also skip my assistant and use the menu on the right side ➜ to view it independently",
                trigger: "Ask Name"
             },
            {
               id: "Ask Name",
               message: "May I ask please, what is your name?",
               trigger: "Waiting user input for name"
            },
            {
               id: "Waiting user input for name",
               user: true,
               trigger: "ask about game"
            },
            {
               id: "ask about game",
               delay: 4000,
               message: "Hello {previousValue}! lets start the tour! Do you like online games? If so, please visit Adi's digital room and play her first illustrated game",
               trigger: "show game"
            },
            {
               id: "show game",
               options: [
                  {
                     value: "show game",
                     label: "Read and play Adi's game",
                     trigger: () => {
                         props.eventHandler("game");
                         return "ask about web comics"
                    }}
                        ]
            },
            {
               id: "ask about web comics",
               delay: 4000,
               message: "Adi illustrated and developed a scrolling web-comics demo. It's about the threats of technologies. As a bot, I find that offensive.",
               trigger: "show web comics"
            },
            {
               id: "show web comics",
               options: [
                          {
                            value: true,
                            label: "Show me more about Web-Comics",
                            trigger: () => {
                               props.eventHandler("illustration");
                               return "show comics"  
                             }
                          }
                        ]
            },
            {
               id: "show comics",
               message: "Adi won's 1st place at Berlin comics festival, look at comics and illustration she recently made!",
               trigger: "Displaying comics options"
            },
            {
               id: "Displaying comics options",
               options: [
                 {
                            value: "comics",
                            label: "I want to more comics!",
                            trigger: () => {
                                props.eventHandler("comics");
                                return "joke"
                           }}
                        ]
            },
            {
               id: "joke",
               delay: 4000,
               message: "Although I am binary, I preffer to not use any pronouns. Ha Ha.. let's continue..",
               trigger: "ceramic intro"
            },
            {
               id: "ceramic intro",
               message: "After long hours of working infront of the computer Adi likes to create ceramic sculptures inspired by Berlin's nature and judaica. Please have a look!",
               trigger: "ceramic show"
            },
     
            {
               id: "ceramic show",
               options: [
                          {
                            value: true,
                            label: "Look more at ceramic art",
                            trigger: () => {
                               props.eventHandler("ceramic");
                               return "feminist tech"  
                             }
                          }
                        ]
            },
            
            {
               id: "feminist tech",
               message: "Adi is a diversity and inclusion tech activist. She guides programming for women and minorities and writes texts on the subject, you can read more about it",
               trigger: "read more activist"
            },
     
            {
               id: "read more activist",
               options: [
                          {
                            value: true,
                            label: "Read more about her activism work",
                            trigger: () => {
                               props.eventHandler("text");
                               return "saying bye"  
                             }
                          }
                        ]
            },
             
            {
               id: "saying bye",
               message: "There is so much more to learn about Adi, more than what a simple bot can show. I would highly recommended to meet her in person, it's splendid!",
               trigger: "again"
            },
            {
               id: "again",
               message: "That's all for now, Would you like to repeat our conversation?",
               trigger: "almost done"
            },
     
     
            {
               id: "almost done",
               options: [
                          {
                            value: true,
                            label: "Yes, again please!",
                            trigger: "Greet"  
                             
                          },
                          { 
                            value: "false",
                            label: "No thanks, I have better things to do",
                            trigger: "Done"
                          } 
                        ]
            },
            {
                id: "Done",
                message: "So I guess it's a goodbye, auf wiedersehen",
                end: true
            }
    ];
    

  return <ChatBot 
  headerTitle="Speech Synthesis"
  speechSynthesis={{ enable: true, lang: 'en' }}
  steps={steps}   
  bubbleOptionStyle={{disply:"none"}}
  hideHeader={true}
  width={'500px'}
  height={'90vh'}
  style={style}
  hideUserAvatar={true}
  hideBotAvatar={true}
  className={'chat-bot'}
  contentStyle={{boxShadow: 'none'}}
  footerStyle= {{opcity: '0.4'}}
/>;
}
export default CustomChatbot;
