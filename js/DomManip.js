function hello(){
    alert("Better events are on the horizon")
}


window.onload=alert('hello');

let button = document.getElementById('button');
button.addEventListener('mouseover', hello);

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



let body = document.querySelector('body');
body.addEventListener('mousemove', bodyFunc);

function bodyFunc(eve){
    // console.log(eve);
    body.style.backgroundColor=`rgb(${eve.offsetX},${eve.offsetY},40)`;
}

let image = document.getElementById('image');

image.addEventListener('mouseenter', changeImage);

let imageArray=['https://i.ytimg.com/vi/mTHchH9VRh0/hqdefault.jpg',
'https://images.pexels.com/photos/1619507/pexels-photo-1619507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'];

let x=0;
function changeImage(){
    x++;
    image.setAttribute('src',imageArray[x%imageArray.length]);
}


//Just one last question...
/*
What is DOM???
    Document Object Model
    The document object Model is how the browser views the html.
    It is a virtual representation for the html structure

*/