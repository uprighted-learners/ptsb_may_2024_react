import { useState } from 'react'
import './App.css'

import Button from "./components/ui/Button"

function App() {
  const [messages, setMessages] = useState(["Some Message", "Some other message"])

  const [showMessages, setShowMessages] = useState(false)

  const [showConfirmDelete, setShowConfirmDelete] = useState(false)

  const handleDelete = () => {
    setMessages([])
    setShowConfirmDelete(false)
  }

  const msgNotifier = () => {
    if(messages.length > 0) {
      return <h1>You have messages!</h1>
    }
  }

  return (
    <>
    {msgNotifier()}

    {
      showConfirmDelete && 
      <div className='modal'>
        <h1>Are you sure you want to delete all of your messages?</h1>
        
        <Button 
        color="red"
        text="Delete"
        handleClick={() => handleDelete()}
        />

        <div style={{position: "absolute", top: 0, right: 0}}>
          <Button 
          color="transparent"
          text="❌"
          handleClick={() => setShowConfirmDelete(false)}          
          />
          
        </div>
      </div>

    }
    <Button 
    color="blue"
    text={showMessages ? "Hide" : "Show"}
    handleClick={() => setShowMessages((prev) => !prev)}

    />
    {
      showMessages && 
      <div>
        {messages.length > 0 && 
        <Button
        color="red"
        text="Delete All"
        handleClick={() => setShowConfirmDelete(true)}
        />}

        {messages.length > 0 ? messages.map((msg) => <p key={msg}>{msg}</p>) : <h4>No messages in inbox</h4> }

      </div>
    }
    </>
  )
}

export default App
