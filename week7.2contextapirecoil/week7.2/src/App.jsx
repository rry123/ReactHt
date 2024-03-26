import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

import { countAtom, evenSelector } from "./store/atoms/count";
import { outputAtom } from "./store/atoms/output";

function App() {
  return (
    <>
      <div>
        <RecoilRoot>
          <Count />
        </RecoilRoot>
      </div>
    </>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}
function CountRenderer() {
  const count = useRecoilValue(countAtom); // if i need only the value then i will use the useRecoilvalue

  // if i need to use both count and setCount then use useRecoilState
  return <div>{count}
  <EvenCountRenderer></EvenCountRenderer>
  </div>;
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even" : null}
  </div>
}


function Buttons() {
  // Here it needs both count and setCount so i need to use the useRecoilState
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}



export default App;
