import "./FoodCategory.css";
import porkfoot from "./buttonicon/porkfoot.svg";
import cafe from "./buttonicon/cafe.svg";
import pizza from "./buttonicon/pizza.svg";
import china from "./buttonicon/china.svg";
import kfood from "./buttonicon/kfood.svg";
import japan from "./buttonicon/japan.svg";
import chicken from "./buttonicon/chicken.svg";
import dessert from "./buttonicon/dessert.svg";
import burger from "./buttonicon/burger.svg";
import sandwich from "./buttonicon/sandwich.svg";
import { Link } from "react-router-dom";

function FoodCategory() {
  return (
    <div className="FoodCategory">
      <div>
        {/* <img className="bee11" src={bee11} alt={bee11} /> */}

        <p className="baedalbee">배달 BEE</p>
        <Link to="/main/cafe">
          <img
            className="category_img"
            id="imcafe"
            src={cafe}
            alt="porkfoot"
          ></img>
        </Link>
        <Link to="/main/porkfood">
          <img
            className="category_img"
            id="imporkfoot"
            src={porkfoot}
            alt="porkfoot"
          ></img>
        </Link>
        <Link to="/main/pizza">
          <img
            className="category_img"
            id="impizza"
            src={pizza}
            alt="porkfoot"
          ></img>
        </Link>
        <Link to="/main/china">
          <img
            className="category_img"
            id="imchina"
            src={china}
            alt="porkfoot"
          ></img>
        </Link>
        <Link to="/main/japan">
          <img
            className="category_img"
            id="imjapan"
            src={japan}
            alt="porkfoot"
          ></img>
        </Link>
        <Link to="/main/kfood">
          <img
            className="category_img"
            id="imkfood"
            src={kfood}
            alt="porkfoot"
          ></img>
        </Link>
        <Link to="/main/chicken">
          <img
            className="category_img"
            id="imchicken"
            src={chicken}
            alt="porkfoot"
          ></img>
        </Link>
        <Link to="/main/dessert">
          <img
            className="category_img"
            id="imdessert"
            src={dessert}
            alt="porkfoot"
          ></img>
        </Link>
        <Link to="/main/burger">
          <img
            className="category_img"
            id="imburger"
            src={burger}
            alt="porkfoot"
          ></img>
        </Link>
        <Link to="/main/sandwich">
          <img
            className="category_img"
            id="imsandwich"
            src={sandwich}
            alt="porkfoot"
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default FoodCategory;
