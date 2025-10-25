import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarCharts = ({ ratings }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-10 w-full max-w-[600px] mx-auto">
      <h2 className="text-xl font-semibold text-center mb-4">
        Ratings
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ratings} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#00d390" barSize={50} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
