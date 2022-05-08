import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home/Home';
//import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import Inventory from './Components/Inventory/Inventory';
import ManageInventories from './Components/ManageInventory/ManageInventories';
import AddItem from './Components/AddItem/AddItem';
import MyTasks from './Components/MyTasks/MyTasks';
function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-items" element={<ManageInventories />} />
        <Route path="/add-item" element={< AddItem/>} />
        <Route path="/my-task" element={< MyTasks/>} />
        <Route path="/inventory/:id" element={<Inventory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
