import { useState } from "react";
import { HomePage, NavBar } from "./Pages";
import { Cards } from "./Components/Cards/Cards";
import { ButtonsCounter } from "./Components/ButtonsCounter/ButtonsCounter";

function App() {
  const [productsCart, setProductsCart] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 12;

  const totalPages = Math.ceil(result.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return result.slice(startIndex, endIndex);
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const addProduct = () => {
    setProductsCart(productsCart + 1);
  };

  const deleteProduct = () => {
    if (productsCart > 0) {
      setProductsCart(productsCart - 1);
    }
  };

  return (
    <>
      <NavBar productsCart={productsCart} />
      <HomePage setResult={setResult} setLoading={setLoading} />
      {result?.length === 0 && (
        <p
          style={{
            color: "green",
            fontSize: "40px",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          Inicia buscando tu próxima compra
        </p>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        {loading ? (
          <p>Cargando Resultados...</p>
        ) : (
          <>
            <Cards
              result={result}
              addProduct={addProduct}
              deleteProduct={deleteProduct}
              getCurrentPageItems={getCurrentPageItems}
            />

            {/* Mostrar los números de página */}
            {result?.length > 0 && (
              <ButtonsCounter
                goToPage={goToPage}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
