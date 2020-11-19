import styled, { createGlobalStyle } from 'styled-components';
import BGImage from '../img/bg.jpg';
import { shake, glitch } from './Animation.style';

// #6c6652 green
// #34342c darkgreen
// #c27d83 light pink

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    display: flex;
    justify-content: center;
    background-image: url(${BGImage});
    background-size: cover;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0 ;
      right: 0;
      bottom: 0;
      background-color: blue;
      opacity: 0.3;
    }
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0 ;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  text-transform: uppercase;
  color: #c27d83;
  font-size: 40px;
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  animation: ${glitch} 500ms infinite;
`;

export const Score = styled.div`
  color: white;
  font-size: 30px;
`;

export const QuestionNumber = styled.div`
  color: white;
  font-size: 30px;
`;

export const QuestionTitle = styled.div`
  color: #c27d83;
  font-size: 20px;
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  background-color: #6c6652;
  color: white;
  font-size: 40px;

  &:hover {
    animation: ${shake} 0.25s infinite alternate;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const AnswerButtonWrapper = styled.div<ButtonWrapperProps>`

button {
    cursor: pointer;
    user-select: none;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'green'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
  }
`;