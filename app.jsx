import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from 'recoil'
import { todosAtomFamily } from './atoms';

//selector family >>
//comes into play when you have to fetch data from the back end 

function App() {

  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
    </RecoilRoot>
  )
}

function Todo({id}) {
  const [todo , setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

  //userecoilstateloadable is nothing but userecoilstate only but it gives you a bunch of things like>>>
  //contents and state
  // or whenever we dont have to worry about settotodo we can just use userecoilvalueloadable


  if(todo.state === "loading") {
    return (
      <div>
        Loading...
      </div>
    )
  } else if(todo.state === "hasValue") {
    return ( // we use contents.title when we use it under this if else statements of the usetecoilstateloadable 
      <div>
        {todo.contents.title} 
        {todo.contents.description}
      </div>
    )
  } else if (todo.state === "hasError") {
    return (
      <div>
        Error while getting data from backend 
      </div>
    )
  }
}

export default App
