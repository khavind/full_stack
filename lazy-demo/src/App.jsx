import React, { lazy, Suspense, useState } from "react";
import "./App.css";

const ComponentA = lazy(() => import("./ComponentA"));
const ComponentB = lazy(() => import("./ComponentB"));

function App() {

  const [show, setShow] = useState("");

  return (
    <div className="container">

      <h1>Lazy Loading Example</h1>

      <button onClick={() => setShow("A")}>Load Component A</button>
      <button onClick={() => setShow("B")}>Load Component B</button>

      <Suspense fallback={<h3>Loading...</h3>}>

        {show === "A" && <ComponentA />}
        {show === "B" && <ComponentB />}

      </Suspense>

    </div>
  );
}

export default App;