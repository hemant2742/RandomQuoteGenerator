import React from 'react';
import './App.css';
import Baselayout from './routes';
import {BrowserRouter} from "react-router-dom";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Baselayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
