import React, { useReducer, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef } from 'react';

var editor = false

export function ShowEditor(firstNote){
    if (firstNote){
        editor = true
    }
    return editor
    
}

function NoteEditor({num, notes}){
    const [value, setValue] = useState('');
    const setTitle = useRef()
    const setDate = useRef()
    const setContent = useRef()

    // const [msg, dispatch] = useReducer;
    if (ShowEditor()){
        return (
        <> 
            <input ref={setTitle} type="text" defaultValue="New Note" autoFocus/>
            <input ref={setDate} type="datetime-local" />
            <button>Save</button>
            <button>Delete</button>
            <ReactQuill ref={setContent} theme="snow" value={value} onChange={setValue}/>
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