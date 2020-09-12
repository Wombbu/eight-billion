import * as React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const BarItem = styled.div.attrs((p) => ({
  tabIndex: 0,
  className: `flex flex-col cursor-pointer text-center items-center 
  justify-center bg-${p.color}-400 hover:bg-${p.color}-500
  text-gray-100 min-w-0 overflow-hidden
  whitespace-no-wrap`,
}))<{ flex: number; color: string; title?: string }>`
  flex: ${(p) => p.flex};
  transition: all 0.2s;
  min-height: 65px;
  &:focus {
    min-width: 75%;
  }
  &:after {
    content: "";
  }
  &:focus:after {
    content: "${(p) => p.title}";
  }
`;

type Props = {
  items: {
    value: number;
    title: string;
    description?: string;
    color: string;
  }[];
};

export const ShareBar = ({ items }: Props) => {
  const total = items
    .map((item) => item.value)
    .reduce((acc, value) => acc + value, 0);

  return (
    <div className="w-auto flex rounded-full overflow-hidden min-w-0">
      {items.map((item) => (
        <BarItem
          flex={item.value / total}
          color={item.color}
          title={item.title}
        >
          {((item.value / total) * 100).toFixed(0)}%
        </BarItem>
      ))}
    </div>
  );
};
