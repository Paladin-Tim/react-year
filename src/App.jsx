import { createElement } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// На мой взгляд, все приложение сейчас написано в декларативном стиле

function Logo({ path }) {
  return createElement("img", {
    className: "logo",
    alt: "React logo",
    src: path,
  });
}

export const App = () => {
  const date = new Date();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          {createElement(Logo, { path: reactLogo })}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>The year is {date.getFullYear()}</p>
      </div>
    </>
  );
};
