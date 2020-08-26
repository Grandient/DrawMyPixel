import React, {useState} from 'react';
import './App.css';
import { GithubPicker } from 'react-color';
import {Button, Message, Input} from 'semantic-ui-react';
import {Grid} from './Grid';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import {Options} from './Options';
import USERS from './Users.json';
import MESSAGES from './Messages.json';
import { OPTIONS, COLORS, BASECOLOR } from './Constants';

function App() {
  let [color, setColor] = useState(BASECOLOR);
  let [messages, setMessages] = useState([]);
  let [users, setUsers] = useState([]);
  let [option, setOption] = useState(OPTIONS.BRUSH);

  return (
    <div className="App">
      <Options color={color} setColor={setColor} option={option} setOption={setOption}/>
      <Grid option={option} setColor={setColor} color={color}/>
      <Chat/>
      <Users/>
    </div>
  );
}

function Users(){
  return (
    <MessageList className="Users">
      {USERS.map((user, index) => (
          <User> <span style={{fontWeight: 'bold'}}>{user.name}</span></User>
      ))}
    </MessageList>
  )
}

export const MessageList = styled(Message)`
  margin: 0 !important;
  padding: 1vh !important;
`

export const ChatMessage = styled(Message)`
  margin: 0 !important;
  line-height: 1.5px !important;
`

export const User = styled(Message)`
  margin: 0 !important;
  line-height: 1.5px !important;
`

function Chat(){
  return (
    <MessageList className="Chat">
      <div className="message-list">
        {MESSAGES.map((message, index) => (
          <ChatMessage className="guess-message"> <span style={{fontWeight: 'bold'}}>{message.name}</span>: {message.message}</ChatMessage>
        ))}
      </div>
      <Input className="guess-input" placeholder="Enter your guess."/>
    </MessageList>
  )
}


export default App;
