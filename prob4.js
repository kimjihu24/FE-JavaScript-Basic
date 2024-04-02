function solution(M, N) {
    let cut=0;
   
    if(M>=N){
    cut=(M-1)+M*(N-1);
    }
    else
    cut=(N-1)+N*(M-1);
    return cut;
   }