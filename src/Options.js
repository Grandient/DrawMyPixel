import { GithubPicker } from 'react-color';
import {Button, Message} from 'semantic-ui-react';
import React from 'react';
import styled from 'styled-components';
import { OPTIONS, COLORS, BASECOLOR } from './Constants';

export function Options(props){
    return (
      <Message className="Options">
        <GithubPicker colors={COLORS} style={{width: "20vw"}} onChange={(color) => props.setColor(color.hex)}/>
        <SelectorGrid option={props.option} setOption={props.setOption}/>
        <BoardGrid/>
        <SelectedColor color={props.color}/>
      </Message>
    )
  }

export const SelectedDiv = styled.div`
  width: ${props => props.size + "vw"};
  padding-bottom: ${props => props.size + "vw"};
  background: ${props => props.color};
  border: 2px solid grey;
`

function SelectedColor(props){
  return (
    <Message style={{width: "7vw"}}>
      SELECTED: 
      <SelectedDiv size={5} color={props.color}>
      </SelectedDiv>
    </Message>
  )
}

function BoardGrid(props){ 
  return (
    <Message style={{width: "20vw"}}>
      <Message.Header>Board Options</Message.Header>
      <Button>Empty</Button>
      <Button>Redo</Button>
      <Button>Undo</Button>
      <Button>Rotate</Button>
    </Message>
  )
}

function SelectorGrid(props){ 
  return (
    <Message style={{width: "20vw"}}>
      <Message.Header>Selector Options</Message.Header>
      {props.option == OPTIONS.ERASE ? <Button active onClick={() => props.setOption(OPTIONS.ERASE)}>Erase</Button> : <Button onClick={() => props.setOption(OPTIONS.ERASE)}>Erase</Button>}
      {props.option == OPTIONS.FILL ? <Button active onClick={() => props.setOption(OPTIONS.FILL)}>Fill</Button> : <Button onClick={() => props.setOption(OPTIONS.FILL)}>Fill</Button>}
      {props.option == OPTIONS.BRUSH ? <Button active onClick={() => props.setOption(OPTIONS.BRUSH)}>Brush</Button> : <Button onClick={() => props.setOption(OPTIONS.BRUSH)}>Brush</Button>}
      {props.option == OPTIONS.DROPPER ? <Button active onClick={() => props.setOption(OPTIONS.DROPPER)}>Dropper</Button> : <Button onClick={() => props.setOption(OPTIONS.DROPPER)}>Dropper</Button>}
    </Message>
  )
}