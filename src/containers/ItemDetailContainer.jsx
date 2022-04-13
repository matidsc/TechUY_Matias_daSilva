import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import "../styles/ItemDetailContainer.scss";
import Loading from "../components/Loading";
const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://my-json-server.typicode.com/matidsc/SampleJSONPlaceholder/Productos/${id}`
      )
        .then((data) => data.json())
        .then((details) => setDetails(details))
        .catch((err) => console.log(err));
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
