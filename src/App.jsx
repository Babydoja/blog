import { useState } from 'react'
import './App.css'
import Home from './page/Home'
import 'primeicons/primeicons.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export const URL = import.meta.env.BACKEND_URL;
function App() {


  return (
    <>
    <ToastContainer />
     <Home/>
    </>
  )
}

export default App
