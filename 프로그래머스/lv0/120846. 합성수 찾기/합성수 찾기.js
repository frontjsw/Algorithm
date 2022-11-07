function solution(n) {
    let count = 0;
    let count2 = 0;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++ ){
            if( i % j === 0){
                count += 1;
            }
        }
        if(count >= 3){
            count2 += 1;
        }
        count = 0;
    }
    return count2;
}
