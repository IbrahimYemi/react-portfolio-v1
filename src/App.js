import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDesc from "./components/JobDesc";
import JobContext from "./Context/JobContext";
import Err404 from "./pages/404";
import About from "./pages/Contact";
import Design from "./pages/Design";
import Experiences from "./pages/Experiences";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  const { job } = useContext(JobContext);
  const [path, setPath] = useState("");

  useEffect(() => {
    const path_name = job?.name || "null";
    setPath(path_name.split(" ").join("-"));
  }, [job]);

  const [theme, setTheme] = useState(true);
  const [weather, setWeather] = useState(true);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const handleWeather = () => {
    setWeather(!weather);
    setTheme(!theme);
  };

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
        <Route exact path="/experiences" element={<Experiences />} />
        <Route exact path={`/experiences/${path}`} element={<JobDesc />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Err404 />} />
      </Routes>
    </Router>
  );
};

export default App;
