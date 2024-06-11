let arr=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]
let obj={};
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].students.length;j++){
        //console.log(arr[i].grade,arr[i].students[j].marks);
        let sum=0;
        for(k=0;k<arr[i].students[j].marks.length;k++){
            sum=sum+arr[i].students[j].marks;
        }
    }console.log(sum);

}