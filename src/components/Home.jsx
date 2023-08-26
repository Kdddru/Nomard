import React from 'react'
import { Link } from 'react-router-dom'









export default function Home() {

  const list = ['todo','coin'];

  return (
    <div>
      {list.map((value)=>(
        <Link to={`/${value}`}>{value} </Link>
      ))}
    </div>
  )
}
