import React from 'react'
import data from "../task1.json";
import Card from './Card';
import "../styles/task1.css"
const Task1 = () => {
  return (
    <>
    <p>Total Posts: {data?.posts?.length}</p>
    <div class="main">
        <Card data={data}/>
    </div>
    </>
  )
}

export default Task1