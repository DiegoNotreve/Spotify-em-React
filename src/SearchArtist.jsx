import { useState, useEffect } from "react";

const SearchArtist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artist, setArtist] = useState(null);
  const [isHidden, setIsHidden] = useState(true);

  // Adicione este console.log para monitorar o valor de searchTerm
  console.log('Componente renderizou, searchTerm:', searchTerm);

  useEffect(() => {
      console.log('useEffect disparou, searchTerm:', searchTerm);
      
      if (searchTerm === "") {
          setIsHidden(true);
          setArtist(null);
          return;
      }

      const fetchData = async () => {
          console.log('fetchData executando com searchTerm:', searchTerm);
          try {
              const response = await fetch(`http://localhost:3000/artists?name_like=${searchTerm}`);
              const data = await response.json();
              console.log('Dados recebidos:', data);
              if (data.length > 0) {
                  setArtist(data[0]);
                  setIsHidden(false);
              } else {
                  setArtist(null);
              }
          } catch (error) {
              console.error("Erro ao buscar artista:", error);
          }
      };

      fetchData();
  }, [searchTerm]);  // Confirme que esta dependência está correta

  const handleChange = (e) => {
      const newValue = e.target.value.toLowerCase();
      console.log('handleChange:', newValue);
      setSearchTerm(newValue);
  };

  return (
      <div>
          <input
              type="text"
              placeholder="Busque um artista..."
              value={searchTerm}
              onChange={handleChange}
          />
          {!isHidden && artist && (
              <div id="result-artist">
                  <h2 id="artist-name">{artist.name}</h2>
                  <img id="artist-img" src={artist.urlImg} alt={artist.name} width="150" />
              </div>
          )}
      </div>
  );
};

export default SearchArtist;
