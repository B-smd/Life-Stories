import React from 'react';

const Donate = () => {
    return (
        <div className="row">
            
                      <div className="card1">
                      <a ><img src={`${process.env.PUBLIC_URL}/img/Donation.png`} alt="Caritas" width="450"/></a>
                            <br/>
                            <br/>
                            <h4><b>Donation</b></h4>
                      </div>
                    <div className="card1">
                    <a href="https://www.caritas.org.au/"><img src={`${process.env.PUBLIC_URL}/img/Caritas.png`} alt="Caritas" width="450"/></a>
                            <br/>
                            <br/>
                            <h4><b>Caritas</b></h4>
                    </div>

                    <div className="card1">
                    <a href="https://www.catholicmission.org.au/"><img src={`${process.env.PUBLIC_URL}/img/CatholicMission.png`} alt="Catholic Mission" width="450"/></a>
                            <br/>
                            <br/>
                            <h4><b>Catholic Mission</b></h4>
                    </div>

                    <div className="card1">
                    <a href="https://lifelink.com.au/"><img src={`${process.env.PUBLIC_URL}/img/LifeLink.png`} alt="LifeLink" width="450"/></a> 
                            <br/>
                            <br/>
                            <h4><b>LifeLink</b></h4>
                    </div>
            </div>

    )
}
export default Donate