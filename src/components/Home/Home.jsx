import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="header">
          <ul className="button-list">
            <li>
              <button>Explor Premium</button>
            </li>
            <li>
              <button>Install</button>
            </li>
            <li>
              <button>Premium</button>
            </li>
            <li>
              <button>Premium</button>
            </li>
          </ul>
        </div>
        <div className="title">
          <h2>Good afternoon</h2>
          <div className="menu-songs">
            <li className="songItem">
              <img src="/images/onmyway.png" alt="" />
              <h5>
                on my way <br />
                <div className="subtitle">Abhisha uk</div>
              </h5>
            </li>
            <li className="songItem">
              <img src="/images/onmyway.png" alt="" />
              <h5>
                on my way <br />
                <div className="subtitle">Abhisha uk</div>
              </h5>
            </li>
            <li className="songItem">
              <img src="/images/onmyway.png" alt="" />
              <h5>
                on my way <br />
                <div className="subtitle">Abhisha uk</div>
              </h5>
            </li>
            <li className="songItem">
              <img src="/images/onmyway.png" alt="" />
              <h5>
                on my way <br />
                <div className="subtitle">Abhisha uk</div>
              </h5>
            </li>
          </div>
        </div>
        <div className="playlist">
          <h2>Made For Abhisha uk</h2>
          <div className="gallery">
            <a target="_blank" href="img_5terre.jpg">
              <img
                src="/images/ar.jpg"
                alt="Cinque Terre"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>

          <div className="gallery">
            <a target="_blank" href="img_forest.jpg">
              <img
                src="/images/sandoshh.jpg"
                alt="Forest"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>

          <div className="gallery">
            <a target="_blank" href="img_lights.jpg">
              <img
                src="/images/Sithara.jpg"
                alt="Northern Lights"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>

          <div className="gallery">
            <a target="_blank" href="img_mountains.jpg">
              <img
                src="/images/sandoshh.jpg"
                alt="Mountains"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>

          <div className="gallery">
            <a target="_blank" href="img_mountains.jpg">
              <img
                src="/images/Sithara.jpg"
                alt="Mountains"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>
        <div className="playlist">
          <h2>Your Top Mixes</h2>
          <div className="gallery">
            <a target="_blank" href="img_5terre.jpg">
              <img
                src="/images/ar.jpg"
                alt="Cinque Terre"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>

          <div className="gallery">
            <a target="_blank" href="img_forest.jpg">
              <img
                src="/images/sandoshh.jpg"
                alt="Forest"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>

          <div className="gallery">
            <a target="_blank" href="img_lights.jpg">
              <img
                src="/images/Sithara.jpg"
                alt="Northern Lights"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>

          <div className="gallery">
            <a target="_blank" href="img_mountains.jpg">
              <img
                src="/images/sandoshh.jpg"
                alt="Mountains"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>

          <div className="gallery">
            <a target="_blank" href="img_mountains.jpg">
              <img
                src="/images/Sithara.jpg"
                alt="Mountains"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
