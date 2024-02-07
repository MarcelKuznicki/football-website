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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="col-1">Position</th>
            <th>Football Club</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Lech</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Legia</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Pogon</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Piast</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Leagues;
