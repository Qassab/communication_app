import React from 'react';
import firebase from "firebase";

import kid from "./components/images/kid.png";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";

const classNames = require("./search.css");

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
          user: null,
          images: []
        };
      }
    
      componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ user });
        });
      }
    
      render() {
        return (
          <div className="app">
            <div className="content">
              <div className={classNames.app}>
              <img src={kid} className={classNames.kid} alt="kid" />
    
                <header className={classNames.appHeader}>
    
                {/* <img src={logo} className={classNames.appLogo} alt="logo" /> */}
    
                  <h1 className={classNames.appTitle}>
                    Makaton Communication WebApp
                  </h1>
                </header>
                <Link to="/home">
                            <Button className="btn">home</Button>
                        </Link>
                        <Link to="/input">
                            <Button className="btn">input</Button>
                        </Link>
                        <Link to="/search">
                            <Button className="btn">search</Button>
                        </Link>
                       
              </div>
            </div>
          </div>
        );
      }
    }
    