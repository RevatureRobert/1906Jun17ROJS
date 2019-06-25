function hello() {
  alert("Better events are on the horizon");
}

// window.onload=alert('hello');

let button = document.getElementById("button");
button.addEventListener("mouseover", hello);

/*
   other events:   onsubmit, onchange, click, dblclick, mouseup,
      mousedown, mouseenter, mouseleave, mouseover, mouseout,
      mousemove

      (mouseover includes children, mouseenter doesn't)
      (same with mouseleave and mouseout respectively)

   there's also:
       keyup, keydown, keypress, cut, paste, change(state change),
       submit
*/

let body = document.querySelector("body");
body.addEventListener("mousemove", bodyFunc);

function bodyFunc(eve) {
  // console.log(eve);
  body.style.backgroundColor = `rgb(${eve.offsetX},${eve.offsetY},40)`;
}

let image = document.getElementById("image");
console.log(document);
image.addEventListener("mouseenter", changeImage);
let imageArray = [
  "https://i.ytimg.com/vi/mTHchH9VRh0/hqdefault.jpg",
  "https://images.pexels.com/photos/1619507/pexels-photo-1619507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];

function addToImages(url){
    imageArray.push(url);
}

let x = 0;
function changeImage() {
  x++;
  image.setAttribute("src", imageArray[x % imageArray.length]);
}

//Just one last question...
/*
What is DOM???
    Document Object Model
    The document object Model is how the browser views the html.
    It is a virtual representation for the html structure


    Three special things we can do with DOM Manipulation
        Find Elements
            document.getElementById(id)
            document.getElementsByClassName(className)
            document.getElementsByTagName(tagName)
        Change Elements
            element.innerHtml = new html content
            element.attribute = new value
            element.setAttribute(attribute , value)
            element.style.property = new style
        Add or Remove Elements
            document.createElement(element)
            element.appendChild(element)
            element.removeChild(element)
            element.replaceChild(element)
            document.write(text)
*/

//Adding content with innerHtml.
let paraOne = document.getElementById("para1");
paraOne.innerHTML = "salazar Salad";

//creating elements with append child and createElement
//      functions

let sArr = [
  "howdy",
  "partner",
  "my",
  "name",
  "is",
  "holy",
  "cow",
  "there",
  "is",
  "a",
  "snake",
  "in",
  "my",
  "boot"
];

let listOne = document.getElementById("list1");

for (let x = 0; x < sArr.length; x++) {
  li = document.createElement("li");
  li.style = "color:blue";
  li.className = "liClass";
  listOne.appendChild(li);
  li.innerHTML = "this is a js item: " + sArr[x];
}

//working with the html collection we get from querying
//  the document
console.log("this is an id ");
console.log(document.getElementById("list1"));
console.log(" this is what is returned from class name");
console.log(document.getElementsByClassName("liClass"));

//changing elements, such as their style attribute
//  with functions belonging to elements
//  all functions for that purpose shown in for of loop
let liClass = document.getElementsByClassName("liClass");
let t = 0;
let p = document.getElementsByTagName("p");
console.log(p);
for (let temp of liClass) {
  //   console.log(temp)
  //   temp.innerHTML=sArr[t];
  //   temp.style = "color:red";
  //   temp.style.color = "purple";
  temp.setAttribute("style", "color:yellow");
  t++;
}

// listOne.removeChild(li);
// listOne.replaceChild(p[0],li);
document.write('this is a string made and used in js. Bwahahahahahahaha')

let button2 = document.getElementById('listButton');
button2.style.backgroundColor='crimson';
button2.addEventListener('click',changeStuff);

let colorArr=['red','blue','yellow','brown','black']
let colorNum=0;
function changeStuff(){
    liClass[0]
    .style
    .color=
    colorArr
    [colorNum%colorArr.length];
    colorNum++;
}



var myEventHandler = function(event){
    alert("target: "+event.target.id+" -this: "+
    this.id);
}

//bubbling
/**
 * When an event happens on an element, it first 
 *      runs the handlers on it, then on its parent, 
 *      then all the way up on other ancestors.
 * 
 * event.stopPropagation() will stop bubbling
 * 
 * for more information:
 *      https://javascript.info/bubbling-and-capturing
 */
var divs = document.getElementsByTagName('div');

for(let i=0; i<divs.length;i++){
    divs[i].addEventListener('click',myEventHandler);
    divs[i].style.color='white'
}

//hoisting
/*
When we call a function before it is declared,
    it is hoisted to the top of its scope
    so the invocation will work properly
*/
console.log(funnyVar())
function funnyVar(){
    return 5;
}

//Naming conventions
/*
    variables must start with a letter or an underscore
    and must not be reserved keywords
*/

// let var //does not work
let var1 //works
let Var2 //works
// let 1var //does not work
let _var //works
let Var //works