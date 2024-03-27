import './Nutrition.scss';

//import des image des logos
import CaloriesIcon from "../../assets/calories-icon.png";
import ProteinesIcon from "../../assets/protein-icon.png";
import GlucidesIcon from "../../assets/carbs-icon.png"
import LipidesIcon from "../../assets/fat-icon.png"

const Nutrition = ({ keyData }) => {
  const calories = keyData.calorieCount;
  const proteine = keyData.proteinCount;
  const glucide = keyData.carbohydrateCount;
  const lipide = keyData.lipidCount;

  return (
    <div className="nutrition">
      <span>
        <img src={CaloriesIcon} alt="Logo calories"></img>
        <div>
        <h2>{calories}kCal</h2>
        <p>Calories</p>
        </div>
      </span>
      <span>
        <img src={ProteinesIcon} alt="Logo proteines"></img>
        <div>
        <h2>{proteine}g</h2>
        <p>Proteines</p>
        </div>
      </span>
      <span>
        <img src={GlucidesIcon} alt="Logo glucides"></img>
        <div>
        <h2>{glucide}g</h2>
        <p>Glucides</p>
        </div>
      </span>
      <span>
        <img src={LipidesIcon} alt="Logo lipides"></img>
        <div>
        <h2>{lipide}g</h2>
        <p>Lipides</p>
        </div>
      </span>
    </div>
  );
};

export default Nutrition;
