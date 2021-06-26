import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Data from "./components/Data/Data";

function App() {
  return (
      <div className={'container'}>
          <div className={'app-wrapper'}>

              <Header/>
              <Navbar/>
              <Profile/>
              <Data/>

              <footer>

              </footer>

          </div>
      </div>

  );
}

export default App;
