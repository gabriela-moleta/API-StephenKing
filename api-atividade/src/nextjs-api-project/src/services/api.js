import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.publicapis.org', // Substitua pela URL base da API que você está utilizando
});

export const fetchCharacters = async () => {
  try {
    const response = await api.get('/characters'); // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    throw error;
  }
};

export default api;