import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Chart() {
  const topics = useLoaderData().data;
  const data = [];
  topics.forEach((topic) => {
    const { name, total } = topic;

    const obj = {
      name,
      total,
    };
    data.push(obj);
    console.log(data);
  });

  return (
    <BarChart
      width={700}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="total" fill="#FBBF24" />
    </BarChart>
  );
}
