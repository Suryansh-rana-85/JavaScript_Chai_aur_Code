// Object literal

// Symbol
const mySym = Symbol("key1");
// console.log(typeof mySym);

const js_user = {
    name: "harsh",
    email: "harsh@google.com",
    age: 23,
    location: "roorkee",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"],
    [mySym]: "myKey1",
}

// console.log(js_user.name);
// console.log(js_user["location"]);
// console.log(typeof mySym);
// console.log(js_user.lastLoginDays);

js_user.email = "harsh@chat.com";
// console.log(js_user.email);
Object.freeze(js_user);

js_user.email = "harsh@ghat.com";
// console.log(js_user.email);

js_user.greetings = function() {
    console.log("Hello js user");
};
// console.log(js_user.greetings());

js_user.greetings2 = function() {
   console.log(`Hello js user, ${js_user.name}`);
};
// console.log(js_user.greetings2());

const entries = Object.entries(js_user);
// console.log(entries);
const obj = Object.fromEntries(entries);
// console.log(obj);

// console.log(Object.getOwnPropertyDescriptors(js_user));

console.log(Object.keys(js_user));
console.log(Object.values(js_user));

console.log(Object.isFrozen());
Object.freeze(js_user);
console.log(Object.isExtensible(js_user));
