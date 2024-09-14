export interface User {
  id: string;
  first_name: string;
  second_name: string;
  email: string;
  avatar?: string;
}

export interface UserSchema {
  data?: User;
  isLoading: boolean;
}
