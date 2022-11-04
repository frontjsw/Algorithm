function solution(hp) {
    var answer = 0;
    const ant1 = Math.floor(hp / 5);
    const ant2 = Math.floor(hp % 5 / 3);
    const ant3 = Math.floor(hp % 5 % 3);    
    return ant1 + ant2 + ant3;
}