function solution(n, k) {
    var answer = 0;
    const sheep = 12000;
    const cock = 2000;
    answer = sheep*n + cock*k - Math.floor(n / 10) * cock; 
    return answer;
}