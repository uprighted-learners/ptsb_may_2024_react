import { useState } from 'react'
import './App.css'

import Button from "./components/ui/Button"

function App() {
  const [messages, setMessages] = useState(["Some Message", "Some other message"])

  const [showMessages, setShowMessages] = useState(true)

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

    <Button />

    </>
  )
}

export default App
