import { v4 as uuidv4 } from "uuid";
const users = [];

export const getUser = (req, res) => {
  res.send(users);
};

export const getUserWithID = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with id ${id} has been updated`);
};

export const receiveUserData = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send("added");
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  const deleteUser = users.filter((user) => user.id !== id);
  res.send(deleteUser);
};
