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
import ResetScroll from "./components/resetScroll";
import Footer from "./components/footer";
function App() {

  return (
    <Router>
      <Customprovider>
      <div className="App">
        <ResetScroll/>
        <NavBar/>
        <Routes>
          <Route path='/TechUY_Matias_daSilva' element={<ItemListContainer greeting="Productos populares" title="Productos detacados"/>}/>
          <Route path='/TechUY_Matias_daSilva/*' element={<BackToMain boton='Volver al inicio'ruta="/TechUY_Matias_daSilva" mensaje='Página no encontrada'/>}/>
          <Route path='/TechUY_Matias_daSilva/contacto' element={<ContactPage/>}/>
          <Route path='/TechUY_Matias_daSilva/sobrenosotros' element={<AboutPage />}/>
          <Route path='/TechUY_Matias_daSilva/cart' element={<Cart/>}/>
          <Route path='/TechUY_Matias_daSilva/checkout' element={<FrmComprador />}/>
          <Route path='/TechUY_Matias_daSilva/productos/:id' element={<ItemDetailContainer/>}/>
          <Route path='/TechUY_Matias_daSilva/:categoryId' element={<ItemListContainer greeting={'Productos'}/>}/>          
        </Routes>
        <Footer/>
      </div>
      </Customprovider>
    </Router>
  );
}

export default App;
