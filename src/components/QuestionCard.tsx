import React from 'react';
import { AnswerObject } from '../App';
import {
  QuestionTitle,
  QuestionNumber,
  AnswerButtonWrapper,
} from '../styles/App.styles';

type Props = {
  question_title: string;
  answers: string[];
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuestionCard: React.FC<Props> = (
  {
    question_title,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions,
  }
) => (
    <div>
      <QuestionNumber>
        Вопросик {questionNumber} из {totalQuestions}
      </QuestionNumber>
      <QuestionTitle
        dangerouslySetInnerHTML={{__html: question_title}}
      />
        {answers.map((item, index) => (
          <AnswerButtonWrapper
            key={index}
            correct={userAnswer?.correctAnswer === item}
            userClicked={userAnswer?.answer === item}
          >
            <button
              value={item}
              disabled={!!userAnswer}
              onClick={callback}
            >
              <div dangerouslySetInnerHTML={{__html: item}}/>
            </button>
          </AnswerButtonWrapper>

        ))}
    </div>
  );

export default QuestionCard;
