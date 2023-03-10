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
        // Must look for corresponding note id in notes array and replace it with new values
        for (const note of notes){
            if (note.id === selectedNoteID){
                note.title = setTitle.current
                note.date = setDate.current
                note.formattedText = setContent.current
            }
        }
        localStorage.setItem(LocalStorageKey, JSON.stringify([...notes]))
    }

    function DeleteNote(){
        let index = 0
        for (const note of notes){
            index += 1
            if (note.id === selectedNoteID){
                break
            }
        }
        notes.splice(index, 1)
        localStorage.setItem(LocalStorageKey, JSON.stringify([...notes]))
    }
    
    return (
        <> 
            <div className='hidden'>
                <input id="note-date" ref={setTitle} type="text" defaultValue="New Note" autoFocus/>
                <input ref={setDate} type="datetime-local" defaultValue="2002-10-26T17:45"/>
                <button onClick={SaveEditorContents}>Save</button>
                <button onClick={DeleteNote}>Delete</button>
                <ReactQuill ref={setContent} theme="snow" defaultValue={value} onChange={setValue}/>
            </div>
        </>
    )
}

export default NoteEditor