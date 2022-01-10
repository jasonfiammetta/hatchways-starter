export interface ProfileServerData {
  firstName: string;
  lastName: string;
  gender?: string;
  birthDate?: Date;
  email?: string;
  phoneNumber?: string;
  address?: string;
  description?: string;
}

export interface ProfileFormData {
  firstName: string;
  lastName: string;
  gender: string;
  birthMonth: number;
  birthDay: number;
  birthYear: number;
  email: string;
  phoneNumber?: string;
  address: string;
  description: string;
}

export interface ProfileApiData {
  error?: { message: string };
  success?: boolean;
}
