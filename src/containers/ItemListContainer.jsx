import React, { useEffect, useState } from "react";
import "../styles/itemListContainer.scss";
import ItemList from "../components/ItemList";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      const coleccionProductos = collection(db, "productos")
      let consulta
      categoryId
        ? (consulta = query(
            coleccionProductos,
            where("categoria", "==", categoryId)
          ))
        : (consulta = query(
            coleccionProductos,
            where("destacado", "==", "true")
          ));
  
      getDocs(consulta)
        .then((result) => {
          const lista = result.docs.map((producto) => {
            const id = producto.id;
            return {
              id,
              ...producto.data(),
            };
          });
          setProductos(lista);
          setIsLoading(false);
          console.log()
        })

    }, 1000);

  }, [categoryId]);

  return (
    <div>
      <section className="itemListContainer">
        <h1 className="greeting">{categoryId ? categoryId : greeting}</h1>
        {isLoading ? <Loading /> : <ItemList productos={productos} />}
      </section>
    </div>
  );
};

export default ItemListContainer;
