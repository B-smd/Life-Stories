import React from 'react';

const Donate = () => {
    return (
        <div className= "justify-content-center donation">
        <h2  style= {{color: "aliceblue"}}>Donation</h2>
        <ul>All donation will go to: Caritas, Catholic Mission and LifeLink</ul>
        <a className="btn btn-lg btn-danger m-2" href="https://www.caritas.org.au/" style={{"margin": "auto"}}>Caritas Australia</a>
        <a className="btn btn-lg btn-danger m-2" href="https://www.catholicmission.org.au/" style={{"margin": "auto"}}>Catholic Mission</a>
        <a className="btn btn-lg btn-danger m-2" href="https://lifelink.com.au/" style={{"margin": "auto"}}>LifeLink</a>

        </div>
    )
}

export default Donate