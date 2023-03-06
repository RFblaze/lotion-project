import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useQuill } from "react-quill";
import { useState } from "react";

function MyComponent() {
  const [value, setValue] = useState('');

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

function NoteEditor(){
    // const {quill, quillReff} = useQuill();
    const [noteSelect, setNoteSelect] = useState(0) 
    const container = document.getElementById("container")
    const editorDiv = document.createElement("div")
    editorDiv.setAttribute("id", "editorSection")
    if (noteSelect){
        const msg = document.createElement("h3")
        msg.append("Select a note or create a new one")
        msg.setAttribute("id", "emptyEditor")
        editorDiv.append()
        setNoteSelect(noteSelect + 1)
    }
    else {
        // const msg = document.getElementById("editorSection")
        // msg.remove()
    }



    return(
        
        <>
        </>
    );
}
export default NoteEditor