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
    console.log("APP component Angular= "+ this.store.getState().angular);
  }

  handleVoteReact = ()=>  {
    this.store.dispatch( voteReact() );
    console.log( "APP component React= "+ this.store.getState().react);
  }

  handleVoteVuejs = ()=>  {
    this.store.dispatch( voteVuejs() );
    console.log( "APP component Vuejs= "+ this.store.getState().vuejs);
  }

  //style logos
  frameworkLogo() {
    return {
      cursor: 'pointer'
    }
  }

  frameworkLogoHover() {
    return {
      cursor: 'pointer',
      border: '2px solid red'
    }
  }

  render() {
    return (
      
    <div>
        <div className='jumbotron' style={{ textAlign : 'center', padding: '14px'}}>
          <img src='ctsw_logo.png' height='96'></img><br/><br/>
          <h2> what is your favorite front-end framework in 2018 ?</h2>
          <h4> click on the logo below to vote! </h4>
          <br/>
          
          <div className='row text-center'>
          <div className='col-md-3'></div>
            <div className ='col-md-offset-3 col-md-2'>
              <img className="frameworkLogo" src='angular_logo.png' height='96' onClick={ this.handleVoteAngular }>
              </img>
            </div>

            <div className ='col-xs-2 col-md-2'>
              <img  className="frameworkLogo" src='react_logo.png' height='96' onClick={ this.handleVoteReact }>
              </img>
            </div>

            <div className ='col-xs-2 col-md-2'>
              <img className="frameworkLogo" src='vue_logo.png' height='86' onClick={ this.handleVoteVuejs }>
              </img>
            </div>
        </div>


      </div>
    </div>
    );
  }
}

export default App;
