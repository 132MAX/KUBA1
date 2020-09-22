import React from 'react';
import Header from "./components/header/Header.js"
import Vacation from "./components/vacation/Vacation"
import Description from "./components/description/Description"
import Foto from "./components/foto/Foto"

function App() {
  return (
    <div className="kuba">
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
    <Header/>
    <Vacation/>
    <Description/>
    <Foto/>
    </div>
  );
}

export default App;
