import AppName from "./components/AppName"
import AppInput from "./components/AppInput"
import TodoItem from "./components/TodoItem"
import Todoitems from "./components/TodoItems"
import "./App-file.css"

function App() {
  const todoitems=[
    {
      name:"Buy Milk",
      date:"4-10-2023",
    },
    {
      name:"Go to COllege",
      date:"4-10-2023",
    },
    {
      name:"Go to School",
      date:"Right Now",
    }
  ]
  return (
  <center class="todo-container">
        <AppName></AppName>
        <AppInput></AppInput>
        <Todoitems todoitems={todoitems}></Todoitems>
  </center>
  )
}

export default App
