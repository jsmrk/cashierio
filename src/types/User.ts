export enum UserRole {
  Admin = "admin",
  User = "user",
}

export type User = {
  email: string;
  password: string;
  role: UserRole;
};
