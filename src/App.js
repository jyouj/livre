import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

class App extends Component {
  render () {
    const langs = ["Python", "Go", "Ruby", "Java", "PHP", "Swift", "Kotlin", "JavaScript", "React", "Vue", "Angular", "TypeScript", "C++", "C", "SQL", "Scala", "R", "CSS"];

    return(
      <div className="app">
        <Header langList={langs} />
        <div className="card-dist">
          <Switch>
            <Route exact path="/">表示したい言語を選んでください</Route>
            <Route path='/:lang' component={Card} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
