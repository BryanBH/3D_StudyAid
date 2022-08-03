import React from "react";
import ModelRendering from "../components/models/ModelRendering";
import { Container,  } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

function About() {
	return (
		<>
			<Container>



    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Follow on Twitter</a></li>
                <li><a href="#" className="text-white">Like on Facebook</a></li>
                <li><a href="#" className="text-white">Email me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
        
      </div>
    </header>

    <main role="main">

      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">About Us</h1>
		  <br>
		  </br>
          <p className="lead text-muted">Music has been proven to be a great study aid, improving concentration, processing, and productivity. 3D Study Room is a web platform designed to improve the studying experience by suggesting 3D models as a background image. 3D Study Room creates custom playlist by connecting Spotify account to provide a more personalized listening experience. In addition, 3D Study Room provides a chatroom feature for users to listen and send messages together.</p>
          
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-body">
				<img class="card-img-top" src="https://reactjs.org/logo-og.png" alt="Card image cap"/>
                  <p className="card-text">React was used for the Frontend. React is a component-based JavaScript library created by Facebook used for building user interfaces. </p>
                  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-body">
				<img class="card-img-top" src="https://developer.spotify.com/assets/FBImage.png" alt="Card image cap"/>

                  <p className="card-text">The Spotify API was used to allow for user authentication and to retrieve user’s playlists. We creat custom playlists using spotify's web api.</p>
                  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-body">
				<img class="card-img-top" src="https://miro.medium.com/max/724/1*aDcnXab1QC_5KF8JUxDEYA.png" alt="Card image cap"/>

                  <p className="card-text">The Three.js library was used to create and display animated 3D graphics in the web browser using WebGL</p>
                  
                </div>
              </div>
            </div>
            
            
            
          </div>
        </div>
      </div>

    </main>

    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
<a href="/">Back to Home</a>
        </p>
        
        
      </div>
    </footer>

			</Container>
		</>
	);
}

export default About;
