import React from 'react';
import firebase from 'firebase';
import { Route, Switch } from 'react-router-dom';
import SearchPage from './components/SearchPage';

import ImageGallery from './components/gallery/ImageGallery';
import logo from './components/images/logo.jpg';

const classNames = require('./App.css');

export default class App extends React.Component {

  constructor() {
    super();
    //In React, components have state!
    //React state: If change, the component will be reloaded! (Interesting)
    this.state = {
      user: null,
      images: []
    };
  }

  //Life cicle method launched when component is rendered in DOM (Firebase Listener).
  componentWillMount() { 
    firebase.auth().onAuthStateChanged(user => {
      //Awesome ES6 Syntax: If user == new user, will not change and eoc will be overwrited.
      this.setState({ user });
    });
  }

  render() {
    return (

      <div className={classNames.app}>
        <header className={classNames.appHeader}>
          <img src={ logo } className={classNames.appLogo} alt="logo" />
          <h1 className={classNames.appTitle}>Khaled & Onneil & Justine</h1>
          </header>

          {/* <Link to="/search">
                            <Button className="btn btn-lg btn-secondary">Go to Search</Button>
                        </Link> */}
        {/* </header> */}
        
        <div className={classNames.appIntro}>
          <ImageGallery user={ this.state.user } />
          
        </div>
      </div>

      
    );

  }
}

{
  
  /* <Switch>
<Route exact path="/" component={ImageGallery} />
<Route path="/search" component={SearchPage} />
  </Switch> */}
