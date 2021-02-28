import { React, useState, useEffect } from "react";
import { Emoji } from './Emoji';
import { Link } from "react-router-dom";

<<<<<<< HEAD
export const HumanPick = ({ humanChoice, setHumanChoice, level, options, enabled, play, outcome, counter }) => {

<<<<<<< HEAD
=======
export const HumanPick = ({ humanChoice, setHumanChoice, level, options, enabled, play }) => {

>>>>>>> b3666db... add: sounds
    const symbols = Object.values(options);

    let result = symbols.find(obj => {
        return obj.name === humanChoice;
    });
    return (
        <>
            {!humanChoice ? <div className={level == "game-classic" ? 'options' : 'options icons-hard'}>
                {symbols.map((item, index) =>
                    <Link to='/result' key={index}>
<<<<<<< HEAD

=======

export const HumanPick = ({ humanChoice, setHumanChoice, choices }) => {

    const threeSymbols = [
        { name: 'rock', symbol: '👊' },
        { name: 'paper', symbol: '👋' },
        { name: 'scissors', symbol: '✌' }
    ]

    return (
        <>
            {!humanChoice && <div className='options'>
                {threeSymbols.map((item, index) =>
                    <Link to='/result' key={index}>
>>>>>>> 01b41c5... add:basic game
=======
>>>>>>> b3666db... add: sounds
                        <Emoji
                            key={index}
                            id={item.name}
                            label={item.symbol}
                            symbol={item.symbol}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b3666db... add: sounds
                            setHumanChoice={setHumanChoice}
                            humanChoice={humanChoice}
                            enabled={enabled}
                            play={play}
                        />
                    </Link>
                )}
            </div>
                : <div className={`human-choice ${outcome == 'win' && counter == 0 ? 'winner' : ''}`} >
                    <span>{humanChoice}</span>
                    <div className='answer'>
                        {result.symbol}
                    </div>
<<<<<<< HEAD
                </div>}
=======
                            setHumanChoice={setHumanChoice} />
                    </Link>
                )}
            </div>}
            {humanChoice && <div className="human-choice" >
                <span>{humanChoice}</span>
                <img className={`${humanChoice} result `}></img>
            </div>}
>>>>>>> 01b41c5... add:basic game
=======
                </div>
>>>>>>> b3666db... add: sounds
        </>
    )
};