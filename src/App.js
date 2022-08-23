import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import axios from 'axios';
import Photo from './components/Photo';
import { CircularProgress } from '@mui/material';


function App() {
  const [photos , setPhoto] = useState([])
const [loading , setIsLoading] = useState(false)
async function fetchData() {
  try{
    const result = await axios.get("https://dog.ceo/api/breeds/image/random/20");
    setIsLoading(true);
    setPhoto(result.data.message)
    console.log(result.data.message)
    return result.data.message

  }catch(error ){
    console.log(error)
  }
}
  useEffect(() => {
 fetchData();

  },[loading])
  if(photos.length === 0){
return <div className='loader'>
<CircularProgress></CircularProgress>
</div>
  }
  return (
    <div className="App">

      <Navbar></Navbar>
  {photos.length>0 &&
  
  
  (<Photo photos={photos
}/> )}

 </div>
    
)
}

export default App;
