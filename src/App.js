import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom";

const App = () => (
  <div>
    
    <Navigation >
       <Route exact path = "/"><Home /></Route>
       <Route exact path = "/About"> <About/></Route>
       <Route exact path = "/Contact"><Contact /></Route>
     </Navigation>
 
  </div>
);

export default App;
