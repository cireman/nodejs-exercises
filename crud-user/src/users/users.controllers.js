const uuid = require("uuid");

const userDB = [
  {
    id: "ec6a741f-786d-402c-b39d-89619cf4c7eb",
    first_name: "jhon",
    last_name: "Doe",
    email: "jhon@doe.com",
    password: "p123",
    birthday: "2000-02-20",
  },
];

const getAllUsers = () => {
  return userDB;
};

const getUserById = (id) => {
  const data = userDB.find((db) => db.id === id);
  return data;
};

const createUser = (first_name, last_name, email, password, birthday) => {
    const newUser = {
      id: uuid.v4(),
      first_name,
      last_name,
      email,
      password,
      birthday,
    };
    userDB.push(newUser);
    return newUser;
};

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
}
/*
const createUser = (first_name, last_name, email, password, birthday) => {
  let date = new Date(birthday);
  if (
    typeof first_name === "string" &&
    typeof last_name === "string" &&
    typeof email === "string" &&
    typeof password === "string" &&
    (date instanceof Date &&
    !isNaN(x))
  ) {
    const newUser = {
      id: uuid.v4,
      first_name,
      last_name,
      email,
      password,
      birthday,
    };
    userDB.push(newUser);
    return newUser
  } else {
    return {message: "Make sure to fill everything, use string on every section except birthday, the format there are numbers and should looks like this yyyy-mm-dd including dashes"}
  }
};
*/