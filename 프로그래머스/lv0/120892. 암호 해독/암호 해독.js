function solution(cipher, code) {  
    const arr = [...cipher];
    const arr2 = [];
    for(let i = code - 1; i < cipher.length; i = i + code){
        arr2.push(arr[i]);
    }
    return arr2.join('');
}