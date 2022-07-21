export type SignupError = {
  name?: string;
  email?: string;
  password?: string;
  general?: string;
};

export type SignupResponse = {
  error?: SignupError;
  result?: {
    message: string;
  };
};
