
import axios from 'axios';
import React, { memo, useEffect, useMemo, useReducer, useState } from 'react';
import { ListGroupItem, ListGroup, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ComponentA from "./componen/ComponentA";

// Minggu 8
import ComponentSatu from './componen/ComponentSatu';
import ComponentDua from './componen/ComponentDua';
import './App.css';

// export const CounterContext = React.createContext();



// const nilaiawal = {
//   counter1: 0,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "tambah":
//       // return {...state , counter1: state.counter1+1 , counter2: state.counter2+1};
//       return { ...state, counter1: state.counter1 + action.payload }; //Payload iku parameter dari dispatch
//     case "kurang":
//       return { ...state, counter1: state.counter1 - action.payload };
//     case "reset":
//       return nilaiawal;
//     default:
//       return state;
//   }
// }

//Mulai Axios

const stateAwal = {
  loading: true,
  error: "",
  todos: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        loading: false,
        error: "",
        todos: action.payload
      }
    case "SET_ERROR":
      return {
        loading: false,
        error: "Ada Error",
        todos: []
      }
    default:
      break;
  }
}

function App() {
  // const [state, dispatch] = useReducer(reducer, nilaiawal);
  //Mulai Axios


  // Minggu 8
  const [countA , setcountA] = useState(0);
  const [countB , setcountB] = useState(0);
  const incrementA = () =>{
    setcountA(countA+1);
  }
  const incrementB = () =>{
    setcountA(countA+1);
  }
  // ---- Minggu 8




  const [state, dispatch] = useReducer(reducer, stateAwal);
  useEffect(
    () => {
      axios.get("https://jsonplaceholder.typicode.com/todos").then(
        res => {
          console.log(res.data);
          dispatch({ type: "SET_DATA", payload: res.data })
        }).catch(err => {
          dispatch({ type: "SET_ERROR" });
        })
    }, []);
  // const Listmarkup = <div>List markup</div>

  const Listmarkup = (
    <ListGroup>
      {state.todos.map(todo =>
        <ListGroupItem key={todo.id}>{todo.title + " - "}  {todo.completed ? <Badge color="success bg-success">Completed</Badge>:<Badge color="success bg-danger">In Completed</Badge>}</ListGroupItem>
      )}
    </ListGroup>

    // </ul>
  )

  // Minggu 8
  const memoComponentSatu = useMemo(() => {
    return <ComponentSatu count={countA}/>
  });
  // Minggu 8
  
  return (
    // <CounterContext.Provider value={{ counter1: state.counter1, dispatch }}>
    //   <div className="App">
    //     App Js {state.counter1}
    //     <ComponentA />
    //   </div>
    // </CounterContext.Provider>

    <div className="App">
      


      {/* {state.loading ? "Loading" : state.error ? state.error : Listmarkup} */}


      {/* IWP MINGGU 8 */}
      App Js count A:
      <p></p>
        <button onClick={incrementA}>Increment A</button>
      <p></p>
      <button onClick={incrementB}>Increment B</button>
      <p></p>
      {memoComponentSatu}

      <ComponentDua/>
    </div>

  );
}

export default App;

// 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'
