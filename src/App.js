import React from 'react';
import Header from './components/header.js';
import Typing from './components/typinginput.js';
import Statistics from './components/statistics.js';
import './index.css';
const App=()=>{

  return(
    <div>
   <Header/>
   <Typing/>
   <Statistics/>
    </div>
  )
}
export default App;