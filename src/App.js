import "./App.css";
import ListRendering from "./Components/ListRendering";
import Forms from "./Components/Forms ";
import LifeCycle from "./Components/LifeCycle";
import HookCounter1 from "./Components/HookCounter1";
import HookCOunter2 from "./Components/HookCOunter2";
import HookCounter3 from "./Components/HookCounter3";
import HookCounter4 from "./Components/HookCounter4";
import HookMouseContainer from "./Components/HookMouseContainer";
import React, { Component, useState } from "react";
import ComponenetA from "./Components/ComponenetA";
import CounterReducer from "./Components/CounterReducer";
import CounterReducer2 from "./Components/CounterReducer2";
import CounterReducer3 from "./Components/CounterReducer3";
import DataFetching from "./Components/DataFetching";
import DataFetching2 from "./Components/DataFetching2";
import UseCallbackHook from "./Components/UseCallbackHook";
import UseRefHook from "./Components/UseRefHook";
import DataFething from "./Components/Task/DataFething";
import DigitalClock from "./Components/Task/DigitalClock";
import HoverCounter from "./Components/Purecomponent/HoverCounter";
import ParentComp from "./Components/Purecomponent/ParentComp";
import Problem1 from "./Components/Coding-problems/Problem1";
import Problem2State from "./Components/Coding-problems/Problem2State";
import Problem3props from "./Components/Coding-problems/Problem3props";
import FormProblem from "./Components/Coding-problems/FormProblem";
import RestApiMethods from "./Components/Coding-problems/RestApiMethods";
import InterviewQuestion from "./Components/Coding-problems/InterviewQuestion";
import InterviewQuestion1 from "./Components/Coding-problems/InterviewQuestion1";
import Counter2 from "./Components/HOC/Counter2";
import Counter1 from "./Components/HOC/Counter1";
import Pagination from "./Components/Pagination/Pagination";
import CenteredDiv from "./Components/CenteredDiv";
import Parent from "./task/Parent";
import Reducer from "./Components/Reducer";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  const [name, setName] = useState("Ganesh");
  const [isName, setIsName] = useState(false);

  const changeState = (value) => {
    // setName("Dinesh");
    // setIsName(!isName);
    setName(value);
    console.log(value);
  };
  return (
    <div className="App">
      {/* <ListRendering /> */}
      {/* <Forms /> */}
      {/* <LifeCycle /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter1 /> */}
      {/* <HookCOunter2 /> */}
      {/* <HookCounter3 />x */}
      {/* <HookCounter4 /> */}
      {/* <HookMouseContainer /> */}

      {/* <UserContext.Provider value="Ganesh">
        <ChannelContext.Provider value="Logic Master">
          <ComponenetA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterReducer />   */}
      {/* <CounterReducer2 /> */}
      <Reducer />

      {/* <CounterReducer3 /> */}
      {/* <DataFetching /> */}
      {/* <DataFetching2 /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseRefHook /> */}
      {/* <DataFething /> */}
      {/* <DigitalClock /> */}
      {/* <ParentComp /> */}
      {/* <HoverCounter /> */}
      {/* <Problem1 /> */}
      {/* <Problem2State /> */}
      {/* <Problem3props
        name={name}
        changeState={changeState}
        isName={isName ? "somesh" : "kamlesh"}
      /> */}
      {/* <FormProblem /> */}
      {/* <RestApiMethods /> */}
      {/* <InterviewQuestion /> */}
      {/* <InterviewQuestion1 /> */}

      {/* <Counter2 /> */}
      {/* <Counter1 /> */}
      {/* <Pagination /> */}
      {/* <CenteredDiv /> */}
      {/* <Parent /> */}
    </div>
  );
}

export default App;
