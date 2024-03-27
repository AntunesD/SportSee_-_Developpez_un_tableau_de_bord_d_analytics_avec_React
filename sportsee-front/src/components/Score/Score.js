import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import "./Score.scss";

const Score = ({ score }) => {
  
const fillPercent = score.score*100;
const restPercent = 100-fillPercent

const data = [
  { name: "A", value: fillPercent },
  { name: "B", value: restPercent },
];

const COLORS = ["#FF0101", "#EFEFEF"]; // Couleur du segment rempli et couleur du reste du cercle

  return (
    <div className="score">
      <h2>Score</h2>
      <ResponsiveContainer >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="65%"
            outerRadius="75%"
            fill="#8884d8"
            paddingAngle={5}
            startAngle={90}
            endAngle={450}
            dataKey="value"
            labelLine={false}
            cornerRadius={10} 
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="score_text">
        <span>{fillPercent}%</span>
        <p>de votre objectif</p>
      </div>
    </div>
  );
};

export default Score;
