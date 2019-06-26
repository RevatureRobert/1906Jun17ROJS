// function f(x){
//     console.log(x+3);
//     return x+3;
// }


// let myArr=[];

// let k=0;
// for(let i=1;i<=100;i++){
//     myArr[k]=i;
//     k++;
// }

// for(let x=0; x<101; x++){
// if(myArr[x]%2==1){
//     console.log(myArr[x]+'odd');
// } else{
//     console.log(myArr[x]+'even')
// }
// }

// function fillArray(num){
//     let myArr=[];
//     let k=0;
//     for(let x=1; x<=num; x++){
//         myArr[k]=x;
//         k++;
//     }
//     return myArr;
// }
/*
any number mod any number
    num % 5-----this is my input
        f(x)=x%5
            x=num
            f(x)=x%5
    all the possible outputs are:
        0,1,2,3,4
        therefore, if x is any of these numbers,
            x does need to be modded
        if x is larger than the mod,
            is will be divided until the denominator
            cannot go into the numerator any more times
            cleanly.
        16%5--> 5*1=5-->16-5=11-->11-5=6-->6-5=1-->16%5=1
            because 1 is less than 5 and fits into the possible
                outputs spectrum
*/

//function statement is shorthand for var statement
// function foo(){}
//expands to 
// var foo = function(){};
//foo()

// function grabNum(num, myArr){
//     return myArr[num%myArr.length];
// }
// function printem(myArr){
// return (grabNum(5, myArr)**grabNum(10000009, myArr));
// }

// let tdArr=[[1,2,3,4],[7,8,9,0],[1,3,5,7,9]];

// for(let x =0; x<3;x++){
//     for(let y =0; y< tdArr[x].length;y++){
//         // console.log(tdArr[x][y])
//     }
// }

// for(let h=0;h<24;h++){
//     for(let m =0;m<60; m++){
//         for(let s=0; s<60;s++){
//             console.log(`hour: ${h}, minute: ${m} second: ${s}`)
//         }
//     }
// }


// let newArr=[5,3,7,3,7,5,8,2,1];
// for(let x=0;x<newArr.length;x++){
//     console.log(newArr[x])
// }


let car={
    color:'red',
    make:'dodge'
};
function checkCar(parameter){
    if(car.color=='red'&&car.make!='ford'){
        return 'red';   
    }else if(car.color=='green'||car.make=='dodge'){
        return 'green';
    } else if(car.make=='ford'){
        // car.color='green'
        car['color']='green'
        return 5;
    } else {
        return car.color;
    }
}
//the 5 is the argument
checkCar(5);

for(let x=0; x<10;x++){
    console.log(x);
    break;
}
for(let x=0;x<10;x++){
    if(x%3==0){
        console.log('divisible by 3');
        continue;
    }else if(x%3==1){
        console.log('we have a number that is not');
    }else{
        console.log('222222222');
    }
    if(x==8){
        console.log('been nice knowing you');
        break;
    }console.log('were still going');
}

for(let x =3; x>=0; x--){
    console.log('x is: '+x);
    for(let y=4; y>=x; y--){
        console.log('y is: '+y);
        if(y%x==0)
        break;
    }
}

//these are called labels

//we can name our loops and break and continue
//them

jose: for(let x =3; x>=0; x--){
    console.log('x is: '+x);
    jalepeno: for(let y=4; y>=x; y--){
        console.log('y is: '+y);
        if(y%x==0)
        break jose;
    }
}

jose: for(let x =3; x>=0; x--){
    console.log('x is: '+x);
    jalepeno: for(let y=4; y>=x; y--){
        console.log('y is: '+y);
        if(y%x==0)
        break jalepeno;
    }
}

jose: for(let x =3; x>=0; x--){
    console.log('x is: '+x);
    jalepeno: for(let y=4; y>=x; y--){
        console.log('y is: '+y);
        if(y%x==0)
        continue jose;
    }
}


// default values
""||"hero card"
//returns "hero card"
"father time"||"hero card"
//returns "father time"
//returns the first truthy value, or whatever stops the operation

//guard operator
""&&"hero card"
//returns ""
"father time"&&"hero card"
//returns "hero card"
//returns the first falsey value, or whatever stops the operation

//varargs
//variable amount of arguments
//but javascript doesnt care
function argues(...c){
    return arguments[5];
}
function argues(a,b,...c){
    return arguments.length;
}
function goLong(a,b,c){
    return a+","+b+","+c;
}
goLong(1,2,3);
goLong(1);
goLong(1,2,3,4,5,6,7);

