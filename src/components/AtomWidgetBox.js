import React from "react";

import Atom from "../widgets/Atom";
import Plus from "./Plus";
import Minus from "./Minus";

const AtomWidgetBox = ({ onAtomSubClick, onAtomAddClick, AtomCount }) => {
  return (
    <div className="row">
      <div className="coloumn">
        <div className="row">
          <div className="coloumn ">
            <Atom />
          </div>
          <div className="coloumn right">
            <div onClick={onAtomSubClick}>
              <Minus />
            </div>
            <div onClick={onAtomAddClick}>
              <Plus />
            </div>
          </div>
        </div>
      </div>
      <div className="coloumn">
        <div className="row">
          <div className=" coloumn">
            {Array(AtomCount).fill(<Atom />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtomWidgetBox;
