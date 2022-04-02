import React, { useEffect, useState } from "react";
import "../styles/itemListContainer.scss";
import ItemCount from "../components/itemCount";
import ItemList from "../components/itemList";
import Loading from "../components/loading";
import { useParams } from "react-router-dom";
const ItemListContainer = ({ greeting }) => {
/*
     <ItemCount stock={0} initial={0} onAdd={onAdd} />
        <ItemCount stock={10} initial={0} onAdd={onAdd} />
        <ItemCount stock={5} initial={0} onAdd={onAdd} />
    */
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {categoryId}=useParams()

  useEffect(() => {
    setTimeout(() => {
      fetch(
         categoryId?`https://my-json-server.typicode.com/matidsc/SampleJSONPlaceholder/${categoryId}`:
        `https://my-json-server.typicode.com/matidsc/SampleJSONPlaceholder/GPU`
      )
        .then((data) => data.json())
        .then((items) => setProductos(items));
        setIsLoading(false)
        console.log(productos)
    }, 1000);
  }, [categoryId]);
  
  const onAdd = (count) => {
    console.log(count);
  };
  return (
    <div>
   <section className="itemListContainer">
        <h1>{greeting}</h1>
         
        {isLoading?<Loading/>:<ItemList productos={productos} />} 
      </section>
      
     </div>
  );
};

export default ItemListContainer;
