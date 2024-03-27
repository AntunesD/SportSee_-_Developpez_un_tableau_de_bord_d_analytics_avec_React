import "./Average.scss";

import React, { useEffect, useState } from "react";
import GetAverage from "../../services/CallApi/GetAverage";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Average = ({ userId }) => {
  const [userAverage, setUserAverage] = useState(null);
  const [cursorPosition, setCursorPosition] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetAverage(userId);
        setUserAverage(userData);
      } catch (error) {
        // Gérer les erreurs ici
      }
    };

    fetchData();
  }, [userId]);

  // Vérifier si les données utilisateur sont disponibles
  if (!userAverage) {
    return <div>Chargement...</div>;
  }

  const { sessions } = userAverage.data;

  // Fonction de mapping pour convertir les chiffres en initiales des jours de la semaine
  const mapDayToInitial = (day) => {
    switch (day) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        return "";
    }
  };

  // Transformation des données pour le LineChart
  const data = sessions.map((session) => ({
    day: mapDayToInitial(session.day),
    sessionLength: session.sessionLength,
  }));

  // Ajouter des points fictifs pour le début et la fin du graphique
  const extendedData = [
    { day: "", sessionLength: 20 }, // Point fictif avant le lundi
    ...data,
    { day: "", sessionLength: 50 }, // Point fictif après le dimanche
  ];

  // Customiser le tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const sessionPayload = payload.find(
        (data) => data.dataKey === "sessionLength"
      );

      return (
        <div className="tooltip">
          {sessionPayload && <p>{`${sessionPayload.value} min`}</p>}
        </div>
      );
    }

    return null;
  };

  // Calculer la taille du rectangle transparent en fonction de la position du curseur du tooltip
  const rectangleStyle = {
    width: cursorPosition ? cursorPosition + "px" : "0px",
  };

  return (
    <div className="average">
      {/* travailler sur se rectangle */}
      <div className="rectangle_transparent" style={rectangleStyle}></div>
      <h2>Durée moyenne des sessions</h2>
      <div className="essai">
        <ResponsiveContainer >
          <LineChart
            data={extendedData}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            //gerer la taille du rectangle
            onMouseMove={(e) => {
              if (e.isTooltipActive) {
                const { activeCoordinate } = e;
                const xPos = activeCoordinate.x;    
                setCursorPosition(xPos);
              }
            }}
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="5%" stopColor="rgba(255, 255, 255, 0.3)" />
                <stop offset="95%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              tick={{ fill: "#fff" }}
              strokeWidth={0}
              tickMargin={10}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />}/>
            <Line
              strokeWidth={2}
              type="monotone"
              dataKey="sessionLength"
              stroke="url(#lineGradient)"
              activeDot={{ r: 4 }}
              dot={{ r: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Average;
