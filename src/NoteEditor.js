import React, { useEffect, useReducer, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef } from 'react';

const LocalStorageKey = "lotion.notes"
var firstSelect = false
var selectedNoteID

export function ShowEditor(noteId){
    selectedNoteID = noteId
    if (!firstSelect){
        const noNoteSelected = document.getElementById("writing-section").children[0]
        noNoteSelected.remove()
        const quill = document.getElementsByClassName("hidden")[0]
        quill.style.display = "block"
        firstSelect = true
        return true
    }
    else{
        return false
    }
}

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

    function DeleteNote(){
    
    }
    
    return (
        <> 
            <div className='hidden'>
                <input id="note-date" ref={setTitle} type="text" defaultValue="New Note" autoFocus/>
                <input ref={setDate} type="datetime-local" value="2002-10-26T17:45"/>
                <button onClick={SaveEditorContents}>Save</button>
                <button onClick={DeleteNote}>Delete</button>
                <ReactQuill ref={setContent} theme="snow" value={value} onChange={setValue}/>
            </div>
        </>
    )
}

export default NoteEditor