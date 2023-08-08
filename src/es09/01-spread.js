const user = {username: "gndx", age: 34, country: "CO"};
const {username, ...value} = user;
console.log(username);
console.log(value);
