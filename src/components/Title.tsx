import * as React from 'react';

export const Title = (props: {primary: string, secondary: string}) => (
    <div className="h-screen flex flex-col items-center justify-center">
        <div className="sticky top-0">
            <h1 className="font-sans text-6xl font-hairline text-6xl text-teal-500 text-center">{props.primary}</h1>
            <p className="text-gray-700 p-5 text-center">{props.secondary}</p>
            <div className="">
                
            </div>
        </div>
    </div>
);