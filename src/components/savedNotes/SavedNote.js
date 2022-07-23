import React from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import {Link} from 'react-router-dom';
import {MdModeEditOutline,MdDelete} from 'react-icons/md'
import { deleteNote } from '../../reducers/noteReducer';

function SavedNote() {
  const dispatch = useDispatch();
  const notes=useSelector(store => store.notes);
  const handleDeleteNote=(id)=>{
    dispatch(deleteNote({id}))
  }
  const renderNotes=()=>notes.map(note=>(
    <div key={note.id} className="note__detail-wrapper">
    <div className="note__detail">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
      <div className='note__icons'>
        <Link to={`/edit-note/${note.id}`}>
          <MdModeEditOutline title='edit'/>
        </Link>
        <button onClick={()=>handleDeleteNote(note.id)}>
        <MdDelete title='delete'/>
        </button>
      </div>
    </div>
  ));
  return (
    <div className='saved-notes__wrapper'>
      {notes.length>0?renderNotes():<p>Sorry No Notes</p>}
    </div>
  )
}

export default SavedNote