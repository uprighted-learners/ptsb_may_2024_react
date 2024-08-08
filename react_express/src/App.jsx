import { useState } from 'react'

import './App.css'

import Auth from './components/Auth/Auth'


function App() {
  const [sessionToken, setSessionToken] = useState("")

  return (
    <>

      {/* Check session token, if it is not avail, show user auth. */}
        
      {
        !sessionToken ? <Auth/> : <>Posts</>
      }

    </>
  )
}

export default App
