/**
 * App.jsx - The main application component that serves as the entry point for the React app.
 * This file sets up the overall layout by rendering the Header and Hero components.
 * @module App
 */

import "./App.css";
import "@fontsource/epilogue/400.css";
import "@fontsource/epilogue/700.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

/**
 * App component - The root component of the application.
 * @returns {JSX.Element} The JSX element representing the app layout.
 */
function App() {
  return (
    <>
      {/* Render the Header component for navigation and branding */}
      <Header />
      {/* Render the Hero component for the main hero section */}
      <Hero />
    </>
  );
}

export default App; // Export the App component as the default export
