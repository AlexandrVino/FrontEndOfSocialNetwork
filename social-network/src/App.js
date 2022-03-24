import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Messages from "./components/Messages/Messages";
import Content from "./components/Content/Content";

function App() {

    return (
        <BrowserRouter>
            <div className={'container'}>
                <div className={'app-wrapper'}>

                    <Header/>
                    <Navbar/>

                    <Route path='/me' component={Content}/>
                    <Route path='/news' component={News}/>
                    <Route path='/mess' render={() => <Messages />}/>

                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
