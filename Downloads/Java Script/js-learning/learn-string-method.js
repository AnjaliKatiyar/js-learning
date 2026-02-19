let str="I  am in Bangalore";
console.log(str.length);
console.log(str.trim().length); //removes spaced from beginning to end
console.log(str.split(""));  // Split the string  or converts strings to arrays
console.log(str.split("").join("")); //works exaclty opposite to split
let city="Bangalore";
console.log(city.toLocaleLowerCase());
console.log(city.toLocaleUpperCase());
let state="Karnataka";
console.log(state.concat(" ",city));
console.log(state+" "+city);
console.log(city.charAt(8));
console.log(city.includes("B"));
console.log(str.search("in"));
