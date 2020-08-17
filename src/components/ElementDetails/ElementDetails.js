import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/appContext";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ElementPropertyListItem from "../ElementDetails/ElementPropertyListItem";

const ElementDetails = (props) => {
  const { ElementsEN, ElementsMK, language } = useContext(Context);
  const [currentElement, setCurrentElement] = useState({});

  //carousel settings
  let carouselSettings = {
    adaptiveHeight: true,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    fade: true,
  };

  const elementProperties = [
    // 1. Overview
    {
      id: 1,
      english: "Symbol",
      mkd: "Симбол",
      value: currentElement.symbol,
      wrapper: "Overview",
    },
    {
      id: 2,
      english: "Atomic number",
      mkd: "Атомски број",
      value: currentElement.number,
      wrapper: "Overview",
    },
    {
      id: 3,
      english: "Atomic weight",
      mkd: "Атомска тежина",
      value: currentElement.atomic_mass,
      wrapper: "Overview",
    },
    {
      id: 4,
      english: "Density",
      mkd: "Густина",
      value: currentElement.density,
      wrapper: "Overview",
    },
    {
      id: 5,
      english: "Melting point",
      mkd: "Точка на топење",
      value: currentElement.melt,
      wrapper: "Overview",
    },
    {
      id: 6,
      english: "Boiling point",
      mkd: "Точка на вриење",
      value: currentElement.boil,
      wrapper: "Overview",
    },
    // 2. Terminal
    {
      id: 7,
      english: "Phase",
      mkd: "Фаза",
      value: currentElement.phase,
      wrapper: "Therminal",
    },
    {
      id: 8,
      english: "Melting point",
      mkd: "Точка на топење",
      value: currentElement.melt,
      wrapper: "Therminal",
    },
    {
      id: 9,
      english: "Boiling point",
      mkd: "Точка на вриење",
      value: currentElement.boil,
      wrapper: "Therminal",
    },
    {
      id: 10,
      english: "Boiling point",
      mkd: "Точка на вриење",
      value: currentElement.boil,
      wrapper: "Terminal",
    },
    {
      id: 11,
      english: "Melting point",
      mkd: "Точка на топење",
      value: currentElement.melt,
      wrapper: "Terminal",
    },
    {
      id: 12,
      english: "Absolute boiling point",
      mkd: "Апсолутна точка на вриење",
      value: currentElement.Absolute_Boiling_Point,
      wrapper: "Therminal",
    },
    {
      id: 13,
      english: "Absolute melting Pont",
      mkd: "Апсолутна точка на топење",
      value: currentElement.Absolute_Melting_Point,
      wrapper: "Therminal",
    },
    {
      id: 14,
      english: "Critical pressure",
      mkd: "Критичен притисок",
      value: currentElement.Critical_Pressure,
      wrapper: "Therminal",
    },
    {
      id: 15,
      english: "Critical temperature",
      mkd: "Критична температура",
      value: currentElement.Critical_Temperature,
      wrapper: "Therminal",
    },
    {
      id: 16,
      english: "Heat of fusion",
      mkd: "Топлина на фузија",
      value: currentElement.Heat_of_Fusion,
      wrapper: "Therminal",
    },
    {
      id: 17,
      english: "Heat of vaporization",
      mkd: "Топлина на испарување",
      value: currentElement.Heat_of_Vaporization,
      wrapper: "Therminal",
    },
    {
      id: 18,
      english: "Heat of combustion",
      mkd: "Топлина на согорување",
      value: "N/A",
      wrapper: "Therminal",
    },
    {
      id: 19,
      english: "Specific heat",
      mkd: "Специфична топлина",
      value: currentElement.Specific_Hea,
      wrapper: "Therminal",
    },
    {
      id: 20,
      english: "Adiabatic index",
      mkd: "Адиабатски индекс",
      value: currentElement.Adiabatic_Index,
      wrapper: "Therminal",
    },
    {
      id: 21,
      english: "Neel point",
      mkd: "Точка Нил",
      value: currentElement.Neel_Point,
      wrapper: "Therminal",
    },
    {
      id: 22,
      english: "Thermal conductivity",
      mkd: "Термичка спроводливост",
      value: currentElement.Thermal_Conductivity,
      wrapper: "Therminal",
    },
    {
      id: 23,
      english: "Thermal expansion",
      mkd: "Термичка експанзија",
      value: currentElement.Thermal_Expansion,
      wrapper: "Therminal",
    },
    // 3. Phisical
    {
      id: 24,
      english: "Density",
      mkd: "Густина",
      value: currentElement.density,
      wrapper: "Phisical",
    },
    {
      id: 25,
      english: "Density (liquid)",
      mkd: "Густина (течност)",
      value: currentElement.Density_Liquid,
      wrapper: "Phisical",
    },
    {
      id: 26,
      english: "Molar volume",
      mkd: "Моларен волумен",
      value: currentElement.Molar_Volume,
      wrapper: "Phisical",
    },
    {
      id: 27,
      english: "Brinell hardness",
      mkd: "Бринел тврдост",
      value: "N/A",
      wrapper: "Phisical",
    },
    {
      id: 28,
      english: "Mohs hardness",
      mkd: "Мохсова цврстина",
      value: "N/A",
      wrapper: "Phisical",
    },
    {
      id: 29,
      english: "Vickers hardness",
      mkd: "Викерс цврстина",
      value: "N/A",
      wrapper: "Phisical",
    },
    {
      id: 30,
      english: "Bulk modulus",
      mkd: "Булк модул",
      value: "N/A",
      wrapper: "Phisical",
    },
    {
      id: 31,
      english: "Shear modules",
      mkd: "Модул на смолкнување",
      value: "N/A",
      wrapper: "Phisical",
    },
    {
      id: 32,
      english: "Young moduls",
      mkd: "Јунгов Модул",
      value: "N/A",
      wrapper: "Phisical",
    },
    {
      id: 33,
      english: "Poission ratio",
      mkd: "Отровен сооднос",
      value: "N/A",
      wrapper: "Phisical",
    },
    {
      id: 34,
      english: "Refractive index",
      mkd: "Индекс на прекршување",
      value: currentElement.Refractive_Index,
      wrapper: "Phisical",
    },
    {
      id: 35,
      english: "Speed of sound",
      mkd: "Брзина на звук",
      value: currentElement.Speed_of_Sound,
      wrapper: "Phisical",
    },
    {
      id: 36,
      english: "Thermal conductivity",
      mkd: "Термална спроводливост",
      value: currentElement.Thermal_Conductivity,
      wrapper: "Phisical",
    },
    {
      id: 37,
      english: "Thermal expansion",
      mkd: "Термална експанзија",
      value: currentElement.Thermal_Expansion,
      wrapper: "Phisical",
    },
    // 4. Reactivity
    {
      id: 38,
      english: "Valence",
      mkd: "Валентност",
      value: currentElement.Valence,
      wrapper: "Reactivity",
    },
    {
      id: 39,
      english: "Electronegativity",
      mkd: "Електронегативност",
      value: currentElement.Electronegativity,
      wrapper: "Reactivity",
    },
    {
      id: 40,
      english: "Electron afinity",
      mkd: "Електронски афинитет",
      value: currentElement.ElectronAffinity,
      wrapper: "Reactivity",
    },
    {
      id: 41,
      english: "Ionization energy",
      mkd: "Ионска енергија",
      value: currentElement.Heat_of_Fusion,
      wrapper: "Reactivity",
    },
    // 5. Safety
    {
      id: 42,
      english: "Autoignition point",
      mkd: "Аутоигнитивна точка",
      value: "N/A",
      wrapper: "Safety",
    },
    {
      id: 43,
      english: "Flashpoint",
      mkd: "Невралгична точка",
      value: currentElement.melt,
      wrapper: "Safety",
    },
    {
      id: 44,
      english: "Heat of combustion",
      mkd: "Топлина на согорување",
      value: "N/A",
      wrapper: "Safety",
    },
    // 6. Classifications
    {
      id: 45,
      english: "Alternate names",
      mkd: "Алтернативно име",
      value: currentElement.Alternate_Names,
      wrapper: "Classifications",
    },
    {
      id: 46,
      english: "Names of alotropes",
      mkd: "Имиња на алотропи",
      value: currentElement.Names_of_Allotropes,
      wrapper: "Classifications",
    },
    {
      id: 47,
      english: "Block",
      mkd: "Блок",
      value: currentElement.Block,
      wrapper: "Classifications",
    },
    {
      id: 48,
      english: "Group",
      mkd: "Група",
      value: currentElement.Group,
      wrapper: "Classifications",
    },
    {
      id: 49,
      english: "Period",
      mkd: "Период",
      value: currentElement.Period,
      wrapper: "Classifications",
    },
    {
      id: 50,
      english: "Electron Conficuration",
      mkd: "Eлектронска конфигурација",
      value: currentElement.Electron_Configuration,
      wrapper: "Classifications",
    },
    {
      id: 51,
      english: "Color",
      mkd: "Боја",
      value: currentElement.appearance,
      wrapper: "Classifications",
    },
    {
      id: 52,
      english: "Discovery",
      mkd: "Откриен од",
      value: currentElement.discovered_by,
      wrapper: "Classifications",
    },
    {
      id: 53,
      english: "Gas Phase",
      mkd: "Гасна фаза",
      value: currentElement.phase,
      wrapper: "Classifications",
    },
    // 7. Electrical
    {
      id: 54,
      english: "Electrical type",
      mkd: "Електричен тип",
      value: "N/A",
      wrapper: "Electrical",
    },
    {
      id: 55,
      english: "Electrical Conductivity",
      mkd: "Електрична спроводливост",
      value: "N/A",
      wrapper: "Electrical",
    },
    {
      id: 56,
      english: "Resistivity",
      mkd: "Отпорност",
      value: "N/A",
      wrapper: "Electrical",
    },
    {
      id: 57,
      english: "Superconducting point",
      mkd: "Суперспроводлива точка",
      value: "N/A",
      wrapper: "Electrical",
    },
    // 8. Magnetic
    {
      id: 58,
      english: "Magnetic type",
      mkd: "Магнетен тип",
      value: currentElement.Magnetic_Type,
      wrapper: "Magnetic",
    },
    {
      id: 59,
      english: "Curie Point",
      mkd: "Точка на лекување",
      value: currentElement.Curie_Point,
      wrapper: "Magnetic",
    },
    {
      id: 60,
      english: "Mass magnetic susceptibility",
      mkd: "Масовна магнетна осетливост",
      value: currentElement.Mass_Magnetic_Susceptibility,
      wrapper: "Magnetic",
    },
    {
      id: 61,
      english: "Molar magnetic susceptibility",
      mkd: "Моларна магнетна осетливост",
      value: currentElement.Molar_Magnetic_Susceptibility,
      wrapper: "Magnetic",
    },
    {
      id: 62,
      english: "Volume magnetic susceptibility",
      mkd: "Волуменска магнетна осетливост",
      value: currentElement.Volume_Magnetic_Susceptibility,
      wrapper: "Magnetic",
    },
    // 9. Abundances
    {
      id: 63,
      english: "In universe",
      mkd: "Во универзумот",
      value: currentElement.in_Universe,
      wrapper: "Abundances",
    },
    {
      id: 64,
      english: "In sun",
      mkd: "Во сонцето",
      value: currentElement.in_Sun,
      wrapper: "Abundances",
    },
    {
      id: 65,
      english: "In meteorites",
      mkd: "Во метеоритите",
      value: currentElement.in_Meteorites,
      wrapper: "Abundances",
    },
    {
      id: 66,
      english: "In earth`s crust",
      mkd: "Во земјината кора",
      value: currentElement.in_Earths_Crust,
      wrapper: "Abundances",
    },
    {
      id: 67,
      english: "In oceans",
      mkd: "Во океаните",
      value: currentElement.in_Oceans,
      wrapper: "Abundances",
    },
    {
      id: 68,
      english: "In humans",
      mkd: "Во луѓето",
      value: currentElement.in_Humans,
      wrapper: "Abundances",
    },
    // 10. Atomic
    {
      id: 69,
      english: "Atomic radius",
      mkd: "Атомски радиус",
      value: currentElement.Atomic_Radius,
      wrapper: "Atomic",
    },
    {
      id: 70,
      english: "Covalent radius",
      mkd: "Ковалентен радиус",
      value: currentElement.Covalent_Radius,
      wrapper: "Atomic",
    },
    {
      id: 71,
      english: "Van der Waals radius",
      mkd: "Ван дер Валс радиус",
      value: currentElement.Van_der_Waals_Radius,
      wrapper: "Atomic",
    },
    {
      id: 72,
      english: "Crystal structure",
      mkd: "Кристална структура",
      value: currentElement.Crystal_Structure_Simple,
      wrapper: "Atomic",
    },
    {
      id: 73,
      english: "Lattice angles",
      mkd: "Латис агли",
      value: currentElement.Lattice_Angles,
      wrapper: "Atomic",
    },
    {
      id: 74,
      english: "Lattice constants",
      mkd: "Латис константи",
      value: currentElement.Lattice_Constants,
      wrapper: "Atomic",
    },
    {
      id: 75,
      english: "Lattice constants",
      mkd: "Латис константи",
      value: currentElement.Lattice_Constants,
      wrapper: "Atomic",
    },
    {
      id: 76,
      english: "Space group name",
      mkd: "Име на просторна група",
      value: currentElement.Space_Group_Name,
      wrapper: "Atomic",
    },
    {
      id: 77,
      english: "Space group number",
      mkd: "Име на просторен број",
      value: currentElement.Space_Group_Number,
      wrapper: "Atomic",
    },
    // 11. Nuclear
    {
      id: 78,
      english: "Half-Life",
      mkd: "Пола живот",
      value: currentElement.Half_Life,
      wrapper: "Nuclear",
    },
    {
      id: 79,
      english: "Lifetime",
      mkd: "Цел живот",
      value: currentElement.Lifetime,
      wrapper: "Nuclear",
    },
    {
      id: 80,
      english: "Decay mode",
      mkd: "Режим на распаѓање",
      value: currentElement.Decay_Mode,
      wrapper: "Nuclear",
    },
    {
      id: 81,
      english: "Quantum numbers",
      mkd: "Квантни броеви",
      value: currentElement.Quantum_Numbers,
      wrapper: "Nuclear",
    },
    {
      id: 82,
      english: "Neutron cross section",
      mkd: "Неутронски пресек",
      value: currentElement.Neutron_Cross_Section,
      wrapper: "Nuclear",
    },
    {
      id: 83,
      english: "Neutron mass absorption",
      mkd: "Неутронска маса на абсорбција",
      value: currentElement.Neutron_Mass_Absorption,
      wrapper: "Nuclear",
    },
    {
      id: 84,
      english: "Known isotopes",
      mkd: "Познати изотопи",
      value: currentElement.Known_Isotopes,
      wrapper: "Nuclear",
    },
    {
      id: 85,
      english: "Stable isotopes",
      mkd: "Стабилни изотопи",
      value: currentElement.Stable_Isotopes,
      wrapper: "Nuclear",
    },
    {
      id: 86,
      english: "Isotopic Abundances",
      mkd: "Изотропни изобилства",
      value: currentElement.Isotopic_Abundances,
      wrapper: "Nuclear",
    },
  ];
  // filtered elements
  const [filteredElements, setFilteredElements] = useState([]);
  // clean search on language change
  const [searchedElement, setSearchedElement] = useState("");

  // all filtered categories
  const overviewElements = filteredElements.filter(
    (el) => el.wrapper === "Overview"
  );
  const therminalElements = filteredElements.filter(
    (el) => el.wrapper === "Therminal"
  );
  const phisicalElements = filteredElements.filter(
    (el) => el.wrapper === "Phisical"
  );
  const reactivityElements = filteredElements.filter(
    (el) => el.wrapper === "Reactivity"
  );
  const safetyElements = filteredElements.filter(
    (el) => el.wrapper === "Safety"
  );
  const classificationsElements = filteredElements.filter(
    (el) => el.wrapper === "Classifications"
  );
  const electricalElements = filteredElements.filter(
    (el) => el.wrapper === "Electrical"
  );
  const magneticElements = filteredElements.filter(
    (el) => el.wrapper === "Magnetic"
  );
  const abundancesElements = filteredElements.filter(
    (el) => el.wrapper === "Abundances"
  );
  const atomicElements = filteredElements.filter(
    (el) => el.wrapper === "Atomic"
  );
  const nuclearElements = filteredElements.filter(
    (el) => el.wrapper === "Nuclear"
  );

  useEffect(() => {
    // on currentElement change
    setFilteredElements(elementProperties);
  }, [currentElement]);

  useEffect(() => {
    language
      ? setCurrentElement(
          ElementsEN.find(
            (element) => element.number === parseInt(props.match.params.id)
          )
        )
      : setCurrentElement(
          ElementsMK.find(
            (element) => element.number === parseInt(props.match.params.id)
          )
        );
    setSearchedElement("");
  }, [props.match.params.id, language, ElementsMK, ElementsEN]);

  const handleChange = (e) => {
    setSearchedElement(e.target.value);
    let query = e.target.value.trim().toLowerCase();
    if (query) {
      // on input change set filtered elements ...
      const filtered = elementProperties.filter((el) =>
        !language
          ? el.mkd.toLowerCase().includes(query)
          : el.english.toLowerCase().includes(query)
      );
      setFilteredElements(filtered);
    } else {
      setFilteredElements(elementProperties);
    }
  };

  return (
    <div className="ElementDetails">
      <Link to="/">
        <i className="fas fa-times fa-2x searchIcon"></i>
      </Link>
      <div className="DetailsLeft">
        <div className="DetailsLeftTop">
          <div className="Left">
            <div className="SymbolName">
              <div className="ElementDetailsSymbol">
                <h1>{currentElement.symbol}</h1>
                <p className="ElementDetailsSymbolNum">
                  {currentElement.number}
                </p>
                <p className="ElementDetailsSymbolWeight">
                  {currentElement.atomic_mass}
                </p>
                <ul>
                  {currentElement.shells
                    ? currentElement.shells.map((el, index) => {
                        return (
                          <li
                            className="ElementDetailsSymbolShells"
                            key={index}
                          >
                            {el}
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
              <div>
                <h1 className="ElementDetailsName">{currentElement.name}</h1>
              </div>
            </div>
            <div className="ElementDetailsDetails">
              <div className="ElementDetailsFour">
                <div className="ElementDetailsFourDiv">
                  <p>{language ? "Atomic weight" : "Атомска маса"}</p>
                </div>
                <div>
                  <p className="SquareDetails"></p>
                  <p>{currentElement.atomic_mass}</p>
                </div>
              </div>
              <div className="ElementDetailsFour">
                <div className="ElementDetailsFourDiv">
                  <p>{language ? "Density" : "Густина"}</p>
                </div>
                <div>
                  <p className="SquareDetails"></p>
                  <p>{currentElement.density}</p>
                </div>
              </div>
              <div className="ElementDetailsFour">
                <div className="ElementDetailsFourDiv">
                  <p>{language ? "Melting point" : "Точка на топење"}</p>
                </div>
                <div>
                  <p className="SquareDetails"></p>
                  <p>{currentElement.melt}</p>
                </div>
              </div>
              <div className="ElementDetailsFour">
                <div className="ElementDetailsFourDiv">
                  <p>{language ? "Boiling point" : "Точка на вриење"}</p>
                </div>
                <div>
                  <p className="SquareDetails"></p>
                  <p>{currentElement.boil}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ElementDetailsPdf">
            <div className="ElementDetailsP" style={{ position: "absolute" }}>
              Element-Details Pdf
              <a
                className="btn btn-secondary btn-lg"
                href={require("../../periodicTableElements.pdf")}
                download
              >
                <i className="fas fa-file-pdf"></i>
              </a>
            </div>

            <i className="fas fa-ellipsis-h"></i>
            <p>{currentElement.summary}</p>
          </div>
        </div>

        <div className="DetailsLeftBottom">
          <div className="ElementDetailPicture">
            <img
              src={require(`../../static/images/staticImg/${
                currentElement.symbol ? currentElement.symbol : "O"
              }.jpg`)}
              alt={currentElement.symbol}
            />
          </div>
          <div className="ElementDetailSlider">
            <Slider className="slider" {...carouselSettings}>
              <div className="slide">
                <img
                  src={require(`../../static/images/elements/${
                    currentElement.symbol ? currentElement.symbol : "O"
                  }/0.jpg`)}
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src={require(`../../static/images/elements/${
                    currentElement.symbol ? currentElement.symbol : "O"
                  }/1.jpg`)}
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src={require(`../../static/images/elements/${
                    currentElement.symbol ? currentElement.symbol : "O"
                  }/2.jpg`)}
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="DetailsRight">
        <div className="ElementDetailsSearch">
          <i className="fas fa-search"></i>
          <input
            value={searchedElement}
            onChange={handleChange}
            type="text"
            placeholder={language ? "Search ..." : "Барај ..."}
          />
        </div>
        {overviewElements.length ? (
          <div className="Overview">
            <p className="DetailsTit">
              {language ? "1.0 Overview" : "1.0 Преглед"}
            </p>
            <hr />
            <div className="DetailsRightElementDetails">
              {overviewElements.map((element) => {
                return (
                  <ElementPropertyListItem details={element} key={element.id} />
                );
              })}
            </div>
          </div>
        ) : null}
        {therminalElements.length ? (
          <div className="Therminal">
            <p className="DetailsTit">
              {language
                ? "2.0 Therminal properties"
                : "2.0 Терминални Својства"}
            </p>
            <hr />
            <div className="DetailsRightElementDetails">
              {therminalElements.map((element) => {
                return (
                  <ElementPropertyListItem details={element} key={element.id} />
                );
              })}
            </div>
          </div>
        ) : null}
        {phisicalElements.length ? (
          <div className="Phisical">
            <p className="DetailsTit">
              {language ? "3.0 Physical properties" : "3.0 Физички Својства"}
            </p>
            <hr />
            <div className="DetailsRightElementDetails">
              {phisicalElements.map((element) => {
                return (
                  <ElementPropertyListItem details={element} key={element.id} />
                );
              })}
            </div>
          </div>
        ) : null}
        {reactivityElements.length ? (
          <div className="Reactivity">
            <p className="DetailsTit">
              {language ? "4.0 Reactivity" : "4.0 Реактивност"}
            </p>
            <hr />
            <div className="DetailsRightElementDetails">
              {reactivityElements.map((element) => {
                return (
                  <ElementPropertyListItem details={element} key={element.id} />
                );
              })}
            </div>
          </div>
        ) : null}
        {safetyElements.length ? (
          <div className="Safety">
            <p className="DetailsTit">
              {language ? "5.0 Safety" : "5.0 Сигурност"}
            </p>
            <hr />
            <div className="DetailsRightElementDetails">
              {safetyElements.map((element) => {
                return (
                  <ElementPropertyListItem details={element} key={element.id} />
                );
              })}
            </div>
          </div>
        ) : null}
        {classificationsElements.length ? (
          <div className="Classifications">
            <p>{language ? "6.0 Classifications" : "6.0 Класификации"}</p>
            <hr />
            <div className="DetailsRightElementDetails">
              {classificationsElements.map((element) => {
                return (
                  <ElementPropertyListItem details={element} key={element.id} />
                );
              })}
            </div>
          </div>
        ) : null}
        {electricalElements.length ? (
          <div className="Electrical">
            <p className="DetailsTit">
              {language
                ? "7.0 Electrical properties"
                : "7.0 Електрични својства"}
            </p>
            <hr />
            <div className="DetailsRightElementDetails">
              {electricalElements.map((element) => {
                return (
                  <ElementPropertyListItem details={element} key={element.id} />
                );
              })}
            </div>
          </div>
        ) : null}
        {magneticElements.length ? (
          <div className="Magnetic">
            <p className="DetailsTit">
              {language ? "8.0 Magnetic properties" : "8.0 Магнетни својства"}
            </p>
            <hr />
            <div className="DetailsRightElementDetails">
              {magneticElements.map((element) => {
                return (
                  <ElementPropertyListItem details={element} key={element.id} />
                );
              })}
            </div>
          </div>
        ) : null}
        {abundancesElements.length ? (
          <div className="Abundances">
            <p className="DetailsTit">
              {language ? "9.0 Abundances" : "9.0 Изобилствa"}
            </p>
            <hr />
            <div className="DetailsRightElementDetails">
              {abundancesElements.map((element) => {
                return (
                  <ElementPropertyListItem details={element} key={element.id} />
                );
              })}
            </div>
          </div>
        ) : null}
        {atomicElements.length ? (
          <div className="Atomic">
            <p className="DetailsTit">
              {language
                ? "10.0 Atomic dimensions and structire"
                : "10.0 Атомски димензии и структури"}
            </p>
            <hr />
            <div className="DetailsRightElementDetails">
              {atomicElements.map((element) => {
                return (
                  <ElementPropertyListItem details={element} key={element.id} />
                );
              })}
            </div>
          </div>
        ) : null}
        {nuclearElements.length ? (
          <div className="Nuclear">
            <p className="DetailsTit">
              {language ? "11.0 Nuclear properties" : "11.0 Нуклеарни својства"}
            </p>
            <hr />
            <div className="DetailsRightElementDetails">
              {nuclearElements.map((element) => {
                return (
                  <ElementPropertyListItem details={element} key={element.id} />
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ElementDetails;
