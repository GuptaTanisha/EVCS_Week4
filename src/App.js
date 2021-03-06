import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Contact from './screens/Contact/contact.js';
import Homescreen from './screens/Homescreen.js';
import Bookscreen from './screens/Bookscreen.js';
const App = () => {
    return(
<BrowserRouter>
    <div> 
    <Routes>
    <Route path="/" element={<Homescreen />} exact></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/book" element={<Bookscreen />}></Route>

        </Routes>
  </div>
  </BrowserRouter>
        )
}

export default App;