/* //Fn Declaration
function SayHello(){  // 2nd call go inside fn
    //function block
    console.log("Hi, Hello I'm here");  //Final execution
}
SayHello(); //1st line tht get executed 
 */
/* //Fn Expression
var SayHello=function(){
    console.log("Hi, Hello I'm here");  //Final execution

}
SayHello(); */

/* //Fn with Arguements
function getSalary(value){  //value = arguement
    console.log("Salary is :", value);
}
getSalary(10000); */
    
//Fn with Return Statement
function getSalary(value){
    return value;
}
//storage 
var Salary = getSalary(10000);
console.log(Salary);