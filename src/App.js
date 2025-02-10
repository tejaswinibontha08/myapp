// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginPage from "./LoginPage";
// import Dashboard from "./Dashboard";
// import DomainDetails from "./DomainDetails";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/domain/:domainName" element={<DomainDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage"; // Import Login Page
import HomePage from "./HomePage"; // Import Home Page
import Chatbot from "./Chatbot";
import Cinematography from "./domain/Cinematography";
import Screenwriting from "./domain/Screenwriting";
import Editing from "./domain/Editing";
import Direction from "./domain/Direction";
import Production from "./domain/Production";
import SoundDesign from "./domain/SoundDesign";
import VisualEffects from "./domain/VisualEffects";
import CostumeDesign from "./domain/CostumeDesign";
import FilmMusic from "./domain/FilmMusic";
import profile from "./profile"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/domain/cinematography" element={<Cinematography />} />
        <Route path="/domain/screenwriting" element={<Screenwriting />} />
        <Route path="/domain/editing" element={<Editing />} />
        <Route path="/domain/directing" element={<Direction />} />
        <Route path="/domain/production" element={<Production />} />
        <Route path="/domain/sounddesign" element={<SoundDesign />} />
        <Route path="/domain/visualeffects" element={<VisualEffects />} />
        <Route path="/domain/costumedesign" element={<CostumeDesign />} />
        <Route path="/domain/filmmusic" element={<FilmMusic />} />
        <Route path="/profile" element={<profile />} />
      </Routes>
    </Router>
  );
}

export default App;

