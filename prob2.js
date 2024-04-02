function solution(n) {
    let i = 1;
    let sum = 1;
    
    while(sum<=n){
        i++;
        sum = i * sum;
    }
    
return i-1 ;
}