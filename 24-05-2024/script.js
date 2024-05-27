//compount operators 
let a=2;
a+=2;
console.log(a);

a-=2;
console.log(a);

a*=3;
console.log(a);

a*=2;
console.log(a);

//comparison operators
// console.log(23>23);
// console.log(23>=23);

// console.log(24<25);
// console.log(24<=25);

// console.log(23==23);
// console.log(23=="23");
// console.log(23==="23");
// console.log(1==true);
// console.log(0===false);

//program to check the greatest number between 3 numbers
let x=23;
let y=43;
let z=53;

if(x>y && x>z){
    console.log("The greater number is: "+x);
}else if(y>x && y>z){
    console.log("The greater number is: "+y);
}else{
    console.log("The greater number is:"+z)
}
