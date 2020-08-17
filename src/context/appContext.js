import React, { createContext } from "react";
import useToggle from "../hooks/useToggle";
import ElementsEN from "../static/db/PeriodicTableEN";
import ElementsMK from "../static/db/PeriodicTableMK";

export const Context = createContext({});

export const Provider = (props) => {
  // language change toggle
  const [language, setLanguage] = useToggle();
  // sound change toggle
  const [sound, setSound] = useToggle();
  // search toggle
  const [toggleSearch, setToggleSearch] = useToggle();

  let values = {
    setLanguage,
    language,
    sound,
    setSound,
    toggleSearch,
    setToggleSearch,
    ElementsEN,
    ElementsMK,
  };

  return <Context.Provider value={values}>{props.children}</Context.Provider>;
};
