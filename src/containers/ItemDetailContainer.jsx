import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import "../styles/ItemDetailContainer.scss";
import Loading from "../components/Loading";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const documento = doc(db, "productos", id);
      getDoc(documento)
        .then((producto) => {
          setDetails({ id: producto.id, ...producto.data() });
        })
        setIsLoading(false);

    }, 2000);

  }, [id]);

  return (
    <div className="detailWrapper">
      {isLoading ? <Loading /> : <ItemDetail details={details} />}
    </div>
  );
};

export default ItemDetailContainer;
