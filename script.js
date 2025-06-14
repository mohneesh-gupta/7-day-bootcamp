//to print something
// console.log("hello");


// //create an alert
// alert("welcome to class");


// //creating functions
// function wlcm(name){
//     console.log(`welcome ${name}`);
// }

// //calling functions
// wlcm("harry");
// wlcm("manish");



// //operation with array
// let arr=[1,2,3,4,5];
// //arrow functions
// arr.forEach((num) => {
//     console.log(num*2);
// });



// day-6


// DOM - document object model---> most important

//variables-     let, const 

//how to select element
// const btn = document.getElementById("mybtn");

// console.log(document.getElementById("para").innerText);

// console.log(document.getElementById("para2").innerHTML);



//event listeners

// const btn = document.getElementById("mybtn");

// btn.addEventListener("click", () => {
//     // console.log("button clicked!");
//     alert("btn click");
// });


// const text=document.getElementById("para");
// text.addEventListener("click", () => {
//     text.textContent="this is the new changed text";
// });


// const text=document.getElementById("para");
// text.addEventListener("click", ()=>{
//     text.classList.add("new-class");
// });

// const text=document.getElementById("para");
// text.addEventListener("click", ()=>{
//     text.classList.remove("para1");
// });

// const text=document.getElementById("para");
// text.addEventListener("click", ()=>{
//     text.classList.toggle("toggle-class");
// });


//query selectors

// const para=document.querySelectorAll("#para");

// const newElement = document.createElement("p");
// newElement.textContent="this is the latest paragraph";
// document.body.appendChild(newElement);



//most imp

// const btn = document.getElementById("mybtn");
// btn.addEventListener("click", (event)=> {
//     event.preventDefault();
//     btn.style.backgroundColor="blue";
//     btn.style.color="red";
// });