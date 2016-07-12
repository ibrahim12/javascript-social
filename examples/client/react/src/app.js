import React from 'react';
import { render } from 'react-dom';

var Auth = new JSSocial({
    providers: {
        google: {
            clientId : '1007323276310-nn65ca3jlqtjn5higocuhkcq7lp2lpas.apps.googleusercontent.com'
        }  
    }
})

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    
  }

  authenticate(){
    Auth.authenticate('google').then(function(response){
        console.log(response);
    }, function(error){
        console.error(error);
    });
  }

  login(){
    Auth.login('google').then(function(response){
        console.log(response);
    }, function(error){
        console.error(error);
    });
  }

  logout(){
    Auth.logout('google').then(function(response){
        console.log(response);
    }, function(error){
        console.error(error);
    });
  }

  getProfile() {
    $.get('/api/me').then(function(response){
        console.log(response);
    }, function(error){
        console.error(error);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.authenticate}> Authenticate </button>
        <button onClick={this.login}> Login </button>
        <button onClick={this.logout}> logout </button>
        <button onClick={this.getProfile}> getProfile </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('reactapp'));
