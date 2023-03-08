

function NoteList({notes, num}){
    
    return(
        <>
        {notes.map((note) => (
        <div id={`note${num}`} >
           <h3>{note.title}</h3>
           <h5>{note.date}</h5>
           <h4>{note.formattedText.substr(0, 100) + " ..."}</h4>
        </div> 
        
        ))}
        </>
    )
}

export default NoteList