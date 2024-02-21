import React from "react";
import cardsData from "./constants/cardsData";
// eslint-disable-next-line import/extensions
import Cards from "./components/Cards.jsx";

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <Cards cardsData={cardsData} />
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;
