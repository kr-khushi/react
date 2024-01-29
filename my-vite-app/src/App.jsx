import { useState } from 'react'
import './App.css'
import HookEffectOne from './Component/HookEffectOne.jsx'
import IntervalCounter from './Component/IntervalCounter.jsx'
import DataFetch from './Component/DataFetch.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("Hello, React!")
  const [like, setLike] = useState(true)
  const [age, setAge] = useState(40)

  const [form, setForm] = useState({
    firstName: "Khushi", 
    lastName: "Patel", 
    email: "khushi.@knackroot.com"
  })

  const handleCount = () => {
    setCount(count + 1)
  }

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleChange = (e) => {
    setLike(e.target.checked)
  }

  const increment = () => {
    setAge(age => age + 1)
  }


  return (
    <>
      <h1>Hello</h1>
      <p>Count state</p>
      <button onClick={handleCount}>Click Me</button>
      <p>Count = {count}</p>
      

      <p>Text State</p>
      <input value={text} onChange={handleText}/>
      <p>You entered text : {text}</p>
      <button onClick={() => setText("Hello, React!")}>Reset</button>

      <p>Boolean state</p>
      <label>
        <input type='checkbox'
        checked={like}
        onChange={handleChange} />

        I Like this
        </label>
      <p>You {like ? 'liked' : "don't like"} Change</p>



      <p>Passing the updater function </p>
      <p>Your age is : {age}</p>
      <button onClick={
        () => {
          increment()
          increment()
          increment()
        }
      }>+3</button>
      <button onClick={
        () => {
          increment()
        }
      }>+1</button>


      <hr />
      <p>Example of object and array State</p>
      <label>First Name: 
        <input value={form.firstName}
        onChange={
          (e) => {
            setForm({
              ...form,
              firstName: e.target.value
            })
          }
        } />
      </label>
      <label>Last Name: 
        <input value={form.lastName}
        onChange={
          (e) => {
            setForm({
              ...form,
              lastName: e.target.value
            })
          }
        } />
      </label>  
      <label>Email: 
        <input value={form.email}
        onChange={
          (e) => {
            setForm({
              ...form,
              firstName: e.target.value
            })
          }
        } />
      </label>
      <p> {form.firstName + " " + form.lastName + " " + form.email} </p>



      <hr />
      <hr />
      <hr />
      <HookEffectOne />


      <IntervalCounter />


      <hr />
      <hr />
      <hr />
      <hr />
      <DataFetch />
      
      
    </>
  )
}

export default App

