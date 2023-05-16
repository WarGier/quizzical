import React, { useState } from "react";
import Choice from "./Choice";

function Question({ question, questionId, correctAnswer, incorrectAnswers, setUserAnswers }) {
    const [selectedAnswer, setSelectedAnswer] = useState([]);

    const allChoices = [...incorrectAnswers];
    allChoices.splice(Math.floor(Math.random() * 4), 0, correctAnswer);

    function handleSelect(answer) {}

    const choiceElements = allChoices.map((answer) => (
        <Choice answer={answer} handleSelect={() => handleSelect(answer)} />
    ));

    return (
        <div className='p-6 px-8 text-xl bg-slate-100 m-4 rounded-3xl'>
            <h2>{question}</h2>
            <div>{choiceElements}</div>
        </div>
    );
}

export default Question;
