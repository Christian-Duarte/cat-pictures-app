import { useCatFact } from "./hooks/useCatFact";
import "./App.css";

export const App = () => {
  const { fact, imageUrl, loading, error, fetchFact } = useCatFact();

  const handleClick = () => {
    fetchFact();
  };

  return (
    <main>
      <h1>App de Gatitos</h1>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {fact && !loading && !error && <p>{fact}</p>}
      {imageUrl && !loading && !error && (
        <img src={imageUrl} alt="Imagen de un gato" />
      )}
      <button onClick={handleClick}>Cambiar Imagen</button>
    </main>
  );
};
