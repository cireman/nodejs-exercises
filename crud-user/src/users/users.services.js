const {getUserById, getAllUsers, createUser,} = require('./users.controllers');

const getUsers = (req, res) => {
  const data = getAllUsers();
  res.status(200).json(data);
}

const getOneUser = (req, res) => {
  const id = req.params.id;
  const data = getUserById(id);
  if(data){
    res.status(200).json(data);
  } else {
    res.status(404).json({id: id, message: 'Invalid ID'})
  }
};

const createNewUser = (req, res) => {
  const {first_name, last_name, email, password, birthday} = req.body;

  let date = new Date(birthday);
  if (
    typeof first_name === "string" &&
    typeof last_name === "string" &&
    typeof email === "string" &&
    typeof password === "string" && 
    (date instanceof Date && !isNaN(date))
  ) {
    const data = createUser(first_name, last_name, email, password, birthday);
    res.status(201).json(data);
  } else {
    res.status(400).json({message: "Make sure to fill everything, use string on every section except birthday, the format there are numbers and should looks like this yyyy/mm/dd"})
  }
}

const testMessage = (req, res) => {
  res.status(200).json({ message: "The server is working" });
};


module.exports = {
  getUsers,
  getOneUser,
  createNewUser,
  testMessage,
};