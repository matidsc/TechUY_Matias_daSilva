import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import { BrowserRouter as Router, Routes, Route,useParams } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartContainer from "./containers/cartContainer";
import Customprovider from "./context/context";
function App() {

  return (
    <Router>
      <Customprovider>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Productos destacados" title="Productos detacados"/>}/>
          <Route path='/cart' element={<CartContainer />}/>
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
          <Route path='/:categoryId' element={<ItemListContainer greeting={'Productos'}/>}/>          
        </Routes>
      </div>
      </Customprovider>
    </Router>
  );
}

export default App;
