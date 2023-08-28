import React from 'react'
import { Link } from 'react-router-dom'









export default function Home() {
  const list = ['todo','coin'];

  return (
    <div>
      {list.map((value,i)=>(
        <Link key={i} to={`/${value}`}>{value} </Link>
      ))}
    </div>
  )
}
