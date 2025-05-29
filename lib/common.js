//랜덤한 값 구하기
/* function getRandom(n) {
    return parseInt(Math.random() * n); //n의 값을 매개변수로 받아 그 만큼의
    //랜덤 값을 반환
    //예) getRandom(11)을 넘기면 0~10 반환
    //예) getRandom(10)을 넘기면 0~9 반환
}
*/

//원하는 수를 넣으면, 해당 수까지를 최대값으로 하는
//랜덤한 값을 반환하는 함수 정의
function getRandom(max) {
    return parseInt(Math.random()*(max+1)); //0보다 크고~~ 1보다 작은 난수
}