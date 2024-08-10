import { useState, useRef } from "react";
import Item from "./Item";

export default function App() {
  const inputRef = useRef();
  const [data, setData] = useState([
    { id: 3, content: "apple" },
    { id: 2, content: "orange" },
    { id: 1, content: "papaya" },
  ]);

  const add = (content) => {
    const id = data[0].id + 1;
    setData([{ id, content }, ...data]);
  };

  return (
    <div>
      <h1> hello React</h1>
      <p> some test ...</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          add(inputRef.current.value);
          e.currentTarget.reset();
        }}
      >
        <input type="text" ref={inputRef} />
        <button> ADD </button>
      </form>

      <ul>
        {data.map((item) => {
          return <Item key={item.id} content={item.content} />;
        })}
      </ul>
    </div>
  );
}
// function Item({content }){
//   return <li>
//     {content}
//   </li>
// }
