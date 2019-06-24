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
function checkCar(){
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