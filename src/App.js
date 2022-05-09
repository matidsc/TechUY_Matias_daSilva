import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/cart";
import Customprovider from "./context/context";
import FrmComprador from "./components/frmComprador";
import BackToMain from "./components/backToMain";
import AboutPage from "./components/aboutPage";
import ContactPage from "./components/contactPage";
function App() {

  return (
    <Router>
      <Customprovider>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Productos populares" title="Productos detacados"/>}/>
          <Route path='*' element={<BackToMain boton='Volver al inicio'ruta="/" mensaje='Página no encontrada'/>}/>
          <Route path='/contacto' element={<ContactPage/>}/>
          <Route path='/sobrenosotros' element={<AboutPage />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<FrmComprador />}/>
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
          <Route path='/:categoryId' element={<ItemListContainer greeting={'Productos'}/>}/>          
        </Routes>
      </div>
      </Customprovider>
    </Router>
  );
}

export default App;
