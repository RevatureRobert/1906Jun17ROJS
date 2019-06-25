//when page loads all html elements
window.onload= function(){
    console.log('window has loaded')
    document.getElementById("swSubmit")
    .addEventListener("click",getSW);
}


function getSW(){
    console.log('it works')
    //getting the field value
    let swId = document.getElementById('swId').value;

    /**
     * Step 1
     *      the following object allows us t make 
     *      requests and get back data. in short, this 
     *      is our data retriever (It calls the API)
     */
    let xhttp = new XMLHttpRequest();

    //STEP 2
    xhttp.onreadystatechange = function(){
        console.log("the ready state is changing")
        if(xhttp.readyState==4&&xhttp.status==200){
            console.log("its ready!!!~")
            //You have a status code and a ready state
            /*
            status codes:
                100=informational
                200=ok
                300=redirect
                400=client side error
                500=server side error

            ready state:
                0=request not initialized
                1=server connection established
                2=request received
                3=processing request
                4=request finished and response is ready
            */
            /*
            A Java script object???
            JSON?????
            AJAX?????
            Wala!!!
            JSON= JavaScript Object Notation
            AJAX= Asynchronous Javascript and XML
            */

            //this is called marshalling and unmarshalling
            //also parse and stringify
            let sw=JSON.parse(xhttp.responseText);
            console.log(xhttp.responseText);
            console.log(sw);
            console.log(sw.name)
            setValues(sw);
        }
    }
    //STEP 3
    /*
    create a connection
    open(http method, url)
    xhttp.open(method, url, asynch)
    */
   xhttp.open("GET", 'https://swapi.co/api/people/'+swId)

   //STEP 4
   //this sends the request process to retrieve information
    xhttp.send();
}
function setValues(chickens){
    document.getElementById("swName").innerHTML=chickens.name;
    getFilms(chickens.films[0]);
}


function getFilms(url){
    console.log('it works')
    //getting the field value
    let swId = document.getElementById('swId').value;

    /**
     * Step 1
     *      the following object allows us t make 
     *      requests and get back data. in short, this 
     *      is our data retriever (It calls the API)
     */
    let xhttp = new XMLHttpRequest();

    //STEP 2
    xhttp.onreadystatechange = function(){
        console.log("the ready state is changing")
        if(xhttp.readyState==4&&xhttp.status==200){
            console.log("its ready!!!~")
            //You have a status code and a ready state
            /*
            status codes:
                100=informational
                200=ok
                300=redirect
                400=client side error
                500=server side error

            ready state:
                0=request not initialized
                1=server connection established
                2=request received
                3=processing request
                4=request finished and response is ready
            */
            /*
            A Java script object???
            JSON?????
            AJAX?????
            Wala!!!
            JSON= JavaScript Object Notation
            AJAX= Asynchronous Javascript and XML
            */

            //this is called marshalling and unmarshalling
            //also parse and stringify
            let sw=JSON.parse(xhttp.responseText);
            console.log(xhttp.responseText);
            console.log(sw);
            console.log(sw.name)
            setField(sw);
        }
    }
    //STEP 3
    /*
    create a connection
    open(http method, url)
    xhttp.open(method, url, asynch)
    */
   xhttp.open("GET", url)

   //STEP 4
   //this sends the request process to retrieve information
    xhttp.send();
}
function setField(chickens){
    document.getElementById('movie').innerHTML=chickens.title
}