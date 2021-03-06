import CreateGarage from '../components/create-garage'; 
import { url } from './instance';

const DeleteCarFromApi = async (id: string) => {
  const response = await fetch(`${url}/garage/${id}`, {
    method: 'DELETE',
  });
  const greeting = await response.json();
  CreateGarage();
  return greeting;
};
export default DeleteCarFromApi;
