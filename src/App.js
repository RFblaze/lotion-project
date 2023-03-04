import React, {useState} from "react"

function App() {
  const [num, setNum] = useState(0);
  
  
  return (
  <>
  <div id="top">
    <div><button id="menu">&#9776;</button></div>
    <div><h1 class ="title">Lotion</h1></div>
    <div><h5 class = "title">Like Notion but worse</h5></div>
  </div>
  <div id="container">
    <div id="notes-section">
      <div id="header">
        <h2>Notes</h2>
        
        <button onClick={ () => {
          
          const newNote = document.createElement("div")
          // newNote.addEventListener("click")
          const noteTitle = document.createElement("h3")
          noteTitle.append(`New Note ${num}`)
          setNum(num + 1)
          newNote.append(noteTitle)
          const notes = document.getElementById("note-list")
          notes.appendChild(newNote)
        } }>+</button>
      </div>
      <div id="note-list">
      </div>
    </div>
    <div id="writing-section">
      <h1>Select a note, or create a new one</h1>
    </div>
  </div>
  
  </>
  );
}

export default App;
