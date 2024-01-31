import React, { createContext, useReducer } from "react";
import CounterOne from "./Component/CounterOne";
import CounterTwo from "./Component/CounterTwo";
import CounteThree from "./Component/CounterThree";
import ComponentA from "./Component1/ComponentA";
import ComponentB from "./Component1/ComponentB";
import ComponentC from "./Component1/ComponentC";
import DataFetch from "./Component_Data_Fetch/DataFetch";
import Callback from "./Compoent_call_back/Callback";
import Memo from "./Compoent_call_back/Memo";
import Hook_useRef from "./Component_ref/Hook_useRef";
import ButtonIncrement from "./HOC/ButtonIncrement";
import HoverIncrement from "./HOC/HoverIncrement";
import DocTitleOne from "./Try_Custom_Hooks/DocTitleOne";
import Counter from "./Try_Custom_Hooks/Counter";
import UserForm from "./Try_Custom_Hooks/UserForm";
/* useContext + useReducer */

export const countContext = createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  {
    /* useContext + useReducer */
  }
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounteThree /> */}
      {/* useContext + useReducer */}
      <countContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h1>Count = {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </countContext.Provider>
      <hr />
      <hr />
      <hr />
      <h2>Data Fetching using useReducer</h2>
      <DataFetch />
      <hr />
      <hr />
      <hr />
      <Callback />
      <hr />
      <hr />
      <hr />
      <Memo />
      <hr />
      <hr />
      <hr />
      <Hook_useRef />
      <hr />
      <hr />
      <hr />
      <ButtonIncrement />
      <HoverIncrement />

      <hr />
      <hr />
      <hr />
      <DocTitleOne />

      <hr />
      <hr />
      <hr />
      <Counter />

      <hr />
      <hr />
      <hr />
      <UserForm />
    </div>
  );
};

export default App;
