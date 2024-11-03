import React, {useState} from "react";
import BaseHoc from "../hoc/BaseHoc";

const FunctionComponent = ({name, age, author, setName}) => { //* Props are the parameters containing information
    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");
    const reduceCount = () => {
        setCount(count - 1);
    }
    return(
        <div>
            <p>This is Function Component</p>
            <button onClick={() => setCount(count + 1)}>Click here to increment by 1</button>
            <hr></hr>
            <button onClick={reduceCount}>Click here to decrement by 1</button>
            <h2>{count}</h2>
            <h4>My company is: {name}. It is {age} years old, established by {author}. </h4>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => setName(changeName)}>Change name to...</button>
        </div>
    )
}

export default BaseHoc(FunctionComponent);

// props: {
//     name: "Star",
//     age: 20,
//     author: "Aditi"
// }