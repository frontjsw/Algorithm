function solution(my_string) {
    const string = my_string.toLowerCase();
    return [...string].sort().join('');
}