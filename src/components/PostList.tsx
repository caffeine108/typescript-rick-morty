import React, { useState, useEffect } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character';

interface Character {
  id: number;
  name: string;
  image: string;
}

const PostList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('API error');
        }

        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>Rick and Morty Characters:</h2>
          <ul>
            {characters.map((character) => (
              <li key={character.id}>
                <img src={character.image} alt={character.name} />
                {character.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PostList;