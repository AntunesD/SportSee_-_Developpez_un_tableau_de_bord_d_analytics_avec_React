import { api } from './ConfigAxios';

const GetAverage = async ( userId) => {
  try {
    const response = await api.get(`${userId}/average-sessions`);
    return response.data;
  } catch (error) {
    
    console.error('Erreur lors de l\'appel à l\'API :', error);
    throw error; 
  }
};

export default GetAverage;
