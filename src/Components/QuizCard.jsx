import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const QuizCard = ({ ques }) => {
  const { question, options } = ques;
  return (
    <div>
      <div className="relative px-4 py-8 mb-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 rounded-lg bg-gray-200 text-gray-800">
        <h2 className="mb-8 text-2xl font-bold leading-none text-center">
          {question}
        </h2>
        <FontAwesomeIcon
          className="text-amber-400 mb-4 text-3xl md:absolute md:top-4 md:right-4 hover:text-amber-600 hover:cursor-pointer"
          icon={faEye}
        ></FontAwesomeIcon>
        <ul className="grid gap-3 md:grid-cols-2 ">
          {options.map((option) => (
            <li className="flex text-xl items-center space-x-2 border border-amber-400 px-4 py-8 rounded-md hover:bg-amber-400 hover:text-white hover:cursor-pointer">
              <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizCard;
