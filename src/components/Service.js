import React from 'react'
import './Service.css'

function Service(props){
    return(

<div>
  <div className="card">
            
        <div class='card-details'>
            <img className="details" src= {`../images/${props.coverImg}`} alt="na" />
          
                <h2 className="details">{props.title}</h2>

                <p className="details"> {props.description} </p>

                <a href="url" className="details">Learn more</a>
            </div>       
    </div>

 
</div>

    )
}

export default Service