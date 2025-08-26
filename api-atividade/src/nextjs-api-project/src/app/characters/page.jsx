import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card';

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://api.example.com/characters'); // Substitua pela URL da API
                setCharacters(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {characters.map(character => (
                <Card key={character.id} character={character} />
            ))}
        </div>
    );
};

export default CharactersPage;