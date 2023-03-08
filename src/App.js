import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Err404 from "./pages/404";
import Design from "./pages/Design";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  const [theme, setTheme] = useState(true);
  const [weather, setWeather] = useState(true);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const handleWeather = () => {
    setWeather(!weather);
    setTheme(!theme);
  };

  useEffect(() => {
    const day = "day";
    return () => {
      day.toString();
    };
  }, [weather]);

  return (
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route
            exact
            path="/"
            element={
              <Design
                theme={theme}
                handleTheme={handleTheme}
                weather={weather}
                handleWeather={handleWeather}
              />
            }
          />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="*" element={<Err404 />} />
        </Routes>
      </Router>
  );
};

export default App;
