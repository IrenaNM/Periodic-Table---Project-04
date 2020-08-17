import React, { useContext } from "react";
import { Context } from "../../context/appContext";

const ElementPropertyListItem = ({ details}) => {
  const { language } = useContext(Context);

    return (
    <div className="DetailsFlex">
      <p className="DetailsRightLeftFlex">
        {language ? details.english : details.mkd}
      </p>
      <p className="DetailsRightRightFlex">{details.value}</p>
    </div>
  );
};

export default ElementPropertyListItem;
