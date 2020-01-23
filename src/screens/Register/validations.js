export default {
  username: { presence: { allowEmpty: false } },
  email: {
    presence: { allowEmpty: false },
    email: true,
  },
  password: { presence: { allowEmpty: false } },
  confirmPassword: { presence: { allowEmpty: false }, equality: 'password' },
};
