import React from 'react'

import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Note from '../Note/Note'
import '../Note_container/Note_container.css'
function Note_container(props) {

  

  return (

        <div className='h-100  w-100' >
          <div className=' w-100'>

            <div className=' custom-grid  flex-wrap justify-content-around p-5 gap-3'>
              {
                props.notes.map((item) => <Note key={item.id} note={item} deleten={props.deleten}/>)
              }
            </div>
            
            
          </div>
        </div>

  )
}

export default Note_container