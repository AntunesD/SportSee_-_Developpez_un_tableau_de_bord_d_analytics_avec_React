import "./Activity.scss";

import React, { useEffect, useState } from "react";
import GetActivity from "../../services/CallApi/GetActivity";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Activity = ({ userId }) => {
  const [userActivity, setUserActivity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetActivity(userId);
        setUserActivity(userData);
      } catch (error) {
        // Gérer les erreurs ici
      }
    };

    fetchData();
  }, [userId]);

  // Vérifier si les données utilisateur sont disponibles
  if (!userActivity) {
    return <div>Chargement...</div>;
  }

  const { sessions } = userActivity.data;

  // Préparer les données pour le graphique
  const data = sessions.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  // Customiser le tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const kilogramPayload = payload.find(
        (data) => data.dataKey === "kilogram"
      );
      const caloriesPayload = payload.find(
        (data) => data.dataKey === "calories"
      );

      return (
        <div className="tooltip">
          {kilogramPayload && <p>{`${kilogramPayload.value}kg`}</p>}
          {caloriesPayload && <p>{`${caloriesPayload.value}Kcal`}</p>}
        </div>
      );
    }

    return null;
  };

  // Calcul du domaine en fonction de la valeur minimale des données
  const calculateDomain = (data) => {
    const minValue = Math.min(...data.map((entry) => entry.kilogram));
    return [Math.max(0, minValue - 5), "auto"];
  };

  return (
    <div className="activity">
      <span>
        <h2>Activité quotidienne</h2>
        <ul>
          <li>Poids (kg)</li>
          <li>Calories brûlées (kCal)</li>
        </ul>
      </span>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            strokeWidth={2}
            stroke="#DEDEDE"
            tickLine={false}
            tickMargin={10}
            tick={{ fill: "#9B9EAC" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: "#9B9EAC" }}
            strokeWidth={0}
            domain={calculateDomain(data)}
            tickCount={3}
          />
          <YAxis yAxisId="left" hide />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              fill: "rgba(0, 0, 0, 0.2)",
            }}
          />
          {/* <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          wrapperStyle={{ marginTop: -25, color: "#9B9EAC" }}
        /> */}
          <Bar
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            yAxisId="right"
            barSize={7}
            radius={[20, 20, 0, 0]}
          />
          <Bar
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            yAxisId="left"
            barSize={7}
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;
