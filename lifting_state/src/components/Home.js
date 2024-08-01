import {useState} from 'react'
import {v4 as uuidv4} from "uuid"

const Home = () => {
  const [myItemsOnDesk, setMyItemsOnDesk] =  useState([
    {id: 1 , name: "Coffee"},
    {id: 2, name: "Headphones"},
    {id: 3, name: "Phone"}
  ])

  const [itemToAdd, setItemToAdd] = useState({id: 0, name: ""})

  const handleDelete = (id) => {
    setMyItemsOnDesk((previousValue) => previousValue.filter((obj) => obj.id !== id) )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setMyItemsOnDesk((prev) => [itemToAdd, ...prev] )
    setItemToAdd({id: 0, name: ""})
  }

  return (
    <div className="col">
      <div className='home'>
        <h1>Welcome to the home page</h1>
        <form onSubmit={handleSubmit}>
          <input 
            required
            maxLength={15}
            placeholder='Enter an item'
            onChange={(e) => {
              setItemToAdd({
                id: uuidv4(),
                name: e.target.value
              })
            }}
          /> 

          <button>ADD</button>
        </form>


        <ul>
          {
           myItemsOnDesk.map((obj, idx) => {
            return (
              <li key={obj.id} className='row' >
                <p id="item-name">{obj.name}</p>
                <p className='del' onClick={() => handleDelete(obj.id)}>❌</p>
              </li>
            )
           }) 
          }

          {myItemsOnDesk.length === 0 && <h3>No items to show!</h3>}

        </ul>

        </div>

    </div>


  )
}

export default Home