import React from "react";
import { Routes, Route } from "react-router-dom";
import './index.css';
import Nav from "./components/navigation/Nav";
import Note from './components/Note/Note';
import EditNote from "./components/Note/EditNote";
import List from "./components/savedNotes/List";
import NotFound from "./components/notFound/NotFound";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Note/>}/>
        <Route path='/saved' element={<List/>}/>
        <Route path='/edit-note/:id' element={<EditNote/>}/>
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
