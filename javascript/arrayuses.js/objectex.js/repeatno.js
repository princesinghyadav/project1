//example for unique to find unque
// let arr ="apple";
// let obj={}
// for(i=0;i<arr.length;i++){
//     obj[arr[i]]="unique";

// }
// console.log(obj);



//example for how many types of character is present.
let str= "appplee";
let obje={};
for(i=0;i<str.length;i++){
    if( obje[str[i]]==undefined){
        obje[str[i]]=1;
    }else
    obje[str[i]]++;
}console.log(obje);
