let person1 = {
    name : "ram",
    class: 7
}
let person2 ={
    name: "lakshman",
    class: 6
}
function print (){
    console.log('name: ${this.name} class:${this.class}');
}
print.call(person1);
