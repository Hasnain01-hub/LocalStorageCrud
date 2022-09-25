import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter, Form } from "react-router-dom";
import Home from './Components/Home';
import FormData from './Components/FormData';
import Edit from './Components/Edit';

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/add-form" element={<FormData />} />
    <Route exact path="/edit-form/:id" element={<Edit />} />
    </Routes>
    </>
  );
}

export default App;
