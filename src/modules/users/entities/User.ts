export interface UserEntity {
  id?: number;
  name: string;
  email: string;
  password?: string;
  updatedAt?: Date;
  createdAt?: Date;
}
