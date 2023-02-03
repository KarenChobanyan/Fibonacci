"use strict"


function chooseNumber(num= +prompt("Dail a number")){
    while( num == 0 || isNaN(num)){
        num  = + prompt("Enter a number greater than 0");
    }
let tabFibonachi=[];
tabFibonachi[1] = 0;
tabFibonachi[2]=1
for(let i = 3;i<=num;i++){
    tabFibonachi[i]=tabFibonachi[i-1] +tabFibonachi[i-2]
    
}return alert(` the ${num}th number in Fibonacci sequence is: 
                        ${tabFibonachi[num]}`)
}
chooseNumber()