/* let laptop={
    name:"dell",
    model:"Victus",
    color:"Blue",
    price:7500,
    
};
laptop.name="HP";  //Updating obj values
console.log(laptop);
console.log(laptop.name);
console.log(laptop["model"]);


//How to add keys 
let employee={
    name:"David"
}
console.log(employee);
employee.programming="JavaScript";
employee["ID"]=1001;   //To add new properties
console.log(employee);

 

//Object methods
//Object.keys 
let employee={
    name:"David",id:1234
}
console.log(Object.values(employee)); 

//Merging two objects
let person={
    name:"David",
}
let person2={
    number:1234,
    name:"Rahul",
}
let op=Object.assign(person,person2);
console.log(op);

//Nested Objects
let person={
    name:"Geeta",
    number:1001,
    address:{
        city:"Bangalore",
        area:"Peenya",
    }
} */


    //Array of objects
let response=[
    {brand:"Apple", color:"white"},
    {brand:"samsung", color:"red"},
    {brand:"Redmi",color:"pink"},
    {brand:"Apple", color:"red"}
];
let op=[];
for(let i=0;i<response.length;i++){
    if(response[i].brand === "Apple")
        op.push(response[i]);
}
console.log(op);