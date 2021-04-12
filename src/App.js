import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainScreen from './components/MainScreen';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NewLobby from './components/NewLobby';
import JoinLobby from './components/JoinLobby';
import Lobby from './components/Lobby';
import Rules from './components/Rules';
import Game from './components/Game';
import { LobbyContext } from './components/LobbyContext';
import { useState } from 'react';

function App() {
  const [lobbyValue, setLobbyValue] = useState(null);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainScreen}/>
          <Route path="/rules" component={Rules}/>
          <LobbyContext.Provider value={ {lobbyValue, setLobbyValue} }>
            <Route path="/newlobby" component={NewLobby}/>
            <Route path="/joinlobby" component={JoinLobby}/>
            <Route path="/lobby" component={Lobby}/>
            <Route path="/game" component={Game}/>
          </LobbyContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
