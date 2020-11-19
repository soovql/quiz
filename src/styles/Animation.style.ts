import styled, { keyframes } from 'styled-components';

export const shake = keyframes`
  0% { top: 1px; left: -1px; }
  20% { top: -1px; left: 0px; }
  40% { top: 1px; left: -1px; }
  60% { top: 1px; left: 1px; }
  80% { top: -1px; left: 0px; }
  100% { top: 1px; left: 1px; }
`;

export const glitch = keyframes`
 0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
    -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
    -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
    0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
    -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
    0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
    -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  
  50% {
    text-shadow: 0.025em 0.05 0 rgba(255, 0, 0, 0.75),
    0.05em 0 0 rgba(0, 255, 0, 0.75),
    0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05 0 rgba(255, 0, 0, 0.75),
    0.05em 0 0 rgba(0, 255, 0, 0.75),
    0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
    
  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
    0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
`
