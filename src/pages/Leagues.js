import Header from "../components/header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import "./Home.css";

function Leagues() {
  return (
    <div>
      <Header></Header>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className=""
      >
        <Tab eventKey="Premier League" title="Premier League"></Tab>
        <Tab eventKey="La Liga" title="La Liga"></Tab>
        <Tab eventKey="Serie A" title="Serie A"></Tab>
        <Tab eventKey="Bundesliga" title="Bundesliga"></Tab>
        <Tab eventKey="Ligue 1" title="Ligue 1"></Tab>
      </Tabs>
      <div>
        <ul>
          <li>liverpool</li>
        </ul>
      </div>
    </div>
  );
}

export default Leagues;
