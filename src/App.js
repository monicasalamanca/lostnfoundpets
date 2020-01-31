import React from 'react';
//import logo from './logo.svg';
import Header from './components/Header';
import './App.css';

const authUrl = 'https://api.petfinder.com/v2/oauth2/token';

class App extends React.Component {

  // state = {
  //   weather: []
  // }

  componentDidMount() {
    fetch(authUrl, {
      body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_PET_FINDER_CLIENT_KEY}&client_secret=${process.env.REACT_APP_PET_FINDER_SECRET_KEY}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    })
    .then(res => res.json())
    .then(json => {
      console.log('json', json);
      const url = 'https://api.petfinder.com/v2/animals?type=dog&page=2';
      const options = {
        headers: {
          Authorization: `Bearer ${json.access_token}`
        },
        method: 'GET'
      };
      if (json) {
        fetch(url, options)
          .then(resp => resp.json())
          .then(dataJson => {
            console.log(dataJson);
          })
      }
    })
  }

  render () {
    return (
      <Header />
    )
  }
}

export default App;
