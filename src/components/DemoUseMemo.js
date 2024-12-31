import React, { useMemo, useState } from "react";
import { nThPrime } from "../utils/helper";

const DemoUseMemo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //This console will run everytime Demo component render. Lets say this is heavy operation
  console.log("Rendered...");

  //Problem - This Heavy Operation will run everytime Demo component render.When we toggle theme this operation will happen
  //const prime = nThPrime(text);

  //Solution - useMemo Hook - useMemo is a React Hook that lets you cache the result of a calculation between re-renders until dependency changes.
  const prime = useMemo(() => nThPrime(text), [text]);

  //Read useCallback

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>

      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <h1 className="mt-4 font-bold text-xl">{prime}</h1>
      </div>
    </div>
  );
};

export default DemoUseMemo;
