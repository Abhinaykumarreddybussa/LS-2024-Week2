import React, { useState ,useEffect} from 'react';
import nav1 from './Components/Nav bar/Nav_bar.js';
import Note_container from './Components/Note_container/Note_container';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav_bar from './Components/Nav bar/Nav_bar.js';
import '../src/App.css';

function App() {

  const [notes,setnotes]=useState([
    
])

const [darkMode, setDarkMode] = useState(false);
useEffect(() => {
  if (darkMode) {
    document.body.classList.add('bg-dark', 'text-white');
    // document.Nav_bar.classList.add('bg-dark', 'text-white');
  } else {
    document.body.classList.remove('bg-dark', 'text-white');
  }
}, [darkMode]);
const ThemeToggleButton = () => {
  
    const a = darkMode;
    setDarkMode(!a);
  
}

const addNote =() =>{
  
  const tempnotes=[...notes];
  tempnotes.push({

    title:'Title',
    content:'content',
    id:Date.now() 
  })
  setnotes(tempnotes);
};


const deleten =(id) =>{
  const tempnotes=[...notes];

  const index= tempnotes.find((item)=> item.id ==id)

  tempnotes.splice(index,1)

  setnotes(tempnotes)
}

const reversearray = (arr) =>{
  const array = [];

  for(let a = arr.length -1;a >=0;--a){
      array.push(arr[a]);
  }
  return array;
}

  const notes1 = reversearray(notes);

  return (
    
      <div className=" d-flex flex-column h-100 container-fluid w-100 d-block" >
          <div className='h-100'>
            <Nav_bar addNote= {addNote} notes={notes1} deleten={deleten} ThemeToggleButton={ThemeToggleButton} />
          </div>
          <div className='d-flex h-100 w-100  flex-row flex-wrap  '>
            <Note_container notes={notes1} deleten={deleten}/>
          </div>
      
      </div>
    
  );
}

export default App;
