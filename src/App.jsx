import ReactLogo from "./assets/react.svg?react";
import viteLogo from "/vite.svg";
import "./App.css";

export const App = () => {
  const date = new Date();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogo className="logo" width={"6rem"}></ReactLogo>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <p>
          The year is {date.getFullYear()}
        </p>
      </div>

    </>
  );
};
