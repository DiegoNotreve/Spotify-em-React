import React from "react";
import './Main.css';
import search from '../assets/icons/search.png';
import Caixinha from '../assets/icons/caixinha.png';
import Playlist1 from '../assets/playlist/1.jpeg';
import Playlist2 from '../assets/playlist/2.png';
import Playlist3 from '../assets/playlist/3.jpeg';
import Playlist4 from '../assets/playlist/4.jpeg';
import Playlist5 from '../assets/playlist/5.jpeg';
import Playlist6 from '../assets/playlist/6.jpeg';
import Playlist7 from '../assets/playlist/7.jpeg';
import Playlist8 from '../assets/playlist/8.jpeg';
import Playlist9 from '../assets/playlist/9.jpeg';
import Playlist10 from '../assets/playlist/10.jpeg';
import Playlist11 from '../assets/playlist/11.jpeg';
import Playlist12 from '../assets/playlist/12.jpeg';
import Playlist13 from '../assets/playlist/13.jpeg';
import Playlist14 from '../assets/playlist/14.jpeg';
import Playlist15 from '../assets/playlist/15.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import "bootstrap-icons/font/bootstrap-icons.css";



const Main = () => {
    
    return (
        <div className="main-container">
      <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
          <i className="bi bi-arrow-left-circle-fill"></i>
          </button>
          <button className="arrow-right">
          <i className="bi bi-arrow-right-circle-fill"></i>
          </button>

          <div className="header__search">
            <img src={search} alt="" />
            <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
              placeholder="O que você quer ouvir?" value="" />
          </div>
        </div>

        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>


      <div className="playlist-container">
        <div id="result-playlists">
          <div className="playlist">
            
            <h1 id="greeting"></h1>
          
            <h2 className ="session">
              <i className="bi bi-speaker-fill"></i>Navegar por todas as seções
           <i className="bi bi-speaker-fill"></i></h2>
          </div>

          
          <div className="offer__scroll-container">
            <div className="offer__list">
              <section className="offer__list-item">
             
                <a href="" className="cards">
                  <div className="cards card1">
                    <img src={Playlist1} alt="" />
                    <span>Boas festas</span>
                  </div>
                </a>

             
                <a href="" className="cards">
                  <div className="cards card2">
                    <img src={Playlist2}alt="" />
                    <span>Feitos para você</span>
                  </div>
                </a>

               
                <a href="" className="cards">
                  <div className="cards card3">
                    <img src={Playlist3} alt="" />
                    <span>Lançamentos</span>
                  </div>
                </a>

              
                <a href="" className="cards">
                  <div className="cards card4">
                    <img src={Playlist4} alt="" />
                    <span>Creators</span>
                  </div>
                </a>

              
                <a href="" className="cards">
                  <div className="cards card5">
                    <img src={Playlist5} alt="" />
                    <span>Para treinar</span>
                  </div>
                </a>

              
                <a href="" className="cards">
                  <div className="cards card6">
                    <img src={Playlist6} alt="" />
                    <span>Podcasts</span>
                  </div>
                </a>

                
                <a href="" className="cards">
                  <div className="cards card7">
                    <img src={Playlist7} alt="" />
                    <span>Sertanejo</span>
                  </div>
                </a>

               
                <a href="" className="cards">
                  <div className="cards card8">
                    <img src={Playlist8} alt="" />
                    <span>Samba e pagode</span>
                  </div>
                </a>

              
                <a href="" className="cards">
                  <div className="cards card9">
                    <img src={Playlist9} alt="" />
                    <span>Funk</span>
                  </div>
                </a>

              
                <a href="" className="cards">
                  <div className="cards card10">
                    <img src={Playlist10} alt="" />
                    <span>MPB</span>
                  </div>
                </a>

              
                <a href="" className="cards">
                  <div className="cards card11">
                    <img src={Playlist11} alt="" />
                    <span>Rock</span>
                  </div>
                </a>

           
                <a href="" className="cards">
                  <div className="cards card12">
                    <img src={Playlist12} alt="" />
                    <span>Hip Hop</span>
                  </div>
                </a>

                <a href="" className="cards">
                  <div className="cards card13">
                    <img src={Playlist13} alt="" />
                    <span>Indie</span>
                  </div>
                </a>

              
                <a href="" className="cards">
                  <div className="cards card14">
                    <img src={Playlist14} alt="" />
                    <span>Relax</span>
                  </div>
                </a>

              
                <a href="" className="cards">
                  <div className="cards card15">
                    <img src={Playlist15} alt="" />
                    <span>Música Latina</span>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </div>


        <div id="result-artist" className="hidden">
          <div className="grid-container">
            <div className="artist-card" id="">
              <div className="card-img">
                <img id="artist-img" className="artist-img" />
                <div className="play">
                  <span><FontAwesomeIcon icon={faPlay} /></span>
                </div>
              </div>
              <div className="card-text">
                <a title="Foo Fighters" className="vst" href=""></a>
                <span className="artist-name" id="artist-name"></span>
                <span className="artist-categorie">Artista</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    )
};

export default Main;