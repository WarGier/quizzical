import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import Question from "./Question";

function QuestionsScreen() {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then((res) => res.json())
            .then((data) => {
                setQuestions(
                    data.results.map((question) => {
                        return {
                            id: nanoid(),
                            question: decode(question.question),
                            correct: decode(question.correct_answer),
                            incorrect: question.incorrect_answers,
                        };
                    })
                );
            });
    }, []);

    const questionElements = questions.map((q) => {
        return (
            <Question
                key={q.id}
                questionId={q.id}
                question={q.question}
                correctAnswer={q.correct}
                incorrectAnswers={q.incorrect}
                setUserAnswers={setUserAnswers}
            />
        );
    });

    console.log(userAnswers);

    return <div>{questionElements}</div>;
}

export default QuestionsScreen;
