import React, { useState } from "react";
import Header from "../components/header";
import Button from "react-bootstrap/Button";
import { Position } from "./card/Position";
import { Nationality } from "./card/Nationality";
import { Stats } from "./card/Stats";
import { Name } from "./card/Names";

function CardGenerator() {
  // Wykorzystanie useState do przechowywania wylosowanych danych
  const [positionResult, setPositionResult] = useState("GK");
  const [nationalityResult, setNationalityResult] = useState("England");
  const [names, setNames] = useState("Gareth Bale");
  const [stat1, setStat1] = useState("99");
  const [stat2, setStat2] = useState("99");
  const [stat3, setStat3] = useState("99");
  const [stat4, setStat4] = useState("99");
  const [stat5, setStat5] = useState("99");
  const [stat6, setStat6] = useState("99");

  // Funkcja do losowania danych
  const generateData = () => {
    setPositionResult(Position());
    setNationalityResult(Nationality());
    setNames(Name());
    const [s1, s2, s3, s4, s5, s6] = Stats();
    setStat1(s1);
    setStat2(s2);
    setStat3(s3);
    setStat4(s4);
    setStat5(s5);
    setStat6(s6);
  };

  return (
    <div className="counter-container">
      <Header />
      <div className="card-main">
        <div className="player">
          <div className="positionP">{positionResult}</div>
          <div className="nationalityP">{nationalityResult}</div>
          <div className="nameP">{names}</div>
          <div className="stats1">{stat1} PAC</div>
          <div className="stats4">{stat2} DRI</div>
          <div className="stats2">{stat3} SHO</div>
          <div className="stats5">{stat4} DEF</div>
          <div className="stats3">{stat5} PAS</div>
          <div className="stats6">{stat6} PHY</div>
          <Button
            variant="secondary"
            className="randomP"
            onClick={generateData}
          >
            Losuj
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
export default CardGenerator;
