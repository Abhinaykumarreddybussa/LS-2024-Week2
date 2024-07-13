import React, { useState } from 'react'

import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function Nav_bar(props) {

  const [listopen,setlistOpen] = useState(false);

  
  
  
  return (

    <div className='Nav_bar'>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid ">
        <button class="rounded-circle" className='btn btn-secondary rounded-circle' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <button className='btn btn-warning rounded-pill'>
      <a class="navbar-brand" href="#">KeepNote</a>
      </button>
      
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item" onClick={() => props.addNote()}>

        <button class="navbar-toggler" className='btn btn-lg btn-success rounded-pill' type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" >
        <span class="bi bi-chat-right-icon">Add Note</span>
        </button>
        </li>
        <li class="nav-item" onClick={()=> props.deleten(props.notes.id)}>

        <button class="navbar-toggler" className='btn btn-lg btn-danger rounded-pill' type="button" data-bs-toggle="collapse"  aria-controls="navbarSupportedContent" aria-expanded="false" >
        <span class="bi bi-chat-right-icon">Delete Note</span>
        </button>
        </li>
        <button  className='btn btn-secondary rounded-pill' onClick={() => props.ThemeToggleButton()} > 
            <li class="nav-item">
              <a class="nav-link disabled text-light" >Toggle mode</a>
            </li>
          </button>
        </ul>
        
      </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav_bar