import { api } from './ConfigAxios';

const GetId = async ( userId) => {
  try {
    const response = await api.get(`${userId}`);
    return response.data;
  } catch (error) {
    
    console.error('Erreur lors de l\'appel à l\'API :', error);
    throw error; 
  }
};

export default GetId;
