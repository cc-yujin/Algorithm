function solution(a, b) {
    var answer1 = Number(a.toString()+b.toString());
    var answer2 = Number(b.toString()+a.toString());

    if(answer1 > answer2) {
        return answer1;
    }else return answer2;
}