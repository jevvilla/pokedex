export default {
  email: {
    presence: { allowEmpty: false },
    email: true,
  },
  password: { presence: { allowEmpty: false } },
};
