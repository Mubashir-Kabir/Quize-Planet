import React from "react";
import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const { logo, name, total, id } = topic;
  return (
    <div className="inline-block border rounded-lg overflow-hidden  bg-white shadow-lg ">
      <div className="flex flex-col h-full">
        <img
          src={logo}
          className="object-cover w-full h-60 bg-gray-200"
          alt=""
        />
        <div className="flex-grow  rounded-b-lg">
          <div className="p-5">
            <h6 className="mb-2 font-semibold leading-5">{name}</h6>
            <p className="text-sm text-gray-900">
              Total Questions: <span>{total}</span>
            </p>
          </div>
          <div className="">
            <Link
              className="text-gray-200 text-xl font-semibold bg-amber-400 py-3 block rounded-b-lg w-full duration-300 transform hover:-translate-y-2 hover:bg-amber-600"
              to={`../quiz/${id}`}
            >
              Start Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
