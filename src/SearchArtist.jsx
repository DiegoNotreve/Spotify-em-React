import { useState, useEffect } from "react";

const SearchArtist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artist, setArtist] = useState(null);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (searchTerm === "") {
      setIsHidden(true);
      setArtist(null);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/artists?name_like=${searchTerm}`);
        const data = await response.json();
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
  }, [searchTerm]);

  return (
    <div>
      {/* Input de busca */}
      <input
        type="text"
        placeholder="Busque um artista..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />

      {/* Resultado da busca */}
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
