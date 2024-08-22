import Image from 'next/image';
import styled from 'styled-components';

export const ImgAnimated = styled(Image)`
  &.load-animation {
    background: linear-gradient(
      -220deg,
      #1a1f16cc,
      rgba(0, 0, 0, 0.07),
      rgba(0, 0, 0, 0.02),
      rgba(0, 0, 0, 0.02),
      #1a1f1633,
      rgba(0, 0, 0, 0.02),
      rgba(0, 0, 0, 0.02),
      rgba(0, 0, 0, 0.07),
      #1a1f16cc
    );
    background-size: 600% 600%;

    -webkit-animation: AnimationName 1.1s ease infinite;
    -moz-animation: AnimationName 1.1s ease infinite;
    animation: AnimationName 1.1s ease infinite;

    @-webkit-keyframes AnimationName {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @-moz-keyframes AnimationName {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @keyframes AnimationName {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;
