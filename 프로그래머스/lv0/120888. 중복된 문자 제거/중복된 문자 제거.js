function solution(my_string) {
    let string = "";
    for(let i = 0; i < my_string.length; i++){
        if(my_string.indexOf(my_string[i]) === i){
            string += my_string[i];
        }
    }
    return string;
}