import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const CharacterDetail = ({ character }) => {
    if (!character) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{character.name}</h1>
            <img src={character.image} alt={character.name} className="w-48 h-48 rounded" />
            <p className="mt-4">{character.description}</p>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        const response = await axios.get(`https://api.example.com/characters/${id}`);
        const character = response.data;

        return {
            props: { character },
        };
    } catch (error) {
        console.error(error);
        return {
            props: { character: null },
        };
    }
}

export default CharacterDetail;