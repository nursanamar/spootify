import React from 'react'
import "./_styles.scss";
import config from "../../config";

export default function Index() {

  const login = () => {
  
    let baseUrl = config.api.authUrl
    let params = new URLSearchParams({
      client_id: config.api.clientId,
      response_type: "token",
      redirect_uri: "http://localhost:3000/callback",
    })

    let url = new URL("/authorize?" + params.toString(), baseUrl)

    window.location.href = url.toString();
  }

  return (
    <div className="container">
      <h2>Please Login First</h2>
      <button className="button-login" onClick={login} >Login</button>
    </div>
  )
}
