import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{user, token}, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
   
     
    const hash = getTokenFromUrl();
    window.location.hash = "";   
    const _token = hash.access_token;
    
    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then( user => {
        
        dispatch({
          type: 'SET_USER',
          user: user,
        });

      });

      
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      });

      spotify.getPlaylist('3QnrZtSgZ7bGuOUiyyw4Np').then( response => (

        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      ));

    }
    console.log("I HAVE A TOKEN", _token);    

    dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify
    })  
    
  }, []);

  console.log("USER IS ", user);
  console.log("TOKEN: ", token)

  return (
    <div className="app">
    {
      token ? (
        <Player />
      ) : (
        <Login />
      )
    }
    </div>
  );
}

export default App;
