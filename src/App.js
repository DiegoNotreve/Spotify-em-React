
import './App.css';
import Sidebar from './Sidebar/Sidebar.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import SearchArtist from './SearchArtist.jsx';


function App() {
  return (
    <div>
    <Main/>
    <Sidebar/>
    <Footer/>
    <SearchArtist />
    </div>
  );
}

export default App;
