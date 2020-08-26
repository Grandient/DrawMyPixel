import styled from 'styled-components';
import React from 'react';
import { OPTIONS, BASECOLOR } from './Constants';

export const CellDiv = styled.div`
  width: ${props => props.size + "%"};
  padding-bottom: ${props => props.size + "%"};
  background: ${props => props.background};
`
export function Cell(props){
  return (
    <CellDiv x={props.x} y={props.y} className="cell" size={props.size} background={props.background} 
      onClick={() => selectorClick(props)} 
      onMouseUp={() => props.setMouseDown(false)}
      onMouseDown={() => props.setMouseDown(true)} 
      onMouseEnter={() => {
        let position = {x: props.x, y: props.y};
        props.setCurrentCell(position);
      }}>
    </CellDiv>
  )
}

function selectorClick(props) {
    switch (props.option) {
        case OPTIONS.ERASE:
            eraseClick(props.x, props.y, props.cells, props.setCells)
            break;
        case OPTIONS.FILL:
            let oldColor = props.cells[props.x][props.y].background;
            let tempMatrix = [...props.cells];
            fillClick(props.x, props.y, tempMatrix, props.color, oldColor, props.dimensions.width, props.dimensions.height)
            props.setCells(tempMatrix);
            break;
        case OPTIONS.BRUSH:
            brushClick(props.x, props.y, props.cells, props.setCells, props.color);
            break;
        case OPTIONS.DROPPER:
            dropperClick(props.x, props.y, props.cells, props.setColor)
            break;
    }
}

function brushClick(x, y, cells, setCells, color){
  let temp = [...cells];
  let tempElem = temp[x][y];
  tempElem = {...tempElem, background: color}
  temp[x][y] = tempElem;
  setCells(temp);
}


function fillClick(x, y, cells, color, oldColor, width, height) {
    if (x < 0 || x >= width || y < 0 || y >= height){
        return; 
    }
    let element = cells[x][y];
    if(element.background != oldColor){
        return;
    }
    if(element.background == color){
        return;
    }
    element.background = color;
    fillClick(x+1, y, cells, color, oldColor, width, height);
    fillClick(x-1, y, cells, color, oldColor, width, height);
    fillClick(x, y+1, cells, color, oldColor, width, height);
    fillClick(x, y-1, cells, color, oldColor, width, height);
}

function eraseClick(x, y, cells, setCells) {
    let temp = [...cells];
    let tempElem = temp[x][y];
    tempElem = { ...tempElem, background: BASECOLOR };
    temp[x][y] = tempElem;
    setCells(temp);
}

function dropperClick(x, y, cells, setColor) {
    let element = cells[x][y];
    let color = element.background;
    setColor(color);
}


