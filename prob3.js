function solution(arr) {
    if(arr.length<=1){
    return [-1];
    }
    else{
    arr.splice(arr.indexOf(Math.min(...arr)), 1) 
    }//모르겠어서 답 봤어요...//
    return arr;
}