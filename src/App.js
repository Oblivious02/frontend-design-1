import "./App.css";
import "./styles.css";
import heroImg from "./images/image-hero.jpg";
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
      </div>
    </div>
  );
}

export default App;
