import * as React from "react";
import styled from "styled-components";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

export const SectionWrapper = styled.div.attrs((p) => ({
  ...p,
  className: `h-screen flex flex-col items-center justify-center`,
}))`
  flex-shrink: 0;
`;

export const Section = (props: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  showTitleDesc?: boolean;
  id?: string;
  nextId?: string;
}) => (
  <SectionWrapper>
    <div
      className="m-auto max-w-xl flex flex-col items-center justify-center"
      id={props.id}
    >
      {props.title && (
        <div>
          {props.showTitleDesc && (
            <p className="text-gray-500 font-serif leading-tight">
              Nettomaksua
            </p>
          )}
          <h1
            className={`font-serif pb-8 ${
              typeof props.title === "string" && props.title.length > 11
                ? "text-3xl"
                : "text-4xl"
            } lg:text-6xl text-teal-500 text-center leading-tight`}
          >
            {props.title}
          </h1>
        </div>
      )}
      {props.description && (
        <p className="text-gray-700 pb-8 text-center font-serif">
          {props.description}
        </p>
      )}
      {props.children}
      {props.nextId ? <ScrollDownIndicator toId={props.nextId} /> : null}
    </div>
  </SectionWrapper>
);
