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
          newNote.addEventListener("click", () => window.alert("Clicked"))
          const noteTitle = document.createElement("h3")
          const noteDate = document.createElement("h5")
          const noteSummary = document.createElement("h4")
          noteSummary.append("...")
          const notes = document.getElementById("note-list")
          if (num === 0){
            notes.children[0].remove()
          }
          noteTitle.append(`New Note ${num}`)
          setNum(num + 1)
          newNote.append(noteTitle)
          newNote.append(noteDate)
          newNote.append(noteSummary)
          notes.appendChild(newNote)
          
        } }>+</button>
      </div>
      <div id="note-list">
        <h2>No Note Yet</h2>
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
