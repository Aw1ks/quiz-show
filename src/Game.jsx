import React, { useEffect, useState } from 'react';
import './Game.css';

function Game({ step, questions, question, onClickVariant }) {

    function handleClick(index) {
        onClickVariant(index);
    }

    const percentage = Math.round((step / questions.length) * 100);

    useEffect(() => {
        console.log(questions);
    }, [questions]);

    return (
        <div>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className='progress__inner'></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((option, index) => (
                    <li key={index} onClick={() => handleClick(index)}>{option}</li>
                ))}
            </ul>
        </div>
    );
}

export default Game;
