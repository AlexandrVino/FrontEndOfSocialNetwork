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

                    <Route path='/me' render={() => <Profile profile_data={props.state.profilePage}
                                                             dispatch={props.dispatch}
                                                             renderPage={props.renderPage}/>}/>
                    <Route path='/mess' render={() => <Messages mess={props.state.messagesPage}
                                                                renderPage={props.renderPage}
                                                                dispatch={props.dispatch}/>}/>

                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
