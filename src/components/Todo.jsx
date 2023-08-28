import React, { useState } from 'react'


const List = (props)=>{
  const {list} = props


  return(
    <ul>
      {list && list.map((n,i)=>(
        <li key={i}>{n}</li>
      ))}
    </ul>
  )
}


export default function Todo() {
  const [toDo, setTodo] =useState('');
  const [toDos, setTodos]= useState([]);

  //input값 변경
  const onChange = (event) =>{
    setTodo(event.target.value)
  };

  //toDos 배열로 보내기
  const onSubmit = (event) =>{
    event.preventDefault();
    if(toDo === ''){
      return
    }
    setTodos((currentArray)=>[...currentArray,toDo])
    setTodo('');
  }

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type='text'onChange={onChange} value={toDo} placeholder='Write Here'/>
        <input type='submit' value={'add To do'}/>
      </form>
      <br/>
      <hr/>
      <List list={toDos}/>
    </div>
  )
}
