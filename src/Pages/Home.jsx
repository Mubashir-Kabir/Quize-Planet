import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import TopicCard from "../Components/TopicCard";

const Home = () => {
  const topics = useLoaderData().data;
  return (
    <div>
      <Banner></Banner>
      <div className="grid gap-5 row-gap-5 px-16 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic}></TopicCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
