import React, { Component } from 'react';
import { voteCeltics, voteWarriors, voteSixers, voterRaptors, voteLakers } from './actions';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handlevoteCeltics = () => {
    this.store.dispatch(voteCeltics());
  }

  handlevoteWarriors = () => {
    this.store.dispatch(voteWarriors());
  }

  handlevoteSixers = () => {
    this.store.dispatch(voteSixers());
  }

  
  handlevoterRaptors = () => {
    this.store.dispatch(voterRaptors());
  }

  
  handlevoteLakers = () => {
    this.store.dispatch(voteLakers());
  }


  render() {
    return (

      <div>

        <div className="voteUI">

        <div className="info row">

          <img src="/img/vote-nba.png" alt=""/>

          <h2>Who will be the champ in 2019</h2>
          <h4>VOTE BELOW</h4>
        
        </div>   
         
          
          <div className="teams row">

              <div className="btn-team col-xs-offset-1 col-xs-2">
                  <img src="/img/celtics.png" height="96" alt="Celtics" onClick={this.handlevoteCeltics}></img>
              </div>
              <div className="btn-team col-xs-2">
                  <img src="/img/warriors.png" height="96" alt="Warriors" onClick={this.handlevoteWarriors}></img>
              </div>
              <div className="btn-team col-xs-2">
                  <img src="/img/76ers.png" height="96" alt="Sixers" onClick={this.handlevoteSixers}></img>
              </div>
              <div className="btn-team col-xs-2">
                  <img src="/img/raptors.png" height="96" alt="Raptors" onClick={this.handlevoterRaptors}></img>
              </div>
              <div className="btn-team col-xs-2">
                  <img src="/img/lakers.png" height="96" alt="Lakers" onClick={this.handlevoteLakers}></img>
              </div>

          </div>
        </div>

      </div>

    );
  }
}

export default App;
