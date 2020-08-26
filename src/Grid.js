import React, { useState } from 'react';
import './App.css';
import { Cell } from './Cell';
import {selectorOver} from './OverGrid'

export function Grid(props) {
    let [cells, setCells] = useState(Array(15).fill().map(() => Array(15).fill({ background: "black" })));
    let [dimensions, setDimensions] = useState({ width: 15, height: 15 });
    let [currentCell, setCurrentCell] = useState({})
    let [mouseDown, setMouseDown] = useState(false);

    return (
        <div className="outergrid">
            <div className="grid" 
                onMouseLeave={() => setMouseDown(false)}
                onMouseOver={() => selectorOver(props.option, mouseDown, currentCell, cells, setCells, props.color, props.setColor, dimensions)}>
                {cells.map((rows, x) => (
                    <div className="row">
                        {rows.map((cell, y) => (
                            <Cell 
                                option={props.option}
                                setCurrentCell={setCurrentCell}
                                setColor={props.setColor}
                                currentCell={currentCell}
                                setMouseDown={setMouseDown}
                                color={props.color}
                                cells={cells}
                                setCells={setCells}
                                x={x} y={y}
                                dimensions={dimensions}
                                background={cell.background}
                                size={(100 / dimensions.width)} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}


