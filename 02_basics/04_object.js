// Singleton Objects
const myObj = new Object();

myObj.id = "123abc";
// console.log(Object.entries(myObj));

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3.hasOwn);


// const obj3 = [
//     obj1 = {
//         1: "a", 
//         2: "b",
//         "name": {
//             "fullName": "Harsh Rana",
//         }
//     }, 
//     obj2 = {3: "c", 4: "d"}
// ];
// console.log(obj3[0]);
// console.log(obj3[0].name);
// console.log(obj3[0].name.fullName);

// const obj3 = {
//     obj1 : {
//         1: "a", 
//         2: "b",
//         "name": {
//             fullName: "Harsh Rana",
//         }
//     }, 
//     obj2 : {3: "c", 4: "d"}
// };

// console.log(obj3.obj1);
// console.log(obj3.obj1.name);
// console.log(obj3.obj1.name.fullName);

