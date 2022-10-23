import React from "react";

import Bell from "../widgets/Bell";
import Plus from "./Plus";
import Minus from "./Minus";

const BellWidgetBox = ({ onBellSubClick, onBellAddClick, BellCount }) => {
  return (
    <div className="row">
        <div className="coloumn">
          <div className="row">
            <div className="coloumn ">
              <Bell />
            </div>
            <div className="coloumn right">
              <div onClick={onBellSubClick}>
                <Minus  />
              </div>
              <div onClick={onBellAddClick}>
                <Plus />
              </div>
            </div>
          </div>
        </div>
        <div className="coloumn">
          <div className="row">
            <div className=" coloumn">
              {Array(BellCount).fill(<Bell />)}
            </div>
          </div>
        </div>
      </div>
  );
};

export default BellWidgetBox;
