

let student = ["salman","shahrukh","amir","akshay","amitabh"];
let age = [20,22,24,26,28];
// convert this inot array of object
// output
// [
//   {name : "salman",age : 20},
//   {name : "shahrukh", age : 22},
//   {name : "amir", age : 24},
//   {name : "akshay", age :26}
// ]

let result = [];

for(let i = 0 ; i < student.length; i++)
  {
    let obj = {};
    obj.Name  = student[i]; // key name will be created in obj
    obj.Age = age[i]; // key age will be created in obj
    
    result.push(obj);
  }

console.log(result)