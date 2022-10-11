import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizCard = ({ ques }) => {
  //   console.log(ques);
  const { question, options, correctAnswer } = ques;
  const [toggle, setToggle] = useState(false);
  const notify = (option) => {
    console.log(option, correctAnswer);
    if (option === correctAnswer) {
      toast.success("Great! Correct Answer", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Opps! wrong Answer", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="relative">
      {toggle && (
        <div className="absolute rounded-md top-2 bg-white text-gray-600 px-12 py-6 right-12 z-10">
          <div className="relative">
            <h1 className="text-2xl font-semibold">The Answer is:</h1>
            <p>{correctAnswer}</p>
            <FontAwesomeIcon
              onClick={() => setToggle(!toggle)}
              className="absolute -top-4 -right-10  text-xl px-3 rounded-full py-2 bg-amber-500 hover:cursor-pointer hover:bg-amber-600"
              icon={faXmark}
            ></FontAwesomeIcon>
          </div>
        </div>
      )}
      <ToastContainer />

      <div className="relative px-4 py-8 mb-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 rounded-lg bg-gray-200 text-gray-800">
        <h2 className="mb-8 text-2xl font-bold leading-none text-center">
          {question}
        </h2>

        <FontAwesomeIcon
          onClick={() => setToggle(!toggle)}
          className=" text-amber-400 mb-4 text-3xl md:absolute md:top-4 md:right-4 hover:text-amber-600 hover:cursor-pointer"
          icon={faEye}
        ></FontAwesomeIcon>

        <div className="grid gap-3 md:grid-cols-2 ">
          {options.map((option) => (
            <div class="form-check pl-3 flex items-center border rounded-md  border-amber-400 ">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-amber-400 checked:border-amber-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name={question}
                id={option}
                onClick={() => notify(option)}
              />
              <label
                class="form-check-label w-full h-full inline-block  text-xl  space-x-2  px-4 py-8 bg-amber-400 rounded-md text-white cursor-pointer "
                htmlFor={option}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;

{
  /* <li
  onClick={() => notify(option)}
  className="flex text-xl items-center space-x-2 border border-amber-400 px-4 py-8 rounded-md hover:bg-amber-400 hover:text-white hover:cursor-pointer"
>
  <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
  <span>{option}</span>
</li>; */
}
