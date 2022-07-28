import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
      <footer className="w-100 mt-auto bg-secondary p-4">
        <div className="container text-center mb-5">
          {location.pathname !== '/' && (
            <button
              className="btn btn-dark mb-3"
              onClick={() => navigate(-1)}
            >
              &larr; Go Back
            </button>
          )}
          {/* <h4>
            Made with{' '}
            <span
              className="emoji"
              role="img"
              aria-label="heart"
              aria-hidden="false"
            >
              ❤️
            </span>{' '}
            by Life Stories team.
          </h4> */}
              <nav className="container-fluid navbar navbar-expand-sm justify-content-center">
      <div className="row justify-content-center" >
        <a href="https://github.com/B-smd" style={{"margin": "auto"}}><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon" width={"56"}/></a>
        <a href="https://twitter.com/johndjaja" style={{"margin": "auto"}}><img src="https://img.icons8.com/fluent/48/000000/twitter--v1.png" alt="Twitter" className="icon" width={"56"}/></a>
        <a href="https://www.linkedin.com/in/BambangSugiartoMichaDjaja/" style={{"margin": "auto"}}><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon" width= "56" /></a>
      </div>
    </nav>

        </div>
      </footer>
    );
  };
  
  export default Footer;