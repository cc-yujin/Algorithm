function solution(numbers) {
    var add = 0;
    for (i=0; i<numbers.length; i++) {
       add += numbers[i];
    }
    return add / numbers.length;
}