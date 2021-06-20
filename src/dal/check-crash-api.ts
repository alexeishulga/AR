import { url } from './instance';

const checkIfCrash = async (id: string, status: string) => {
  const response = await fetch(`${url}/engine?id=${id}&status=${status}`, {
    method: 'GET',

  });
  return response;
};
export default checkIfCrash;
