import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import Bonjour from "../../components/Bonjour/Bonjour";
import Nutrition from "../../components/Nutrition/Nutrition";
import Activity from "../../components/Activity/Activity";
import Average from "../../components/Average/Average";
import Performance from "../../components/Performance/Performance";
import Score from "../../components/Score/Score";

import React, { useEffect, useState } from "react";
import GetId from "../../services/CallApi/GetId";

import "./Dashboard.scss"

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null); // Ajout de l'état d'erreur

  //A l'avenir mettre une logique de récupération de l'ID
  //Storage ou cookie apres connexion par exemple
  const userId = "12";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetId(userId);
        setUserData(userData);
      } catch (error) {
        setError("Une erreur s'est produite lors de la récupération des données.");
      }
    };

    fetchData();
  }, []);

   if (error) {
    return <div>{error}</div>; // Afficher le message d'erreur
  }

  // Vérifier si les données utilisateur sont disponibles
  if (!userData) {
    return <div>Chargement...</div>;
  }

  //Récupération propre de la data
  const firstName = userData.data.userInfos.firstName;
  const score = userData.data.todayScore ?? userData.data.score;
  const keyData = userData.data.keyData;

  return (
    <div className="dashboard">
      <Header />
      <main>
      <Sidebar />
        <div className="content">
          <Bonjour firstName={firstName} />
          <div className="schemas">
          <Activity userId={userId} />
          <Score score={{ score }} />
          <Nutrition keyData={keyData} />
          <Average userId={userId} />
          <Performance userId={userId} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
