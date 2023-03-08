import React, { useEffect, useReducer, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef } from 'react';
import { ShowEditor } from './NoteList';


const LocalStorageKey = "lotion.notes"


function NoteEditor({notes}){
    const [value, setValue] = useState('');
    const setTitle = useRef()
    const setDate = useRef()
    const setContent = useRef()

    const SaveEditorContents = () =>{
        const NoteContents = {
            title: setTitle.current,
            date: setDate.current,


        }
        localStorage.setItem(LocalStorageKey, JSON.stringify())
    }

    const DeleteNote = () =>{
        
    }
    return (
        <> 
            <div className='hidden'>
                <input ref={setTitle} type="text" defaultValue="New Note" autoFocus/>
                <input ref={setDate} type="datetime-local" />
                <button onClick={SaveEditorContents}>Save</button>
                <button onClick={DeleteNote}>Delete</button>
                <ReactQuill ref={setContent} theme="snow" value={value} onChange={setValue}/>
            </div>
        </>
    )
}

export default NoteEditor