import React, { useEffect, useState } from "react";
import GetPerformance from "../../services/CallApi/GetPerformance";
import "./Performance.scss";

import {
  Text,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Performance = ({ userId }) => {
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetPerformance(userId);
        setUserPerformance(userData);
      } catch (error) {
        // Gérer les erreurs ici
      }
    };

    fetchData();
  }, [userId]);

  // Vérifier si les données utilisateur sont disponibles
  if (!userPerformance) {
    return <div>Chargement...</div>;
  }

  // Correspondance entre les types d'exercices en anglais et en français
  const frenchNames = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  const data = userPerformance.data.data.map((item) => ({
    kind: frenchNames[userPerformance.data.kind[item.kind]],
    value: item.value,
  }));

  //Fonction pour gérer les étiquettes
  function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 10}
        x={x + (x - cx) / 100000}
        fill="white"
        fontSize={8}
        
      >
        {payload.value}
      </Text>
    );
  }

  return (
    <div className="performance">
      <ResponsiveContainer height="80%">
        <RadarChart data={data} cx={88}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            axisLine={false}
            tick={(props) => renderPolarAngleAxis(props)}
          />
          <PolarRadiusAxis axisLine={false} tick={() => null} />
          <Radar name="Performance" dataKey="value" stroke="red" fill="rgba(255, 0, 0, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
