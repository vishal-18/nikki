import { createSlice } from '@reduxjs/toolkit'

const initialState=[];
const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote:(state, action)=> {
      state.push(action.payload)
    },
    editNote:(state,action)=>{
      const { id, title, content } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        existingUser.title = title;
        existingUser.content = content;
      }
    },
    deleteNote:(state, action)=> {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        return state.filter(user => user.id !== id);
      }
    }
  }
})

export const { addNote,editNote, deleteNote } = noteSlice.actions
export default noteSlice.reducer

