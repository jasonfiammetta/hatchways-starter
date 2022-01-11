import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileApiData } from '../../interface/Profile';

const getProfile = async (username: string): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/profiles/${username}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getProfile;
