import React from 'react';
import HeroContent from './components/HeroContent';
import Navigation from './components/Navigation';
import data from './data/data';
import Service from './components/Service';
import './style.css'

function App() {

const services = data.map((item) => {
  return(
    <Service 
     {...item}
     />
  )
})
  return (
<div >
        <Navigation />
        <HeroContent />
        <section className="cards-list">
          {services}
        </section>

</div>
         )
        
}

export default App;
