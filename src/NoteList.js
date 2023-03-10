import {useRef} from "react"
import { ShowEditor } from "./NoteEditor"

function NoteList({notes}){
    const noteTitle = useRef()
    const noteDate = useRef()
    const noteContent = useRef()
    const completeNote = useRef()
    const notesArray = notes

    return(
        <>
        {notes.map((note) => (
        <div id={`${note.id}}`} onClick={() => {
            console.log(`hi from ${note.id}`)
            ShowEditor(note.id)
        }} >
           <h3>{note.title}</h3>
           <h5>{note.date}</h5>
           <h4>{note.formattedText.substr(0, 100) + " ..."}</h4>
        </div> 
        
        ))}
        </>
    )
}

export default NoteList