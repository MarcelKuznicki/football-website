import Header from "../components/header";
import "./Home.css";

function Home() {
  return (
    <div className="div-main">
      <Header></Header>
      <section className="welcome-section">
        <div className="container">
          <h1 className="welcome-heading">Witaj na mojej stronie</h1>
          <p className="welcome-message">
            Miło mi, że tu jesteś! Zapraszam do odkrywania ciekawych treści.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
