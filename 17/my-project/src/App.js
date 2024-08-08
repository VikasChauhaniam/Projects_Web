import React, {useState} from 'react';
import './App.css';
import filterData from "./data";
import Navbar from "./components/Navbar";
import Filterbar from './components/Filterbar';
import Cards from './components/Cards';
import imageData from './images.json';

function App() {

  const[category, setCategory] = useState(filterData[0].title);
  //console.log(catergory);

  return (
    <div className='bg-[#42455E] flex flex-col min-h-screen bg-slate-500'>

      
      <Navbar></Navbar>

      <Filterbar 

        filterData = {filterData}
        category = {category} 
        setCategory = {setCategory}>

      </Filterbar>
       
      <div className=' w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          <Cards 
            imageData = {imageData} 
            category = {category}>
          </Cards>
      </div>
      
      
    </div>
  );
};

export default App;
