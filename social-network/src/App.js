import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/Content";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Messages from "./components/Messages/Messages";

function App() {

    return (
        <BrowserRouter>
            <div className={'container'}>
                <div className={'app-wrapper'}>

                    <Header/>
                    <Navbar/>

                    <Route path='/me' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/mess' render={() => <Messages />}/>

                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
