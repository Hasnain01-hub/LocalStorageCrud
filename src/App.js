import { Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import FormData from './Components/FormData';
import Edit from './Components/Edit';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/add-form" element={<FormData />} />
      <Route exact path="/edit-form/:id" element={<Edit />} />
    </Routes>
    </>
  );
}

export default App;
