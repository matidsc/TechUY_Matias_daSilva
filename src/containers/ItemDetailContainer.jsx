import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import "../styles/ItemDetailContainer.scss";
import Loading from "../components/loading";
const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);
  const { categoryId, id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const getItem = () => {
    fetch(
      `https://my-json-server.typicode.com/matidsc/SampleJSONPlaceholder/${categoryId}/${id}`
    )
      .then((data) => data.json())
      .then((details) => setDetails(details));
  };

  useEffect(() => {
    setTimeout(() => {
      getItem();
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
