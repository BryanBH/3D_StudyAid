import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
	clientId: "f2cd2bcf898f48cab26780d7f808d219",
});

function MainPage({ code }) {
  const access_token = useAuth(code)


  useEffect(() => {
    if(!access_token) return 
    spotifyApi.setAccessToken(access_token)
  }, [access_token])
  return (
    <>
      <h1>{code}</h1>
    </>
  )
}

export default MainPage