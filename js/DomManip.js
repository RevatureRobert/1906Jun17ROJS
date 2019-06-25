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
console.log(document.body);
image.addEventListener("mouseenter", changeImage);

let imageArray = [
  "https://i.ytimg.com/vi/mTHchH9VRh0/hqdefault.jpg",
  "https://images.pexels.com/photos/1619507/pexels-photo-1619507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];

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

let sArr=["howdy",'partner','my', 'name', 'is',
'holy', 'cow', 'there','is','a','snake','in','my','boot']

let listOne = document.getElementById("list1");

for (let x = 0; x < sArr.length; x++) {
    let li = document.createElement("li");
  li.style='color:blue';
  li.className='liClass'
  listOne.appendChild(li);
  li.innerHTML = 'this is a js item: '+ sArr[x];
}

  console.log("this is an id ")
  console.log(document.getElementById('list1'))
  console.log(' this is what is returned from class name')
  console.log(document.getElementsByClassName('liClass'))