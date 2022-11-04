function solution(n, k) {
    var answer = 0;
    const sheep = 12000;
    const drink = 2000;
    answer = sheep*n + drink*k - Math.floor(n / 10) * drink; 
    return answer;
}