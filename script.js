/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */

function countEvens(arr){
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2==0){
         count++;
        }
    }
    return count;
}

function countHi(str){
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i]== "h" && str[i+1]=="i"){
            count++;
        }
    }
    return count;
}

function no14(arr){
    return !(arr.includes(1) && arr.includes(4))
}

function either24(arr){
    let ans1 = false;
    let ans2 = false;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]==2 && arr[i+1]==2){
            ans1=true;
        }
        if (arr[i]==4 && arr[i+1]==4){
            ans2=true;
        }
    }
    if (ans2==ans1){
        return false;
    }else{
        return true;
    }
}

function makeChocolate(small, big, goal){
    let smallNeeded = goal%5
    let a;
    let b;
    if (small>5){
        a = small%5
        b = (small-a)/5
    }

}