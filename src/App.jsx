import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

import {BrowserRouter , Routes ,Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <Routes>
        <Route path="/" element={<UserList/>}></Route>
        <Route path="add" element={<AddUser/>}></Route> 
        <Route path="edit/:id" element={<EditUser/>}></Route> 

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
