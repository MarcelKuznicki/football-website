import React from "react";
import Header from "../components/header";
import Button from "react-bootstrap/Button";
import { Position } from "./card/Position";
import { Nationality } from "./card/Nationality";

function CardGenerator() {
  const positionResult = Position();
  const nationalityResult = Nationality();

  return (
    <div className="counter-container">
      <Header />
      <div className="card-main">
        <div className="player">
          <div className="positionP">{positionResult}</div>
          <div className="nationalityP">{nationalityResult}</div>
          <div className="nameP">Marcel Kuźnicki</div>
          <div className="stats1">PAC:50</div>
          <div className="stats4">DRI:50</div>
          <div className="stats2">SHO:50</div>
          <div className="stats5">DEF:50</div>
          <div className="stats3">PAS:50</div>
          <div className="stats6">PHY:50</div>
        </div>
        <Button variant="secondary" className="randomP">
          Losuj
        </Button>{" "}
      </div>
    </div>
  );
}
export default CardGenerator;
