import React from "react";
import "./App.css";
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
    <div className="app-root">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="brand">
            <Zap size={44} className="icon" />
            <h1 className="title">Chandigarh EV Growth</h1>
            <Zap size={44} className="icon" />
          </div>
          <p className="subtitle">Electric Vehicle Registrations (2020-2024)</p>
          <p className="muted">Leading India's Electric Mobility Revolution</p>
        </div>

        {/* Main Chart */}
        <div className="chart-card">
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
        <div className="stats-grid">
          <div className="stat-card yellow">
            <div className="stat-content">
              <p className="stat-label">Total EVs Since 2020</p>
              <p className="stat-value">8,469</p>
            </div>
          </div>

          <div className="stat-card blue">
            <div className="stat-content">
              <p className="stat-label">Two-Wheelers</p>
              <p className="stat-value">5,442</p>
            </div>
          </div>

          <div className="stat-card green">
            <div className="stat-content">
              <p className="stat-label">Four-Wheelers</p>
              <p className="stat-value">3,027</p>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="highlights">
          <h2 className="highlights-title">
            <Zap size={18} className="icon-inline" /> Key Highlights
          </h2>
          <div className="highlights-grid">
            <div className="highlight">
              <span className="emoji">⚡</span>
              <p>
                <strong>2024 Growth:</strong> 3,078 EVs registered, showing
                strong momentum
              </p>
            </div>
            <div className="highlight">
              <span className="emoji">🏆</span>
              <p>
                <strong>National Leader:</strong> Ranked #1 in India Electric
                Mobility Index 2024
              </p>
            </div>
            <div className="highlight">
              <span className="emoji">📈</span>
              <p>
                <strong>6,592% Growth:</strong> From 46 EVs in 2020 to 3,078 in
                2024
              </p>
            </div>
            <div className="highlight">
              <span className="emoji">🎯</span>
              <p>
                <strong>2027 Goal:</strong> Become India's "Model EV City"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVChart;
