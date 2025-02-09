import React from "react";
import styled from "styled-components";

function CurvyLines() {
  return (
    <Wrapper>
      <StyledDiv />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  --s: 16px; /* control the size */
  --b: 2px; /* control the border thickness */

  width: calc(8 * var(--s));
  aspect-ratio: 4;
  display: grid;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    background: linear-gradient(#bd1550 50%, #e97f02 0) no-repeat,
      linear-gradient(#f8ca00 50%, #8a9b0f 0) no-repeat;
    background-size: 50% 200%;
    --_g: calc(-0.45 * var(--s)), #0000 calc(99% - var(--b)),
      #000 calc(101% - var(--b)) 99%, #0000 101%;
    --_s: calc(4 * var(--s)) var(--s) repeat-x;
    --_r: calc(1.096 * var(--s) + var(--b) / 2);
    -webkit-mask: radial-gradient(var(--_r) at left 50% bottom var(--_g))
        calc(50% - 2 * var(--s)) calc(50% - var(--s) / 2) / var(--_s),
      radial-gradient(var(--_r) at left 50% top var(--_g)) 50%
        calc(50% + var(--s) / 2) / var(--_s);
    animation: back 6s infinite steps(1), load 1.5s infinite linear alternate;
  }
  &::after {
    transform: scaleY(-1);
    animation-delay: -1.5s;
  }

  @keyframes load {
    0% {
      clip-path: inset(0 75% 0 0);
    }
    to {
      clip-path: inset(0 0 0 75%);
    }
  }
  @keyframes back {
    0%,
    100% {
      background-position: 0% 0%, 100% 0%;
    }
    25% {
      background-position: 0% 100%, 100% 0%;
    }
    50% {
      background-position: 0% 100%, 100% 100%;
    }
    75% {
      background-position: 0% 0%, 100% 100%;
    }
  }
`;

export default CurvyLines;
