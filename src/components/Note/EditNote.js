import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './note.css';
import {MdModeEditOutline} from 'react-icons/md'
import { editNote } from '../../reducers/noteReducer';

function EditNote() {
    const dispatch=useDispatch();
    const params=useParams();
    const notes=useSelector(store => store.notes);
    const navigate=useNavigate();
    const existingNote=notes.filter(note=>note.id===params.id);
    const{title,content}=existingNote[0];
    const[values,setValues]=useState({
        title,
        content
      })
      const handleEdit=()=>{
        if(values.title!==''){
          setValues({title:'',content:''})
          dispatch(editNote({
            id:params.id,
            title:values.title,
            content:values.content
          }))
          navigate('/saved')
        }
      }   

    return (
      <form className='note-container'>
        <input 
        name='title'
        placeholder='Title'
        className='title-input'
        value={values.title}
        required
        onChange={(e)=>setValues({...values,title:e.target.value})}/>
  
        <textarea
        name='content' 
        placeholder='Say Something...' 
        className='content-text' rows="10" 
        value={values.content} 
        onChange={(e)=>setValues({...values,content:e.target.value})}>
        </textarea>
        <button onClick={handleEdit}>
          <MdModeEditOutline className='save-icon'/>
          Edit
        </button>
      </form>
    )
}

export default EditNote