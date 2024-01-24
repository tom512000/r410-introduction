import React from "react";
import Card from './components/Card.jsx'

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card title="Titre 1" />
          <Card title="Titre 2" />
          <Card title="Titre 3" />
          <Card title="Titre 4" />
        </div>
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;
