import React from "react";

import Dumbbel from "../widgets/Dumbbel";
import Plus from "./Plus";
import Minus from "./Minus";

const DumbbelWidgetBox = ({ onDumbbelSubClick, onDumbbelAddClick, DumbbelCount }) => {
  return (
    <div className="row">
        <div className="coloumn">
          <div className="row">
            <div className="coloumn ">
              <Dumbbel />
            </div>
            <div className="coloumn right">
              <div onClick={onDumbbelSubClick}>
                <Minus  />
              </div>
              <div onClick={onDumbbelAddClick}>
                <Plus />
              </div>
            </div>
          </div>
        </div>
        <div className="coloumn">
          <div className="row">
            <div className=" coloumn">
              {Array(DumbbelCount).fill(<Dumbbel />)}
            </div>
          </div>
        </div>
      </div>
  );
};

export default DumbbelWidgetBox;
