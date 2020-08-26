import { OPTIONS, BASECOLOR } from './Constants';
export function selectorOver(option, mouseDown, cell, cells, setCells, color, setColor, dimensions) {
    if (mouseDown) {
        switch (option) {
            case OPTIONS.ERASE:
                eraseOver(cell, cells, setCells);
                break;
            case OPTIONS.FILL:
                let oldColor = cells[cell.x][cell.y].background;
                let tempMatrix = [...cells];
                fillOver(cell.x, cell.y, tempMatrix, color, oldColor, dimensions.width, dimensions.height);
                setCells(tempMatrix);
                break;
            case OPTIONS.BRUSH:
                brushOver(cell, cells, setCells, color);
                break;
            case OPTIONS.DROPPER:
                dropperOver(cell, cells, setColor);
                break;
        }
    }
}

function brushOver(cell, cells, setCells, color) {
    if (cell != null && cell != undefined) {
        let temp = [...cells];
        let tempElem = temp[cell.x][cell.y];
        tempElem = { ...tempElem, background: color };
        temp[cell.x][cell.y] = tempElem;
        setCells(temp);
    }
}

function fillOver(x, y, cells, color, oldColor, width, height) {
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
    fillOver(x+1, y, cells, color, oldColor, width, height);
    fillOver(x-1, y, cells, color, oldColor, width, height);
    fillOver(x, y+1, cells, color, oldColor, width, height);
    fillOver(x, y-1, cells, color, oldColor, width, height);
}

function eraseOver(cell, cells, setCells) {
    if (cell != null && cell != undefined) {
        let temp = [...cells];
        let tempElem = temp[cell.x][cell.y];
        tempElem = { ...tempElem, background: BASECOLOR };
        temp[cell.x][cell.y] = tempElem;
        setCells(temp);
    }
}

function dropperOver(cell, cells, setColor) {
    if (cell != null && cell != undefined) {
        let element = cells[cell.x][cell.y];
        let color = element.background;
        setColor(color);
    }
}

