//this method is executed whenever the user presses the button
function changeButtonColor(){
    let button= document.querySelector("button");
    let heading=document.querySelector("h1");
    let red=Math.floor(Math.random()*266);
    let green=Math.floor(Math.random()*266);
    let blue=Math.floor(Math.random()*266);
    let red1=Math.floor(Math.random()*266);
    let green1=Math.floor(Math.random()*266);
    let blue1=Math.floor(Math.random()*266);
    button.style.backgroundColor=rgb($,{red}, $,{green}, $,{blue});
    heading.style.color=rgb($,{red1}, $,{green1}, $,{blue1});
  }
  

  //Objects and for in loop to iterate over the object

let myInfo = {
    name: "Shravya",
    age: 22,
    graduation: "B.tech",
    stream: "CSE", 
    isGraduated: true,
    hobbies: ["Meditation", "Work out", "Playing chess"],
    run: function(speed) {
        return `Running with ${speed} KM per hour`; 
    },
    sleep: function() {
        return "Sleeping"; 
    }
};
//two ways to access the values are 
//1.dot notation
//2.object notation
console.log(myInfo.isGraduated);
console.log(myInfo["isGraduated"]);
console.log(myInfo.hobbies[0]);
console.log(myInfo.run(20));


//A dedicated for-in loop to iterate over objects
for(let o in myInfo){
    console.log(myInfo[o]);
}