import "./Bonjour.scss"

const Bonjour = ({firstName}) => {
  return (
    <div className="bonjour">
      <h1>Bonjour <span>{firstName}</span> </h1>
      {/* A l'avenir mettre un logique pour changer le message */}
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Bonjour;
