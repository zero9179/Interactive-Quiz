import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import Layout from "./Layout";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
