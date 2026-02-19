/* let arr=['1','2','3','4'];
for(let i=0;i<arr.length;i++){   //used to access all array elements
console.log("Value is",arr[i]);
}
 
//index
console.log(arr[0]);
//length of the array
console.log(arr.length);  */
//Question Write js program to calculate the occurence of letter 'a'?
 let str=("I am in Bangalore");
let count=0;
for(i=0;i<str.length;i++){
    if(str[i]==="a"){
    count++;
}}
console.log(count);  
 //Largest word
/*let str=("I am in Bangalore");
let words=str.split(" ");
let largest="";
for(let i=1;i<words.length;i++){
    if(words[i].length>largest.length){
        largest=words[i];
    }
}
console.log(largest);  */