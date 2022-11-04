function solution(num_list) {

    const num1 = num_list.filter(num => num %  2 === 0).length;
    const num2 = num_list.length - num1;
    return [num1,num2];
}