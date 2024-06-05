import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [ar, updatear] = useState([]);
  const [task, taskupdate] = useState();
  function handelinput(event) {
    taskupdate(event.target.value);
  }

  function handelclic() {
    if (task) {
      updatear([...ar, task]);
      taskupdate("");
    }
  }
  function distroything(inde) {
    let a = ar.filter((ar, index) => index !== inde);
    updatear(a);
  }
  return (
    <>
      <div className="text-center  border border-solid p-4">
        <h1 className="text-4xl font-serif p-4">TO do list</h1>
        <div>
          <input
            onChange={handelinput}
            placeholder="add task"
            className="m-4 border border-solid p-4 rounded"
          />
          <button
            onClick={handelclic}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
        <div>
          {ar.map((task, index) => (
            <div
              key={task}
              className="flex items-center justify-center  border border-solid p-4 rounded"
            >
              <div className="flex  intems-center justify h-10 bg-white w-1/3">
                <ol className="flex items-center h-10 w-1/2 justify-start">
                  {index + 1 + ") "}
                  {task}
                </ol>
                <button
                  className="bg-blue-500 text-white font-bold ml-20 w-1/4    rounded"
                  onClick={() => distroything(index)}
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
