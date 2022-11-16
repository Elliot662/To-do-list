import Form from "./Components/Form"
import { useState } from "react"
import List from "./Components/List"
import styled from "styled-components"

const App = () => {
  const [lists, setLists] = useState([])
  const [itemInput, setItemInput] = useState("")
  
  const removeHandler = (index) => {
    let newArr = [...lists]
    newArr.splice(index, 1)
    setLists(newArr)
  }

  const finished = false

  const handleSubmit = (e) => {
    e.preventDefault()
    setLists([...lists, { item: itemInput}])
    setItemInput("")
  }

  return (
    <div>
      <h1>Your to do list</h1>
      <Form 
        handleSubmit={handleSubmit}
        itemInput={itemInput}
        setItemInput={setItemInput}
      />

      {lists.map((list, index) => {
        return <List 
        key={index}
        removeHandler={() => removeHandler(index)} 
        finished={() => finished(!finished)}
        item={list.item} />
      })}

    </div>
  )
}

export default App