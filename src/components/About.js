import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function About() {
  return (
    <>
      <Navbar />

      {/* Theory about us */}
      <div className="card" style={{margin:"20px"}}>
        <h5 className="card-header">About</h5>
        <div className="card-body">
          <h5 className="card-title">Carbon Emmission</h5>
          <p className="card-text">Energy is one of the keys supporting economic development and playing an essential in our daily life. It is the sector that contributes significantly to various sustainability issues, such as GHG (Greenhouse Gases) emissions, air pollutants, water use and poverty. At the same time, the energy sector has prevalent room for improvement and is the target solution in various sustainability-related policies.<br /><br />

            As nations bind together to tackle global climate change, one of the urgent needs is the energy sector's transition from fossil-fuel reliant to a more sustainable carbon-free solution. Recent progress shows that advancement in energy efficiency modelling of components and energy systems has greatly facilitated the development of more complex and efficient energy systems. The scope of energy system modelling can be based on temporal, spatial and technical resolutions. The emergence of novel materials such as MXene, metal-organic framework and flexible phase change materials have shown promising energy conversion efficiency. The integration of the internet of things (IoT) with an energy storage system and renewable energy supplies has led to the development of a smart energy system that effectively connects the power producer and end-users, thereby allowing more efficient management of energy flow and consumption. The future smart energy system has been redefined to include all energy sectors via a cross-sectoral integration approach, paving the way for the greater utilization of renewable energy.<br /><br /><br />

            {/* Tables  */}
            <table className="table" >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
            <br /><br />
            In the thermal sector, the development of 4th generation district heating (4GDH) is envisioned to meet the demand for more energy-efficient buildings and integrate district heating and renewable energy sources into a smart energy system. The 4GDH system is defined as a smart thermal grid that integrates the supply of heat to low-energy buildings with low grid losses, utilizing low-temperature heat sources that is integrated into the operation of smart energy systems, by considering the planning, cost and incentive structures to ensure the sustainability of the systems.<br /><br />

            Substantial changes in population size, age structure, and urbanization are expected in many parts of the world this century. Although such changes can affect energy use and greenhouse gas emissions, emissions scenario analyses have either left them out or treated them in a fragmentary or overly simplified manner. We carry out a comprehensive assessment of the implications of demographic change for global emissions of carbon dioxide. Using an energy–economic growth model that accounts for a range of demographic dynamics, we show that slowing population growth could provide 16–29% of the emissions reductions suggested to be necessary by 2050 to avoid dangerous climate change. We also find that aging and urbanization can substantially influence emissions in particular world regions.<br />
            <br />
            Statistical analyses of historical data suggest that population growth has been one driver of emissions growth over the past several decades and that urbanization, aging, and changes in household size can also affect energy use and emissions. Demographers expect major changes in these dimensions of populations over the coming decades. Global population could grow by more than 3 billion by mid-century, with most of that difference accounted for by growing urban populations.<br />
            More recently, a large emissions scenario literature has developed that informs a wide range of climate change analysis and related policy discussions. Model sophistication and scope has increased substantially over time. Scenarios typically span timescales of decades to centuries, include emissions of multiple gases and aerosols from a range of sectors, including land use, and consider a wide range of emissions drivers.<br />

          </p>
          
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About