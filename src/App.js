import React, { Component } from 'react';
import './App.css';
import { voteAngular, voteReact, voteVuejs } from './actions';

class App extends Component {

  constructor( props ) {
    super( props );
    this.store = this.props.store;
  }

  handleVoteAngular = ()=>  {
    this.store.dispatch( voteAngular() );
  }

  handleVoteReact = ()=>  {
    this.store.dispatch( voteReact() );
  }

  handleVoteVuejs = ()=>  {
    this.store.dispatch( voteVuejs() );
  }

  render() {
    return (
      
    <div>
        <div className='jumbotron' style={{ textAlign : 'center'}}>
          <img src='ctsw_logo.png' height='96'></img>
          <h2> what is your favorite front-end framework in 2018 ?</h2>
          <h4> click on the logo below to vote! </h4>
          <br/>
          
          <div className='row text-center'>
          <div className='col-md-3'></div>
            <div className ='col-md-offset-3 col-md-2'>
              <img src='angular_logo.png' height='96' onClick={ this.handleVoteAngular }>
              </img>
            </div>

            <div className ='col-xs-2 col-md-2'>
              <img src='react_logo.png' height='96' onClick={ this.handleVoteReact }>
              </img>
            </div>

            <div className ='col-xs-2 col-md-2'>
              <img src='vue_logo.png' height='96' onClick={ this.handleVoteVuejs }>
              </img>
            </div>
        </div>


      </div>
    </div>
    );
  }
}

export default App;
