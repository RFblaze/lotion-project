import React, { useReducer, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function NoteEditor({num, notes}){
    const [value, setValue] = useState('');
    // const [msg, dispatch] = useReducer;
    if (1){
        return (
        <> 
            <input type="text" defaultValue="New Note" autoFocus/>
            <input type="datetime-local" />
            <button>Save</button>
            <button>Delete</button>
            <ReactQuill theme="snow" value={value} onChange={setValue}/>
        </>
        );
    }
    else{
        return(
        <h1>Create a new note or select one</h1>
        )
    }
}

export default NoteEditor