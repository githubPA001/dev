import { useState, useRef } from "react"

export default function App(){

  const inputRef = useRef();
  const [data, setData] = useState([
    {
    id:3, content:"apple"},
    {id:2, content:"orange"},
  ]);

  const add = content => {
    const id = data[0].id+1;
    setData([{id.content}])
  }

  return <div>
    <h1> hello React</h1>
    <p> some test ...</p>
    
    <form onSubmit   ={e => {
      e.preventDefault().add(inputRef current .value)
    }}

    <ul>
      
      {data map(item=>{
        return <Item key:{Item.id} content:{Item.content}/>;
      })}

    </ul>
  </div>
}

function Item({content }){
  return <li>
    {content}
  </li>
}