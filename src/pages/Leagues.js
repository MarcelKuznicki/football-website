import Header from "../components/header";
import React, { useState, useEffect } from "react";
import "./Home.css";
import data from "./data.json";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";

function Leagues() {
  const Clubs = data.map((item) => {
    return (
      <tr className="leaguecCol">
        <td>{item.id}</td>
        <td>{item.club}</td>
        <td>{item.points}</td>
      </tr>
    );
  });

  return (
    <div className="containerL">
      <Header />
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Premier League</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Ekstraklasa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">La liga</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled">Ligue 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled">Serie A</Nav.Link>
        </Nav.Item>
      </Nav>
      <Table striped bordered hover>
        <thead className="Lhead">
          <tr>
            <th>Postition</th>
            <th>Club</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody className="Lbody">{Clubs}</tbody>
      </Table>
    </div>
  );
}

export default Leagues;
