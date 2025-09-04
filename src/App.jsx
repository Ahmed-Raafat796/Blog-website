import { useState } from 'react'
import './App.css';
import  Homepage  from './pages/Homepage';
import BlogContent from './pages/BlogContent';
import { Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import useFetch from './useFetch';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <h1>Loading ...</h1>;

  if (error) console.log(error);

  return (
    
  //Full Body Div
    <div className=' w-screen h-screen caret-transparent overflow-x-hidden'>

      <Routes>

        <Route path='/' element={<Homepage/> }></Route>
        <Route path='/blog/:id' element={<BlogContent/> }></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        
      </Routes>
        
        

  </div>
  );
}

export default App
