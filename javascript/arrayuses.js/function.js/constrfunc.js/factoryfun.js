function create ( nem, clas,rol,subj,sect){
    let obj={
        name: nem,
        class: clas,
        roll:rol,
        sunje: subj,
        sec:sect,
        address : {
            city: "rampur",
            dist: "samastipur",
            pin : 848506
        }
    }
  return  obj;
}
 let p1=create("ram" ,6,48,"math","A");
console.log(p1)
let p2= create("raju",9,38,"english","A")
console.log(p2.name)
// this is called factory function 
// basic of constructor functin used to create objects 