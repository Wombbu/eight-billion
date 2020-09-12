import * as React from "react";

export const Section = (props: {
  title: React.ReactNode;
  description: React.ReactNode;
  children?: React.ReactNode;
}) => (
  <div className="h-screen flex flex-col items-center justify-center">
    <div className="sticky top-0">
      <h1 className="font-serif text-5xl md:text-6xl text-teal-500 text-center leading-none">
        {props.title}
      </h1>
      <p className="text-gray-700 pb-12 pt-12 text-center font-serif">
        {props.description}
      </p>
      {props.children}
    </div>
  </div>
);
