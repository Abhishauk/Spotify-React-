import React from "react";
import "./Nav.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <img src="images/home.png" alt="Home" className="nav-icon" />
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <img src="images/search.png" alt="Search" className="nav-icon" />
              <span className="nav-text">Search</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Header including Library section */}
      <section className="section">
        <div>
          <a href="#" className="nav-link">
            <img src="images/library.png" alt="Library" className="nav-icon" />
            <span className="nav-text">Your Library</span>
            <img
              src="images/plus.png"
              alt="plus"
              className="nav-icon plus-icon"
            />
            <img
              src="images/right.png"
              alt="plus"
              className="nav-icon right-icon"
            />
          </a>
        </div>
        <div className="options-section">
          <span className="Playlists">
            <button>Playlists</button>
          </span>
          <span className="Artists">
            <button>Artists</button>
          </span>
          <span className="Albums">
            <button>Albums</button>
          </span>
          <div className="recent-search-song">
            <div className="Recent">
              <img
                src="images/search.png"
                alt="Search"
                className="nav-icon search-icon"
              />
              <span>Recents</span>
              <img
                src="images/menu-bar.png"
                alt="Menu"
                className="nav-icon menu-icon"
              />
            </div>
            {/* List of songs */}
          <div className="menu-song">
            <li className="songItem">
             <img src="/images/onmyway.png" alt="" />
             <h5>on my way <br></br>
             <div className="subtitle">Abhisha uk</div>
             </h5>
            </li>
            <li className="songItem">
             <img src="/images/onmyway.png" alt="" />
             <h5>on my way <br></br>
             <div className="subtitle">Abhisha uk</div>
             </h5>
            </li>
            <li className="songItem">
             <img src="/images/onmyway.png" alt="" />
             <h5>on my way <br></br>
             <div className="subtitle">Abhisha uk</div>
             </h5>
            </li>
            <li className="songItem">
             <img src="/images/onmyway.png" alt="" />
             <h5>on my way <br></br>
             <div className="subtitle">Abhisha uk</div>
             </h5>
            </li>
            <li className="songItem">
             <img src="/images/onmyway.png" alt="" />
             <h5>on my way <br></br>
             <div className="subtitle">Abhisha uk</div>
             </h5>
            </li>
            <li className="songItem">
             <img src="/images/onmyway.png" alt="" />
             <h5>on my way <br></br>
             <div className="subtitle">Abhisha uk</div>
             </h5>
            </li>
            <li className="songItem">
             <img src="/images/onmyway.png" alt="" />
             <h5>on my way <br></br>
             <div className="subtitle">Abhisha uk</div>
             </h5>
            </li>
            <li className="songItem">
             <img src="/images/onmyway.png" alt="" />
             <h5>on my way <br></br>
             <div className="subtitle">Abhisha uk</div>
             </h5>
            </li>

          </div>
          </div>
          {/* <div className="song-side">

          </div>
          <div className="master-play">
            <div className="wav">
              <div className="wave1"></div>
              <div className="wave1"></div>
              <div className="wave1"></div>
            </div>
           
          </div> */}
         
        </div>
        
      </section>
     
    </div>
  );
};

export default Navbar;
