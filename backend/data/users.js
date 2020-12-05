import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "john doe",
    email: "johndoe@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "jane doe",
    email: "janedoe@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
