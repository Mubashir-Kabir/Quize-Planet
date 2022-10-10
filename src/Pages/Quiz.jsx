import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../Components/QuizCard";

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { total, name, logo, questions } = quiz;
  console.log(quiz);
  return (
    <div>
      <div className="px-4 pt-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <div className=" mb-5 rounded-full sm:mx-auto flex items-center justify-center w-16 h-16  bg-indigo-50">
            <img className="w-12 h-12 rounded-full" src={logo} alt=""></img>
          </div>

          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {name}
          </h2>
          <p className="text-base text-gray-700 md:text-lg sm:px-4">
            Total Question:{total}
          </p>
          <hr className="w-full my-8 border-gray-300" />
        </div>
      </div>
      {questions.map((question) => (
        <QuizCard key={question.id} ques={question}></QuizCard>
      ))}
    </div>
  );
};

export default Quiz;
