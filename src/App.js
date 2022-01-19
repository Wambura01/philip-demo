import "./App.css";
import { Routes, Route } from "react-router-dom";

import Form from "./components/form/form";
import Table from "./components/table/table";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="form" element={<Form />} />
        <Route path="table" element={<Table />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
