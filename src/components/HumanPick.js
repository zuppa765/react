import { React, useState, useEffect } from "react";
import { Emoji } from './Emoji';
import { Link } from "react-router-dom";


export const HumanPick = ({ humanChoice, setHumanChoice, level, options }) => {

    const symbols = Object.values(options)

    let result = symbols.find(obj => {
        return obj.name === humanChoice;
    })

    return (
        <>
            {!humanChoice ? <div className='options'>
                {symbols.map((item, index) =>
                    <Link to='/result' key={index}>
                        <Emoji
                            key={index}
                            id={item.name}
                            label={item.symbol}
                            symbol={item.symbol}
                            setHumanChoice={setHumanChoice} />
                    </Link>
                )}
            </div>
                : <div className="human-choice here" >
                    <span>{humanChoice}</span>
                    <div className='answer'>
                        {result.symbol}
                    </div>
                </div>}
        </>
    )
};