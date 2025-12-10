import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Zap } from "lucide-react";

const EVChart = () => {
  // Data from web search results
  const data = [
    { year: "2020", count: 46, twoWheelers: 11, fourWheelers: 35 },
    { year: "2021", count: 245, twoWheelers: 150, fourWheelers: 95 },
    { year: "2022", count: 1006, twoWheelers: 620, fourWheelers: 386 },
    { year: "2023", count: 2870, twoWheelers: 1770, fourWheelers: 1100 },
    { year: "2024", count: 3078, twoWheelers: 1891, fourWheelers: 1187 },
  ];

  const colors = ["#fbbf24", "#f59e0b", "#f97316", "#ef4444", "#dc2626"];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-yellow-400 p-3 rounded-lg shadow-lg">
          <p className="text-yellow-400 font-bold mb-2">
            {payload[0].payload.year}
          </p>
          <p className="text-white text-sm">
            Total EVs: {payload[0].payload.count}
          </p>
          <p className="text-blue-300 text-sm">
            Two-wheelers: {payload[0].payload.twoWheelers}
          </p>
          <p className="text-green-300 text-sm">
            Four-wheelers: {payload[0].payload.fourWheelers}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-bold text-white">
              Chandigarh EV Growth
            </h1>
            <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-yellow-300 text-xl">
            Electric Vehicle Registrations (2020-2024)
          </p>
          <p className="text-gray-300 mt-2">
            Leading India's Electric Mobility Revolution
          </p>
        </div>

        {/* Main Chart */}
        <div className="bg-gray-800 bg-opacity-50 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-yellow-400/30 mb-8">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="year"
                stroke="#fbbf24"
                style={{ fontSize: "14px", fontWeight: "bold" }}
              />
              <YAxis stroke="#fbbf24" style={{ fontSize: "12px" }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" radius={[10, 10, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-6 shadow-xl">
            <div className="text-white text-center">
              <p className="text-sm font-semibold mb-2">Total EVs Since 2020</p>
              <p className="text-4xl font-bold">8,469</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 shadow-xl">
            <div className="text-white text-center">
              <p className="text-sm font-semibold mb-2">Two-Wheelers</p>
              <p className="text-4xl font-bold">5,442</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-6 shadow-xl">
            <div className="text-white text-center">
              <p className="text-sm font-semibold mb-2">Four-Wheelers</p>
              <p className="text-4xl font-bold">3,027</p>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-gray-800 bg-opacity-50 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-yellow-400/30">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">⚡</span>
              <p className="text-sm">
                <span className="font-bold text-yellow-300">2024 Growth:</span>{" "}
                3,078 EVs registered, showing strong momentum
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">🏆</span>
              <p className="text-sm">
                <span className="font-bold text-yellow-300">
                  National Leader:
                </span>{" "}
                Ranked #1 in India Electric Mobility Index 2024
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">📈</span>
              <p className="text-sm">
                <span className="font-bold text-yellow-300">
                  6,592% Growth:
                </span>{" "}
                From 46 EVs in 2020 to 3,078 in 2024
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">🎯</span>
              <p className="text-sm">
                <span className="font-bold text-yellow-300">2027 Goal:</span>{" "}
                Become India's "Model EV City"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVChart;
