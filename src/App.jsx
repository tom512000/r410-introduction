import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons/faCarrot";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons/faAppleAlt";
import Card from "./components/Card.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  const [counts, setCounts] = useState({
    carrot: 0,
    apple: 0,
  });

  const handleCounterChange = (type, value) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: value,
    }));
  };

  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card title="Titre 1">
            Contenu 1<br />
            <Counter
              before={<FontAwesomeIcon icon={faCarrot} />}
              className="btn"
              onChange={(value) => handleCounterChange("carrot", value)}
            />
          </Card>
          <Card title="Titre 2">
            Contenu 2<br />
            <Counter
              before={<FontAwesomeIcon icon={faAppleAlt} />}
              className="btn"
              onChange={(value) => handleCounterChange("apple", value)}
            />
          </Card>
          <Card title="Titre 3">
            Contenu 3<br />
            Total : {counts.carrot + counts.apple}
          </Card>
          <Card title="Titre 4">Contenu 4</Card>
        </div>
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;
