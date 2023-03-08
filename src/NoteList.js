import {useRef} from "react"

var firstSelect = false
export function ShowEditor(){
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

function NoteList({notes}){
    const noteTitle = useRef()
    const noteDate = useRef()
    const noteContent = useRef()
    const completeNote = useRef()
    const notesArray = notes

    return(
        <>
        {notes.map((note) => (
        <div id={`note ${note.id}}`} onClick={() => {
            console.log(`hi from ${note.id}`)
            ShowEditor()
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