import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido!"/>}/>
          <Route path='/:categoryId/:id' element={<ItemDetailContainer/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
