import * as React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  50% {
    transform: translateY(-30%);
  }
  100% {
    transform: translateY(0);
  }
`;

const Wrapper = styled.div.attrs((p) => ({
  className: "text-gray-400 pt-8",
}))`
  animation: ${bounce} 1s ease infinite;
`;

export const ScrollDownIndicator = () => <Wrapper>V</Wrapper>;
