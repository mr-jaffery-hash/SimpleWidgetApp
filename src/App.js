import "./style.css";

import AtomWidgetBox from "./components/AtomWidgetBox";
import BellWidgetBox from "./components/BellWidgetBox";
import AngryWidgetBox from "./components/AngryWidgetBox";
import DumbbelWidgetBox from "./components/DumbbelWidgetBox";

import React, { useState } from "react";

function App() {
  const [AngryCount, setAngryCount] = useState(0);
  const [BellCount, setBellCount] = useState(0);
  const [AtomCount, setAtomCount] = useState(0);
  const [DumbbelCount, setDumbbelCount] = useState(0);

  const onBellAddClick = () => {
    let temp = BellCount + 1;
    setBellCount(temp);
  };
  const onAngryAddClick = () => {
    let temp = AngryCount + 1;
    setAngryCount(temp);
  };
  const onAtomAddClick = () => {
    let temp = AtomCount + 1;
    setAtomCount(temp);
  };
  const onDumbbelAddClick = () => {
    let temp = DumbbelCount + 1;
    setDumbbelCount(temp);
  };

  const onBellSubClick = () => {
    if (BellCount === 0) return;
    let temp = BellCount - 1;
    setBellCount(temp);
  };
  const onAngrySubClick = () => {
    if (AngryCount === 0) return;
    let temp = AngryCount - 1;
    setAngryCount(temp);
  };
  const onAtomSubClick = () => {
    if (AtomCount === 0) return;
    let temp = AtomCount - 1;
    setAtomCount(temp);
  };
  const onDumbbelSubClick = () => {
    if (DumbbelCount === 0) return;
    let temp = DumbbelCount - 1;
    setDumbbelCount(temp);
  };

  return (
    <div>
      <BellWidgetBox
        onBellSubClick={onBellSubClick}
        onBellAddClick={onBellAddClick}
        BellCount={BellCount}
      />

      <AngryWidgetBox
        onAngrySubClick={onAngrySubClick}
        onAngryAddClick={onAngryAddClick}
        AngryCount={AngryCount}
      />

      <div className="row">
        <AtomWidgetBox
          onAtomSubClick={onAtomSubClick}
          onAtomAddClick={onAtomAddClick}
          AtomCount={AtomCount}
        />
      </div>

      <DumbbelWidgetBox
        onDumbbelSubClick={onDumbbelSubClick}
        onDumbbelAddClick={onDumbbelAddClick}
        DumbbelCount={DumbbelCount}
      />
    </div>
  );
}

export default App;
