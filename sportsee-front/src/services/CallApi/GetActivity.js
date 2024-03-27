import { api } from './ConfigAxios';

const GetPerformance = async ( userId) => {
  try {
    const response = await api.get(`${userId}/activity`);
    return response.data;
  } catch (error) {
    
    console.error('Erreur lors de l\'appel à l\'API :', error);
    throw error; 
  }
};

export default GetPerformance;
