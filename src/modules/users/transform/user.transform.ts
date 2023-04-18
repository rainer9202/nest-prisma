import { UserEntity } from '../entities/User';

export const usersTransform = (users: UserEntity | [UserEntity]) => {
  if (!Array.isArray(users)) {
    return transform(users);
  }
  return users.map((user) => {
    return transform(user);
  });
};

export const transform = (user: UserEntity) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
