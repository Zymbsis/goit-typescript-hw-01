type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(
  initialValues: User,
  newValues: Partial<User>,
): User {
  return { ...initialValues, ...newValues };
}

createOrUpdateUser(
  {
    name: 'Sasha',
    surname: 'Husar',
    email: 'sasha18@mail.com',
    password: '123456',
  },
  {
    email: 'user@mail.com',
    password: 'password123',
  },
);
