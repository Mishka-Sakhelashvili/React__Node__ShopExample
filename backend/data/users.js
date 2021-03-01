import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jon User",
    email: "Jon@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Taicha User",
    email: "Taicha@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
