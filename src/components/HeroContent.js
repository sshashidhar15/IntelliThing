import React from "react"
import './HeroContent.css';
import IntelliThing from '../images/IntelliThing.png';
import services from '../images/services.png'


function HeroContent()
{
    return(
<div className="hero">
        
        <section>

            <h1 className="hero-header"> One place for all your intelligent machines </h1>   
            <h4 className="hero-text"> Discovering and connecting them as never before</h4>

        </section>

        <img src={IntelliThing} className="hero-logo" />
        

</div>
    )
}

export default HeroContent