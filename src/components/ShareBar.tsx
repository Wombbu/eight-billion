import * as React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const BarItem = styled.div.attrs((p) => ({
  tabIndex: 0,
  className: `flex cursor-pointer text-center items-center 
  justify-center
  text-indigo-500 overflow-hidden
  whitespace-no-wrap text-sm md:text-base`,
}))<{ flex: number; title?: string }>`
  flex: ${(p) => p.flex};
  transition: all 0.2s;
  min-height: 40px;
  min-width: 40px;
  &:hover {
  }
  &:not(:last-child) {
    border-right: 2px solid #667eea;
  }
  &:focus {
    flex: 10;
    background-color: #ebf4ff;
  }
  &:before {
    content: "";
  }
  &:focus:before {
    content: "${(p) => p.title}";
    padding-right: 4px;
  }
`;

type Props = {
  items: {
    value: number;
    title: string;
    description?: string;
  }[];
};

export const ShareBar = ({ items }: Props) => {
  const total = items
    .map((item) => item.value)
    .reduce((acc, value) => acc + value, 0);

  return (
    <div className="w-full flex rounded-full overflow-hidden min-w-0 mb-8 border-2 border-solid border-indigo-500">
      {items.map((item) => (
        <BarItem flex={item.value / total} title={item.title}>
          {((item.value / total) * 100).toFixed(0)} %
        </BarItem>
      ))}
    </div>
  );
};
