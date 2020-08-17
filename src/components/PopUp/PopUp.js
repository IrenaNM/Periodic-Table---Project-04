import React, { useContext } from "react";
import {Context} from "../../context/appContext";

const PopUp = ({ toggle }) => {
  const { language } = useContext(Context);
  return (
    <div className="PopUp">
      <i className="fas fa-times fa-2x searchIcon" onClick={toggle}></i>
      <div className="PopUpFlex">
        <div className="PopUpText">
          {language ? (
            <h1>Developed by the academy students</h1>
          ) : (
            <h1> Изработено од студентите на академијата</h1>
          )}
          <p>web: codepreneurs.co</p>
          <p>email: contact@brainster.co</p>
        </div>
        <div className="ImagesPopUp">
          <img src={require("../../static/images/popUp/edukacija.jpg")} alt="" />
          <img src={require("../../static/images/popUp/IMG_7481.jpg")} alt="" />
          <img src={require("../../static/images/popUp/homepage3.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
