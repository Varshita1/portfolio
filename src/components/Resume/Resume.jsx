import React from 'react'
import './Resume.css'
const Resume = () => {
  return (
    <>
    <div className="back2">
        <div className="front">
            <p className="p1">check out my resume</p>
            <p className="p2">Resume</p>
            <a href="/22JE1060__VARSHITA__SDE.pdf" download="Varshita Resume">
            <button type="button" class="btn btn-success" style = {{height:'50px',width:'300px', font:'60px',borderRadius:'30px'}}>Download Resume</button>
            </a>
        </div>
        <div className="container1">
          <p className="val2">My level of knowledge in some tools</p>
          <p className="val">My skills</p>
        </div>
        <div className="container2">
          <div className="left1">
           <p className="text">HTML/CSS</p>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
</div>
<p className="text">React JS</p>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
</div>
<p className="text">JavaScript</p>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
</div>
<p className="text">C++</p>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
</div>
          </div>
          <div className="right1">
          <p className="text">Data Structure & Algorithms</p>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
</div>
<p className="text">Node JS + Express</p>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width: '76%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">76%</div>
</div>
<p className="text">MongoDB</p>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
</div>
<p className="text">Python</p>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
</div>
          </div>

        </div>
     
       
    </div>
    
    </>
  )
}

export default Resume