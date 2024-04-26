import React from "react";
//import home from "./home"
//import Nav from "./Nav"

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}
function About() {
  return (
    <div id="about">
      <h1>About</h1>
      <p>This is About us.</p>
    </div>
  );
}


function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
      {/* add the <Home> component here */}
      {/* add your <About> component here */}
    </div>
  );
}

export default App;
