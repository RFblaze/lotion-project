import {useRef} from "react"

function NoteList({notes}){
    const noteTitle = useRef()
    const noteDate = useRef()
    const noteContent = useRef()


    
    return(
        <>
        {notes.map((note) => (
        <div id={`note ${note.id}}`} >
           <h3 ref={noteTitle}>{note.title}</h3>
           <h5 ref={noteDate}>{note.date}</h5>
           <h4 ref={noteContent}>{note.formattedText.substr(0, 100) + " ..."}</h4>
        </div> 
        
        ))}
        </>
    )
}

export default NoteList