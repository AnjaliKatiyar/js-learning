/* //Js program - input : arr=[1,2,3,4,5,6]   final:7   output:[[0,5],[1,4],[2,3]]
let op=[];
let arr=[1,2,3,4,5,6];
let final=7;
for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr.length;j++){
    if (arr[i]+arr[j] === final){
        op.push([i,j]);
    }
}
}
console.log('output is:',op);
 */

/* //JS program to find out whteher your input is palindrome or not use split , reverse ,join
let str="madam";
let reverse=str.split("").reverse().join("");
if(str===reverse){
    console.log("Palindrome");
}else{
    console.log("Not palindrome");
} */

let str="madam";
let isPalindrome='true';
for(let i=0;i<str.length;i++){
    if(str[i]!==str[str.length-1-i]){
        isPalindrome=false;
        break;
    
    }
}
console.log(isPalindrome?
    "Palindrome":"Not Palindrome");
