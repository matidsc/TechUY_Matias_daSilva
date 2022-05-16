import React, { useEffect, useState } from "react";
import "../styles/itemListContainer.scss";
import ItemList from "../components/ItemList";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import BackToMain from "../components/backToMain";
import AnimatedPage from "../components/animatedPage";
import { Link } from "react-router-dom";
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsExists, setItemsExists] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      const coleccionProductos = collection(db, "productos");
      let consulta={};
      categoryId
        ? (consulta = query(
            coleccionProductos,
            where("categoria", "==", categoryId)
          ))
        : (consulta = query(
            coleccionProductos,
            where("destacado", "==", "true")
          ));

      getDocs(consulta).then((result) => {
        const lista = result.docs.map((producto) => {
          const id = producto.id;
          return {
            id,
            ...producto.data(),
          };
        });
        return lista.length === 0
          ? setItemsExists(false)
          : (setProductos(lista), setIsLoading(false), setItemsExists(true));
      });
    }, 2000);
  }, [categoryId]);

  return itemsExists ? (
    <div>
        <section className="itemListContainer">
          {isLoading ? (
            <Loading />
          ) : (

            <AnimatedPage>

              {!categoryId&&<Link to={'/TechUY_Matias_daSilva/GPU'} className="imgPortada"><img alt="RTX 3000 Nvidia" src='https://i.imgur.com/dvi0atl.png'/></Link> 
                }
              <h1 className="greeting">{categoryId ? categoryId : greeting}</h1>
              <ItemList productos={productos} />
              </AnimatedPage>

            
          )}
        </section>
    </div>
  ) : (
    <BackToMain
      boton="Volver al inicio"
      ruta="/TechUY_Matias_daSilva"
      mensaje="Categoría no válida"
    />
  );
};

export default ItemListContainer;
