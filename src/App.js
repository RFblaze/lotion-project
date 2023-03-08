import React, {useState, useRef, useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import NoteEditor from "./NoteEditor";
import { ShowEditor } from "./NoteEditor";
import NoteList from "./NoteList";
import { v4 as uuidv4} from "uuid";

function App() {
  let [num, setNum] = useState(0)
  const [notes, setNotes] = useState([])
  const note_section = useRef()
  const writing_section = useRef()

  const HideNoteList = () =>{
    if (note_section.current.style.display != "none"){
      note_section.current.style.display = "none"
      writing_section.current.style.width = "100%"
    }
    else{
      note_section.current.style.display = "block"
      writing_section.current.style.width = "80%"
    }
    
  }


  const AddNote = () =>{
    console.log("hej")
    
    if(num === 0){
      const noNoteYet = document.getElementById("note-list").children[0]
      noNoteYet.remove()
      ShowEditor(true)
    }

    const newNote = {
      id: uuidv4(),
      title: `New Note ${num}`,
      formattedText: "",
      date: ""
    }
    setNotes([newNote, ...notes])
    setNum(num + 1)
  }

  return (
  <>
  <div id="top">
    <div><button id="menu" onClick={HideNoteList}>&#9776;</button></div>
    <div><h1 class ="title">Lotion</h1></div>
    <div><h5 class = "title">Like Notion but worse</h5></div>
  </div>
  <div id="container">
    <div id="notes-section" ref={note_section}>
      <div id="header">
        <h2>Notes</h2>
        <button onClick={AddNote}>+</button>
      </div>
      <div id="note-list">
        <h2>No Note Yet</h2>
        <NoteList notes={notes} />
      </div>
    </div>
    <div id="writing-section" ref={writing_section}>
      <NoteEditor/>
    </div>
  </div>
  
  </>
  );
}

export default App;
