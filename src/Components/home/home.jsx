import React from "react";
function Home() {
  return (
    <>
      {/* my navbar */}
      <div className="navbar">
        <div className="container">
          <h1>CSS Course.</h1>
        </div>
        <ul className="links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Home;
