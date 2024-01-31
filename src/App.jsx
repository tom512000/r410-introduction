import React from "react";
// eslint-disable-next-line import/extensions,import/no-extraneous-dependencies
import { faCarrot } from "@fortawesome/free-solid-svg-icons/faCarrot";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line import/extensions,import/no-extraneous-dependencies
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons/faAppleAlt";
// eslint-disable-next-line import/extensions
import Card from "./components/Card.jsx";
// eslint-disable-next-line import/extensions
import Button from "./components/Button.jsx";

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card title="Titre 1">
            Contenu 1<br />
            <Button className="btn">
              <FontAwesomeIcon icon={faCarrot} />
            </Button>
          </Card>
          <Card title="Titre 2">
            Contenu 2<br />
            <Button className="btn">
              <FontAwesomeIcon icon={faAppleAlt} />
            </Button>
          </Card>
          <Card title="Titre 3">Contenu 3</Card>
          <Card title="Titre 4">Contenu 4</Card>
        </div>
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;
