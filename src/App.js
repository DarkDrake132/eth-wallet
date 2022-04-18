import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./containers/Header/Header";
import HomePage from "./containers/HomePage/HomePage";
import Transaction from "./containers/Transaction/Transaction";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
