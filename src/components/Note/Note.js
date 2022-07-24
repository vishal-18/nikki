import React,{useState,useId} from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import './note.css';
import {AiFillSave} from 'react-icons/ai'
import { addNote } from '../../reducers/noteReducer';
import { useNavigate } from 'react-router-dom';

function Note() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const id=useId();
    const[values,setValues]=useState({
      title:'',
      content:''
    })
    const handleSave=()=>{
      if(values.title!==''){
        setValues({title:'',content:''})
        dispatch(addNote({
          id:id,
          title:values.title,
          content:values.content
        }))
        navigate('/saved');
      }
    }   

  return (
    <form className='note-container'>
      <input 
      name='title'
      placeholder='Title'
      className='title-input'
      required
      value={values.title}
      onChange={(e)=>setValues({...values,title:e.target.value})}
      />

      <textarea
      name='content' 
      placeholder='Say Something...' 
      className='content-text' rows="10" 
      value={values.content} 
      onChange={(e)=>setValues({...values,content:e.target.value})}>
      </textarea>
      <button onClick={handleSave}>
        <AiFillSave className='save-icon'/>
        Save
      </button>
    </form>
  )
}

export default Note