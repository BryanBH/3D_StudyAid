import React from 'react'

function MainPage({lofi}) {
  return (
    <>
      {lofi? <h1> Spotify version of home page </h1> : <h1>Lofi version of main page</h1>}
    </>
  )
}

export default MainPage