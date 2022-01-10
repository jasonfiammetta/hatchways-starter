import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileFormData, ProfileServerData, ProfileApiData } from '../../interface/Profile';

const editProfile = async (profileFormData: ProfileFormData): Promise<ProfileApiData> => {
  const profileData = extractServerData(profileFormData);

  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ profileData }),
    credentials: 'include',
  };
  return await fetch(`/profiles/update`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

const extractServerData = (formData: ProfileFormData): ProfileServerData => {
  const serverData: ProfileServerData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
  };
  if (formData.birthMonth && formData.birthDay && formData.birthYear) {
    serverData.birthDate = new Date(formData.birthYear, formData.birthMonth - 1, formData.birthDay);
  }

  // typescript is making it difficult to loop through this
  if (formData.gender) {
    serverData.gender = formData.gender;
  }
  if (formData.email) {
    serverData.email = formData.email;
  }
  if (formData.phoneNumber) {
    serverData.phoneNumber = formData.phoneNumber;
  }
  if (formData.address) {
    serverData.address = formData.address;
  }
  if (formData.description) {
    serverData.description = formData.description;
  }

  return serverData;
};

export default editProfile;
