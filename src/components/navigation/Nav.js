import React from 'react';
import { Link } from "react-router-dom";
import './nav.css';
import Logo from '../../assets/nikki.png';
import {VscNote,VscAdd} from 'react-icons/vsc';

function Nav() {
  return (
    <nav className='nav-header'>
    <Link to="/"><img src={Logo} alt="Nikki Logo" width="56" height="56"/></Link>
    <div>
    <Link to="saved">
      <VscNote />
      <p className='saved-notes-list'>Saved Notes</p>
    </Link>
    <Link to="/">
      <VscAdd />
      <p className='saved-notes-list'>Add Notes</p>
    </Link>
    </div>
    </nav>
  )
}

export default Nav