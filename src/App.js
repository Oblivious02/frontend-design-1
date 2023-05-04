import "./App.css";
import "./styles.css";
import heroImg from "./images/image-hero.jpg";
import vrImg from "./images/image-interactive.jpg";
import curiosity from "./images/image-curiosity.jpg";
import deepearth from "./images/image-deep-earth.jpg";
import fisheye from "./images/image-fisheye.jpg";
import above from "./images/image-from-above.jpg";
import grid from "./images/image-grid.jpg";
import nightArcade from "./images/image-night-arcade.jpg";
import pocketBorealis from "./images/image-pocket-borealis.jpg";
import soccer from "./images/image-soccer-team.jpg";
function App() {
  return (
    <div className="App">
      {/* <img src={heroImg} id="heroImg"></img> */}
      <div id="heroImg">
        <div id="overlay"></div>
      </div>
      <div className="container">
        <div className="navbar web">
          <span id="logo">loopstudios</span>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div id="title1">
          <span>IMMERSIVE EXPERIENCES THAT DELIVER</span>
        </div>
        <div id="vrblock">
          <img src={vrImg} id="vrImg"></img>
          <div id="vrText">
            <h1>THE LEADER IN INTERACTIVE VR</h1>
            <span>
              Founded in 2011, Loopstudios has been producing world class
              virtual reality projects for some of the best companies around the
              globe. Our award winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </span>
          </div>
        </div>
        <div id="creations">
          <h1>OUR CREATIONS</h1>
          <button id="seeButton">SEE ALL</button>
        </div>
        <div id="cards">
          <div>
            <img src={deepearth} />
            <span>DEEP EARTH</span>
          </div>
          <div>
            <img src={nightArcade} />
            <span>NIGHT ARCADE</span>
          </div>
          <div>
            <img src={soccer} />
            <span>SOCCER TEAM VR</span>
          </div>
          <div>
            <img src={grid} />
            <span id="theGrid">THE GRID</span>
          </div>
          <div>
            <img src={above} />
            <span>FROM UP ABOVE VR</span>
          </div>
          <div>
            <img src={pocketBorealis} />
            <span>POCKET BOREALIS</span>
          </div>
          <div>
            <img src={curiosity} />
            <span>THE CURIOSITY</span>
          </div>
          <div>
            <img src={fisheye} />
            <span>MAKE IT FISHEYE</span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div id="container">
          <div id="logo_Icons">
            <span id="logofoot">loopstudios</span>
          </div>
          <div id="links_disclaimer">
            <ul>
              <li id="first_link">
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
            <span id="rights">© 2021 Loopstudios. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
