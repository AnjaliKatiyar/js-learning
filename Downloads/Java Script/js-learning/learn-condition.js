/* let age=17;
if (age > 18){
    console.log("Eligible for DL");
} else {
    console.log("Not Eligible for DL");
} */

let teamName="RCB";
if (teamName==="CSK"){
    console.log("Cup is ours");
} else if(teamName==="RCB"){
    console.log("Always Hyped");
}else {
    console.log("Still Waiting");
}

//SWITCH Example 1
let mobile='Redmi';
switch(mobile){
    case 'iphone':
        console.log("Display only Iphone");
        break;
        case 'samsung':
            console.log("Display only samsung");
            break;
            default:
            console.log("Display all mobiles");
            break;
}


//Switch Example 2
let score=90;
switch(true){
    case score>=80:
        console.log('Scored Distinction');
        break;
    case score>65:
        console.log("Scored first class");
        break;
    default:
        console.log("Score not available");         
}