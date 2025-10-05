import React, { useState } from 'react';
import './App.css';

import Game from './Game';
import Result from './Result'

function App() {
  
  function onClickVariant(index) {
    console.log('step:', step, 'index:', index);
    
    if (index === question.correct) {
      setStep(step + 1);
      setCorrect(correct + 1);
    };
  }
  
  const [questions] = useState([
    {
      title: 'React - это ... ?',
      variants: ['библиотека', 'фреймворк', 'приложение'],
      correct: 0,
    },
    {
      title: 'Компонент - это ... ',
      variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
      correct: 1,
    },
    {
      title: 'Что такое JSX?',
      variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
      ],
      correct: 2,
    },
  ]);

  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);

  return (
    <div className="App">
      {
        step !== questions.length ? (
          <Game step={step} questions={questions} question={question} onClickVariant={onClickVariant}/>
        ) : <Result correct={correct} questions={questions}/>
      }
    </div>
  );
}

export default App;
