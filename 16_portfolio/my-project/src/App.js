import logo from './logo.svg';
import './App.css';
import reviews from './data';
import Testimonial from './components/Testimonial'

function App() {

  
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col  justify-center items-center bg-gray-200'>

      <div className='text-center'>

        <h1 className='text-4xl font-bold'>M.tech CSE-IIT Indore</h1>
        <div className='bg-violet-400 h-[4px] w-1/4 mt-1 mx-auto'></div>
        <Testimonial reviews = {reviews}/>

      </div>

    </div>
  );
}

export default App;
