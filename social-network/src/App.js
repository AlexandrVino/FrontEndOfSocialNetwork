import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
      <div className={'container'}>
          <div className={'app-wrapper'}>

              <Header/>
              <Navbar/>
              <div className={'content widget'}>

              </div>

              <footer>

              </footer>

          </div>
      </div>

  );
}

export default App;
