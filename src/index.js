/**
 * index.js - The entry point of the React application.
 * This file initializes the ReactDOM and renders the App component into the DOM.
 * @module index
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/**
 * Initializes the React application by creating a root and rendering the App component.
 * The root is attached to the DOM element with id 'root'.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Render the App component with StrictMode for additional checks and warnings */}
    <App />
  </React.StrictMode>
);
