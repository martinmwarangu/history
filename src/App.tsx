import { type } from 'os';
import React, {useState} from 'react';
import {fetchQuizQuestions} from './API';
//TYPES
import {QuestionState,Difficulty} from './API';
//styles
import {GlobalStyle , Wrapper} from './app.styles';
//question card

import QuestionCard from './components/QuestionCard';
 export type AnswerObject ={
question: string;
answer: string;
correct: boolean;
correctAnswer: string;


}
const TOTAL_QUESTIONS = 10;

const App = () =>{
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState <QuestionState[]> ([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  console.log(questions);
  const startTrivia = async () =>{
   setLoading(true);
   setGameOver(false);

   const newQuestions = await fetchQuizQuestions(
     TOTAL_QUESTIONS,
     Difficulty.HARD
   )
   setQuestions(newQuestions);
   setScore(0);
   setUserAnswers([]);
   setNumber(0);
   setLoading(false);
  }
 const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
   if (!gameOver){
     //userAnswer
     const answer = e.currentTarget.value;
     //check answer against correct answer
     const correct = questions[number].correct_answer === answer;
     // add score if answer is correct
     if (correct) setScore(prev => prev + 1);
     // save answers in array for user answers
     const AnswerObject ={
       question: questions[number].question,
       answer,
       correct,
       correctAnswer: questions[number].correct_answer,
      
     };
     setUserAnswers((prev)=>[...prev , AnswerObject]);
   }

 }
 const nextQuestion = () => {
   // move to next question
   const nextQuestion = number + 1;
   
   if (nextQuestion === TOTAL_QUESTIONS){
     setGameOver(true);
   } else{
     setNumber(nextQuestion);
   }

 }
  return (
    <>
    <GlobalStyle/>
    <Wrapper>
     <h1>History Quiz</h1>
    {gameOver || userAnswers.length == TOTAL_QUESTIONS ? 
    ( <button className="Start" onClick={startTrivia}>
      Start Trivia
      </button>
     ):null }
     {!gameOver ? 
     <p className="score">Score:{score}</p>: null
     }
     {loading && <p>Loading questions....</p>}
     {!loading && !gameOver &&(
     <QuestionCard 
     questionNr = {number + 1}
     totalQuestions={TOTAL_QUESTIONS}
     question={questions[number].question}
     answers={questions[number].answers}
     userAnswer={userAnswers ? userAnswers[number] : undefined}
     callback={checkAnswer}
     />)}
     {!gameOver && !loading && userAnswers.length== number + 1 &&
      number !==TOTAL_QUESTIONS - 1 ?(
         <button className='next' onClick={nextQuestion}>
       Next
       </button>): null
    
     }
    </Wrapper>
    </>
  );
}

export default App;