import React from 'react'
import Navbar from './Navbar'
import impt from '../image/impactspic.jpg'



function Secb() {
  return (
    <>
    
        <Navbar/>

        <div className="card" style={{width: '75rem', marginLeft: '31px'}}>
        <img src={impt} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">IMPACTS</h3>
            <p className="card-text">Carbon emissions have a wide range of impacts on the environment and human health. Some of the most significant impacts are:</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Climate Change:</strong> The primary impact of carbon emissions is the contribution to global warming and climate change. Greenhouse gases like carbon dioxide trap heat in the atmosphere, leading to rising temperatures and changes in the Earth's climate.</li>
            <li className="list-group-item"><strong>Ocean Acidification:</strong> When carbon dioxide is released into the atmosphere, it dissolves in the ocean, lowering its pH and making it more acidic. This can have negative impacts on marine life, such as coral reefs and shellfish.</li>
            <li className="list-group-item"><strong>Health Impacts:</strong> Air pollution from carbon emissions can have serious health effects, including respiratory and cardiovascular disease, stroke, and lung cancer.</li>
            <li className="list-group-item"><strong>Natural Disasters:</strong> The changing climate brought on by carbon emissions can result in more frequent and severe natural disasters, such as hurricanes, droughts, and wildfires.</li>
            <li className="list-group-item"><strong>Biodiversity Loss:</strong> Rising temperatures and changes in the climate can cause species to migrate to new habitats, leading to declines in biodiversity.</li>
            <li className="list-group-item"><strong>Economic Impacts:</strong> The costs of mitigating and adapting to the impacts of carbon emissions can be significant, affecting not just the energy sector but also agriculture, water resources, and many others.</li>
          </ul>
        </div>
    </>
  )
}

export default Secb