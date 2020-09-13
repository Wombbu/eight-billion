import * as React from "react";
import styled, { keyframes } from "styled-components";
import tw from "tailwind.macro";

const bounce = keyframes`
  50% {
    transform: translateY(-15%);
  }
  100% {
    transform: translateY(0);
  }
`;

const Wrapper = styled.div.attrs((p) => ({
  className: "text-gray-400",
}))`
  & svg {
    width: 30px;
    height: 36px;
    margin-left: -15px;
  }

  & path {
    animation: ${bounce} 1s ease infinite;

    stroke: #cbd5e0;
    fill: transparent;
    stroke-width: 2px;
  }
`;

export const ScrollDownIndicator = () => (
  <Wrapper>
    <svg>
      <path d="M0 10 L15 26 L30 10" />
    </svg>
  </Wrapper>
);
