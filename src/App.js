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

  const completed = (index) => {
    let arr = [...lists]
    let update = arr[index]
    update.finished = true
    setLists(arr)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLists([...lists, { item: itemInput, finished: false}])
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
        finished={list.finished}
        completed={() => completed(index)}
        item={list.item} />
      })}

    </div>
  )
}

export default App