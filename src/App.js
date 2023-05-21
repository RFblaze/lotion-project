import { useNavigate } from "react-router-dom"
import { useState } from "react"


function App(){
  let [showNoteList, setShowNoteList] = useState(true)

  const ToggleNoteList = () =>{
    setShowNoteList(!showNoteList)
    console.log(showNoteList)
  }

  return (
    <>
  <div id="top">
    <div><button id="menu" onClick={ToggleNoteList}>&#9776;</button></div>
    <div><h1 className ="title">Lotion</h1></div>
    <div><h5 className = "title">Like Notion but worse</h5></div>
  </div>
  <div id="container">
    <div id="notes-section">
      <div id="header">
        <h2>Notes</h2>
        <button>+</button>
      </div>
      <div id="note-list">
        <h2>No Note Yet</h2>
      </div>
    </div>
    <div id="writing-section">
      <h1>Create a new note or select one</h1>
    </div>
  </div>
  
  </>
  )
}

export default App