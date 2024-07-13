import React from 'react'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Note.css'
function Note(props) {
  
  return (

      <div className='justify-content-center bg-primary rounded-5 p-4'>
        <div className='container bs-primary w-25 d-flex flex-column ' class='Note' >
          <div className='container w-25 d-flex flex-column min-vh-50' class='content'>
              <div className=' h-100 '>
                <textarea class = 'Note Title' className='h-100 form-control custom-text-area bg-primary-subtle'placeholder='Title of the note'  >
        
                </textarea>
              </div>
        
              <div className=' h-100 ' >
                <textarea className='h-100 form-control custom-text-area bg-primary-subtle' placeholder='Main-content'>
        
                </textarea>
              </div>
          </div>
          <button class="navbar-toggler" onClick={()=>props.deleten(props.note.id)} className='btn btn-danger rounded-pill' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="bi bi-chat-right-icon">Delete Note</span>
          </button>
        </div>
      </div>
  )
}

export default Note