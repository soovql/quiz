import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import GameOver from './components/GameOver';
import { 
  GlobalStyle,
  Wrapper,
  Header,
  ButtonWrapper,
  Button,
  Score,
} from './styles/App.styles';
import questions from './questions.json';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  shuffle?: boolean;
  correctAnswer: string;
  correctAnswerExplained?: string;
};

const TOTAL_QUESTIONS = questions.list.length;

const App = () => {
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameStart, setGameStart] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const startQuiz = async () => {
    setGameOver(false);
    setGameStart(false);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    const correct = questions.list[number].correct_answer === answer;

    if (correct) {
      setScore(prev => prev + 1)
    }
    
    const answersArray ={
      question: questions.list[number].title,
      answer,
      correct,
      correctAnswer: questions.list[number].correct_answer,
      correctAnswerExplained: questions.list[number].correct_answer_explained,
    }

    setUserAnswers((prev) => [...prev, answersArray]);

    if (number + 1 === TOTAL_QUESTIONS) {
      setGameOver(true);
    }
  }

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (shuffle) {
      setShuffle(true);
    }
    // добавить шаффл

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  }

  return (
    <div className="App">
        <GlobalStyle />
        <Wrapper>
          <Header>
            HEEEYYYY
          </Header>
          {
            (((!gameOver || userAnswers.length === TOTAL_QUESTIONS) && gameStart)) ? (
              <ButtonWrapper>
                <Button
                  onClick={startQuiz}
                >
                  начать
                </Button>
              </ButtonWrapper>
            ) : null
          }
          {(!gameStart) ? (
              <Score>
                <span>Счёт: </span>
                <span>
                  {score}
                </span>
              </Score>
          )
            : null
          }
          {(!gameOver && !gameStart) &&
              (
                <QuestionCard
                  questionNumber={number + 1}
                  totalQuestions={TOTAL_QUESTIONS}
                  question_title={questions.list[number].title}
                  answers={questions.list[number].answers}
                  userAnswer={userAnswers ? userAnswers[number] : undefined}
                  callback={checkAnswer}
                />
              )
          }
          {(!gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1) && 
            <ButtonWrapper>
              <Button
                onClick={nextQuestion}
              >
                Далее
              </Button>
            </ButtonWrapper>
          }
          {gameOver &&
            <React.Fragment>
              <GameOver
                score={score}
              />
              <ButtonWrapper>
                <Button
                  className='start'
                  onClick={startQuiz}
                >
                начать заново
                </Button>
              </ButtonWrapper>
            </React.Fragment>
          }
        </Wrapper>
      </div>
  );
}

export default App;
