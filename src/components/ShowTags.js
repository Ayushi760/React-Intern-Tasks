import React from 'react'
import tagsIcon from '../assets/tags.svg'
import "../styles/tags.css"
const ShowTags = ({tags}) => {
  return (
    <div class="tags">
    <img src={tagsIcon} height='20px' width='20px'/>
    {tags?.map((item,index)=>(
       <p>{item}</p>
    ))}
    </div>
  )
}

export default ShowTags