import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Household() {
  const [data, setData] = useState(null)
  const [data2, setData2] = useState(null)
  const [print, setPrint] = useState(false)
  const [chapo, setChapo] = useState(false)
  function onChange (e){
    setPrint(false);
    setData(e.target.value)
    console.log(e.target.value)
  }
  function handleChange (e){
    setChapo(false);
    setData2(e.target.value)
    console.log(e.target.value)
  }
  return (
    <>
      <Navbar/>
      <div className="container" style={{height: '85vh'}}>
      <div className="d-flex " style={{flexDirection: 'row'}}>
      <div className="container my-3" >
      <form>
        <label style={{ fontSize: '1.5rem'}}>
          <h4 className="my-5 mb-3">Enter the total electricity uses (KW)</h4>
          <input type="text" onChange={onChange} name="name" />
        </label>
        <button type="button" onClick={()=>{setPrint(true)}} className="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
</svg></button>
          <div className="container d-flex my-5" style={{flexDirection: 'row'}}>
          <h4 >Total CO<sub>2</sub> emission is :&nbsp;</h4>
          <div>{print?<h4>{0.83*data}</h4>:null}</div>
          <div> <h4> &nbsp; Kg CO<sub>2</sub>/month</h4></div>
          </div>
          
      </form>
      </div>


      <div className="container my-3">
      <form>
        <label style={{ fontSize: '1.5rem'}}>
          <h4 className="my-5 mb-3">Number of cylinder used per month</h4>
          <input type="text" onChange={handleChange} name="name" />
        </label>
        <button type="button" onClick={()=>{setChapo(true)}} className="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
</svg></button>
          <div className="container d-flex my-5" style={{flexDirection: 'row'}}>
          <h4 >Total CO<sub>2</sub> emission is :&nbsp;</h4>
          {chapo?<h4>{2.98*14.5*data2}</h4>:null}
          <div> <h4> &nbsp; Kg CO<sub>2</sub>/month</h4></div>
          </div>
          
      </form>
      </div>
      </div>

      <div className="container d-flex my-3" style={{flexDirection: 'row' , borderTop: 'solid black 2px'}} >
        <h4 style={{margin:'30px'}}>Total CO<sub>2</sub> emission (household) : &nbsp; </h4>
        <h4 style={{border : 'solid black 2px' , textAlign: 'center' , width: '50vh', marginTop: '20px', }}> {2.98*14.5*data2 + 0.83*data} Kg CO<sub>2</sub>/month</h4>
      </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default Household