import { useState } from "react";
import { HomePage, NavBar } from "./Pages";
import { Cards } from "./Components/Cards/Cards";

function App() {
  const [productsCart, setProductsCart] = useState(0);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false)


  const addProduct = () => {
    setProductsCart(productsCart + 1)
  }

  const deleteProduct = () => {
    if(productsCart > 0){
      setProductsCart(productsCart - 1)
    }
  }

  return (
    <>
      <NavBar productsCart={productsCart} />
      <HomePage setResult={setResult} setLoading={setLoading}/>
      {result?.length === 0 && <p>No hay productos que mostrar</p>}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        {
          loading ? <p>Cargando Resultados...</p> : <Cards result={result} addProduct={addProduct} deleteProduct={deleteProduct} />
        }
        
      </div>
    </>
  );
}

export default App;
