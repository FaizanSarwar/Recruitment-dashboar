import Nav from "./components/layout/Nav";
import Home from "./components/pages/Home";
import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewUser from "./components/user/ViewUser";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddUser />} />
          <Route exact path="/edit/:id" element={<EditUser />} />
          <Route exact path="/view/:id" element={<ViewUser />} />


        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
