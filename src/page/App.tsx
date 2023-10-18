import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="pw-bg-red-200 pw-px-4 pw-py-2">123</div>
      <div className="pw-mt-2 pw-flex  pw-max-w-xs pw-items-center pw-justify-between pw-bg-blue-500 pw-px-5">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
