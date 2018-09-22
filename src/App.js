import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import Home from './home/Home';
import Header from './header/Header';
import Configuracao from './configuracao/Configuracao'
import Perfil from './perfil/Perfil';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logado: true,
      usuarioLogado: {
        uid: '1',
        userName: '@elton',
        displayName: 'Elton',
        photoURL: '',
        email: 'elton@twitter.com'
      }
    }
  }


  onLogin = () => {
    this.setState({ logado: true });
  }

  onLogout = () => {
    this.setState({ logado: false });
    this.props.history.push('/');
  }

  render() {
    return (

      <div className="App">
        <div>
          <Header logado={this.state.logado} onLogin={this.onLogin} onLogout={this.onLogout} uid={this.state.uid} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/configuracao" exact component={Configuracao} />
            <Route path="/perfil" exact component={Perfil} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
