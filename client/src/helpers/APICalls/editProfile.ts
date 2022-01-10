import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileFormData, ProfileApiData } from '../../interface/Profile';

const editProfile = async (profileData: ProfileFormData): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ profileData }),
    credentials: 'include',
  };
  return await fetch(`/profiles/edit`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default editProfile;
