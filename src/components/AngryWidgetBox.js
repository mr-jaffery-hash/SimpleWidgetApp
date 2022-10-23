import React from "react";

import Angry from "../widgets/Angry";
import Plus from "./Plus";
import Minus from "./Minus";

const AngryWidgetBox = ({ onAngrySubClick, onAngryAddClick, AngryCount }) => {
  return (
    <div className="row">
        <div className="coloumn">
          <div className="row">
            <div className="coloumn ">
              <Angry />
            </div>
            <div className="coloumn right">
              <div onClick={onAngrySubClick}>
                <Minus  />
              </div>
              <div onClick={onAngryAddClick}>
                <Plus />
              </div>
            </div>
          </div>
        </div>
        <div className="coloumn">
          <div className="row">
            <div className=" coloumn">
              {Array(AngryCount).fill(<Angry />)}
            </div>
          </div>
        </div>
      </div>
  );
};

export default AngryWidgetBox;
