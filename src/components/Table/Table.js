import React, { useContext, useState } from "react";
import Search from "../Search/Search";
import { Context } from "../../context/appContext";
import SingleElement from "./SingleElement";
import useToggle from "../../hooks/useToggle";
import useSound from "use-sound";
import soundLabel from "../../static/sounds/hover.mp3";

const Table = () => {
  const {
    toggleSearch,
    setToggleSearch,
    ElementsEN,
    ElementsMK,
    language,
    sound,
  } = useContext(Context);
  const [iframeWikiLink, setIframeWikiLink] = useState("");
  const [toggleIframe, setToggleIframe] = useToggle();

  const handleWiki = (wikiLink) => {
    setIframeWikiLink(wikiLink);
    setToggleIframe();
  };
  const [play, { stop }] = useSound(soundLabel, {
    volume: 1,
    interrupt: true,
    playbackRate: 1,
  });

  return (
    <div className="Table">
      {toggleIframe && (
        <div className={toggleIframe ? "IframeToggle active" : null}>
          <i onClick={setToggleIframe} className="fas fa-times fa-2x"></i>
          <iframe title="wikipediaDetailsGroup" src={iframeWikiLink}></iframe>
        </div>
      )}
      {toggleSearch && <Search />}
      <h1 className="Title">
        {language
          ? "Periodic Table of Elements"
          : "Периоден систем на елементи"}
      </h1>
      {toggleSearch ? null : (
        <i
          className="fas fa-search fa-2x searchIcon"
          onClick={setToggleSearch}
        ></i>
      )}
      <div className="Legend">
        <h2>{language ? "Legend" : "Легенда"}</h2>
        <div className="LegentMetalAll">
          <div className="LegendMetal">
            <div className="Square алкаленметал"></div>
            <span>{language ? "Alkali Metals" : "Алкални Метали"}</span>
          </div>
          <div className="LegendMetal">
            <div className="Square алкалноземеленметал"></div>
            <span>
              {language ? "Alkali Earth Metals" : "Алкални Земја Метали"}
            </span>
          </div>
          <div className="LegendMetal">
            <div className="Square преоденметал"></div>
            <span>{language ? "Transition Metals" : "Преодни Метали"}</span>
          </div>
          <div className="LegendMetal">
            <div className="Square лантанид"></div>
            <span>{language ? "Lanthanides" : "Лантаниди"}</span>
          </div>
          <div className="LegendMetal">
            <div className="Square актинид"></div>
            <span>{language ? "Actinides" : "Актиниди"}</span>
          </div>
        </div>
        <div className="LegentMetalAll">
          <div className="LegendMetal">
            <div className="Square пост-транзицискиметал"></div>
            <span>{language ? "Other Metals" : "Други Метали"}</span>
          </div>
          <div className="LegendMetal">
            <div className="Square металоид"></div>
            <span>{language ? "Metalloids" : "Металоиди"}</span>
          </div>
          <div className="LegendMetal">
            <div className="Square дијатомскинеметални"></div>
            <span>{language ? "None-Metals" : "Неметали"}</span>
          </div>
          <div className="LegendMetal">
            <div className="Square халогени"></div>
            <span>{language ? "Halogens" : "Халогени"}</span>
          </div>
          <div className="LegendMetal">
            <div className="Square благороденгас"></div>
            <span>{language ? "Noble Gases" : "Благородни Гасови"}</span>
          </div>
        </div>
      </div>
      <div className="TableTop">
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Alkali_metal"
                  : "https://mk.wikipedia.org/wiki/%D0%90%D0%BB%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD_%D0%BC%D0%B5%D1%82%D0%B0%D0%BB"
              )
            }
          >
            1
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 1 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 1 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Alkaline_earth_metal"
                  : "https://mk.wikipedia.org/wiki/%D0%97%D0%B5%D0%BC%D0%BD%D0%BE%D0%B0%D0%BB%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD_%D0%BC%D0%B5%D1%82%D0%B0%D0%BB"
              )
            }
          >
            2
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 2 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 2 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Group_3_element"
                  : "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_3_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC"
              )
            }
          >
            3
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 3 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 3 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Group_4_element"
                  : "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_4_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC"
              )
            }
          >
            4
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 4 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 4 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Group_5_element"
                  : "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_5_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC"
              )
            }
          >
            5
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 5 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 5 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Group_6_element"
                  : "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_6_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC"
              )
            }
          >
            6
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 6 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 6 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Group_7_element"
                  : "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_7_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC"
              )
            }
          >
            7
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 7 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 7 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Group_8_element"
                  : "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_8_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC"
              )
            }
          >
            8
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 8 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 8 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Group_9_element"
                  : "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_9_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC"
              )
            }
          >
            9
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 9 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 9 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Group_10_element"
                  : "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_10_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC"
              )
            }
          >
            10
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 10 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 10 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Group_11_element"
                  : "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_11_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC"
              )
            }
          >
            11
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 11 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 11 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Group_12_element"
                  : "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_12_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC"
              )
            }
          >
            12
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 12 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 12 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Boron_group"
                  : "https://mk.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%BE%D0%B2%D0%B0_%D0%B3%D1%80%D1%83%D0%BF%D0%B0"
              )
            }
          >
            13
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 13 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 13 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Carbon_group"
                  : "https://mk.wikipedia.org/wiki/%D0%88%D0%B0%D0%B3%D0%BB%D0%B5%D1%80%D0%BE%D0%B4%D0%BD%D0%B0_%D0%B3%D1%80%D1%83%D0%BF%D0%B0"
              )
            }
          >
            14
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 14 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 14 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Pnictogen"
                  : "https://mk.wikipedia.org/wiki/%D0%90%D0%B7%D0%BE%D1%82%D0%BD%D0%B0_%D0%B3%D1%80%D1%83%D0%BF%D0%B0"
              )
            }
          >
            15
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 15 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 15 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Chalcogen"
                  : "https://bs.wikipedia.org/wiki/Halkogeni_elementi"
              )
            }
          >
            16
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 16 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 16 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Halogen"
                  : "https://mk.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BB%D0%BE%D0%B3%D0%B5%D0%BD"
              )
            }
          >
            17
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 17 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 17 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="tableRow">
          <label
            onMouseEnter={sound ? play : stop}
            onClick={() =>
              handleWiki(
                language
                  ? "https://en.wikipedia.org/wiki/Noble_gas"
                  : "https://mk.wikipedia.org/wiki/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B5%D0%BD_%D0%B3%D0%B0%D1%81"
              )
            }
          >
            18
          </label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.xpos === 18 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.xpos === 18 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
      </div>
      <div className="TableBottom">
        <div className="BottomRowOne">
          <label>{language ? "Lanthanides" : "Лантханиди"}</label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.ypos === 9 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.ypos === 9 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
        <div className="BottomRowTwo">
          <label htmlFor="">{language ? "Actinides" : "Актиниди"}</label>
          {language
            ? ElementsEN.map(
                (element) =>
                  element.ypos === 10 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )
            : ElementsMK.map(
                (element) =>
                  element.ypos === 10 && (
                    <SingleElement elContent={element} key={element.name} />
                  )
              )}
        </div>
      </div>
    </div>
  );
};

export default Table;
