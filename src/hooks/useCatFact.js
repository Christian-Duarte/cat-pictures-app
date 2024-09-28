import { useState, useEffect } from "react";

export const useCatFact = () => {
  const [fact, setFact] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para manejar errores

  const fetchFact = () => {
    setLoading(true);
    setError(null); // Reiniciamos el error al hacer una nueva petición

    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const threeFirstWords = fact.split(" ", 3).join(" ");
        setImageUrl(`https://cataas.com/cat/says/${threeFirstWords}`);
        setLoading(false);
      })
      .catch((err) => {
        setError("Hubo un problema al cargar los datos"); // Manejo de errores
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return { fact, imageUrl, loading, error, fetchFact };
};
