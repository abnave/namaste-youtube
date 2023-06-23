import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const names = [
    "Movies",
    "Sandeep",
    "Akshay",
    "Marvel",
    "Spiderman",
    "Transformer",
    "React",
    "LinkedIn",
    "Resume",
    "Jobs",
    "Accidents",
    "Marriage",
    "Love",
    "Thunder",
  ];
  return (
    <div className="flex items-center justify-center">
      <button
        className="mr-4 text-gray-500 hover:text-gray-800"
      >
        &lt;
      </button>
      <ul className="flex items-center space-x-1">
        {names.map((name, index) => (
          <li>
            <Button name={name}></Button>
          </li>
        ))}
      </ul>
      <button
        className="ml-4 text-gray-500 hover:text-gray-800"
      >
        &gt;
      </button>
    </div>
  );
};
export default ButtonList;
