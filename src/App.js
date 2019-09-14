import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from "./components/CharacterList.js";
import EpisodeList from "./components/episodes.js";
import LocationsList from "./components/LocationsList.js";

export default function App() {
  return (
    <main>
      <div>
        <Header />
        <div className="Navigation">
          <nav>
            <Link to="/"><span className="linkText">Home</span></Link>
            <Link to="/CharacterList"><span className="linkText">Character List</span></Link>
            <Link to="/EpisodeList"><span className="linkText">Episode List</span></Link>
            <Link to="/LocationList"><span className="linkText">Location List</span></Link>
          </nav>
        </div>
        <Route exact path="/" component={WelcomePage}></Route>
        <Route exact path="/CharacterList" component={CharacterList} />
        <Route exact path="/EpisodeList" component={EpisodeList} />
        <Route exact path="/LocationList" component={LocationsList} />
      </div>
    </main>
  );
}
