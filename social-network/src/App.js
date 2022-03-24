import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";

function App(props) {

    return (
        <BrowserRouter>
            <div className={'container'}>
                <div className={'app-wrapper'}>

                    <Header/>
                    <Navbar/>

                    <Route path='/me' render={() => <Profile profile_data={props.state.profilePage}/>}/>
                    <Route path='/mess' render={() => <Messages mess={props.state.messagesPage}/>}/>

                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
