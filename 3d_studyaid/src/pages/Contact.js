import React from 'react'
import useAuth from '../hooks/useAuth'

function Contact({ code }) {
  
  const accessToken = useAuth(code);
  return (
    <h1>{accessToken}</h1>
  )
}

export default Contact