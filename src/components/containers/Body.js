import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/appContext";
import { Switch, Route } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import Table from "../Table/Table";
import PopUp from "../../components/PopUp/PopUp";
import ElementDetails from "../ElementDetails/ElementDetails";

const Body = () => {
  const { language, setLanguage, sound, setSound } = useContext(Context);
  const [togglePopUp, setTogglePopup] = useToggle();
  const [rotate, setRotate] = useState(window.innerWidth > 599);

  const rotateDevice = () => {
    setRotate(window.innerWidth > 599);
  };

  useEffect(() => {
    window.addEventListener("resize", rotateDevice);
    return () => window.removeEventListener("resize", rotateDevice);
  });

  return (
    <div className="Body">
      {rotate ? (
        <>
          <Switch>
            <Route exact path="/" render={(props) => <Table {...props} />} />
            <Route
              path="/details/:id"
              render={(props) => <ElementDetails {...props} />}
            />
          </Switch>
          <div className="IconsLeftBottom">
            <div className="language-icon iconsBottom" onClick={setLanguage}>
              {language ? "MK" : "EN"}
            </div>
            <div className="soundIcons">
              {sound ? (
                <i
                  className="fas fa-volume-up iconsBottom"
                  onClick={setSound}
                ></i>
              ) : (
                <i
                  className="fas fa-volume-mute iconsBottom"
                  onClick={setSound}
                ></i>
              )}
            </div>
          </div>
          <div className="IconsRightBottom">
            <div className="SocialIcons">
              <a
                href="https://www.facebook.com/brainster.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f iconsSocialMedia"></i>
              </a>
            </div>
            <div className="SocialIcons">
              <a
                href="https://www.instagram.com/brainsterco/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram iconsSocialMedia"></i>
              </a>
            </div>
            <div className="SocialIcons">
              <i
                className="fas fa-ellipsis-h iconsSocialMedia"
                onClick={setTogglePopup}
              ></i>
            </div>
          </div>
          {togglePopUp && <PopUp toggle={setTogglePopup} />}
        </>
      ) : (
        <>
          <img
            className="rotateDevice"
            src={require("../../static/images/rotateDevice.png")}
            alt=""
          />
        </>
      )}
    </div>
  );
};

export default Body;
