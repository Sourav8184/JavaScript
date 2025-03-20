let user = {
  firstName: "Adarsh",
  lastName: "Jha",
  age: 24,
};

const proxy1 = new Proxy(user, {
  get(target, property) {
    if (!target[property]) {
      throw new Error("Property dose not exist");
    }
    return target[property];
  },
  set(target, property, value) {
    if (!target[property]) {
      throw new Error("Property dose not exist");
    }

    switch (property) {
      case "firstName":
      case "lastName":
        if (typeof value !== "string")
          throw new Error(`${property} must be a string`);
        break;

      case "age":
        if (typeof value !== "number" || value < 0)
          throw new Error(`${property} must be a number and grater then 0`);
        break;
    }
    target[property] = value;
  },
});

console.log(proxy1.firstName);
console.log(proxy1.lastName);
console.log(proxy1.age);

proxy1.firstName = "Vishal";
proxy1.lastName = "Patel";
proxy1.age = -25;

console.log(proxy1.firstName);
console.log(proxy1.lastName);
console.log(proxy1.age);

proxy1.firstName = 8;

console.log(proxy1.firstName);
console.log(proxy1.lastName);
console.log(proxy1.age);
