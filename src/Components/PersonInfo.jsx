import { LinearProgress } from '@material-ui/core'
import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export default function PersonInfo() {
    const{id}=useParams()
    const [person, setperson] = useState([])
    const [comment, setcomment] = useState([])
    const [pic, setpic] = useState([])
     useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => setperson(data))
         
     }, [])
    
     useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(response => response.json())
    .then(com => setcomment(com))
         
     }, [])

     useEffect(() => {
     fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(picc => setpic(picc.results[0].picture.thumbnail))
         
     }, [])
     const body={margin:"20px",background:"gray", color:"white",padding:"5px"} 
    return (
        <div style={body}>
            <div >
            <h2>Heading: {person.title}</h2>
            <h4 > Post: {person.body}</h4>
            </div>
            <div style={body}>
                
                <h5>Comment:</h5>
                <hr />
                <img src={pic} alt="" />
                <h5>Name:{comment.name}</h5>
                <small>{comment.body}</small>
                {/* <br /> */}
                <p><small>Email: {comment.email}</small></p>
            </div>
        </div>
    )
}
