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
  ResponsiveContainer,
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
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
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
          <Bar dataKey="total" fill="#FBBF24" barSize={60} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
