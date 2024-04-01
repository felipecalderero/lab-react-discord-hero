// src/App.jsx
import "./App.css";
import ButtonWhite from "./components/ButtonWhite";
import ButtonBlack from "./components/ButtonBlack";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

import discordBackground from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title title="Imagine a place...">
        ...where you can belong to a schools club, gaming group or a worlwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </Title>
      <ButtonWhite text="Download for Mac" />
      <ButtonBlack text="Open Discord in your browser" />
      <img class="discordImage" src={discordBackground} alt="discord image" />
    </div>
  );
}

export default App;
