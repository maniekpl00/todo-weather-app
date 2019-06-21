import styled from 'styled-components';
import { animateSpinner } from './animation.styles';

export const StyledSpinner = styled.div`
  width: 100%;
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    border: 6px solid #fff;
    border-radius: 50%;
    animation: ${animateSpinner} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
