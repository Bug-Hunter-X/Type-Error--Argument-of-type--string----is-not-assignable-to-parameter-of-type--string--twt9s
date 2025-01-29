function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}

let user = ["Jane", "Doe"];
let user2 = "Jane Doe";
console.log(greeter(user)); // This will now correctly handle the array
console.log(greeter(user2)); // This will also work