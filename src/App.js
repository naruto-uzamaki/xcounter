import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
    </div>
  );

}

export default App;
