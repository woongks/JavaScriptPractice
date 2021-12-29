// 할당 연산자 (assignment operators)

let name = '코드잇';
let x = 5;

x = x - 2;

// 복합 할당 연산자 (compound assignment operators)

x -= 2;



// python f"{name}" 기능 js 에서는?

function logParticipant(name) {
    console.log(`${name}님 안녕하세요`); //따옴표가 아니라 백틱이다.
}

// return 문이 없는 함수를 console.log 하면 undefined가 나온다.

//상수 표현할 때는 편의를 위해 대문자와 lower case를 사용한다

const MY_NUMBER;


// if문 (if statement)

let temperature = 0;
if (temperature <= 0) {
    console.log("물이 업니다.");
} else if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.');
} 
else {
    console.log("물이 끓습니다.");
}

// switch문 (switch statement)
let myChoice = 2;
switch(myChoice) {
    case 1:
        console.log('1을 선택했습니다.');
        break;
    case 2:
        console.log('2를 선택했습니다.');
        break;
    case 3:
        console.log('3을 선택했습니다.');
        break;
    case 4:
        console.log('4를 선택했습니다.');
        break;
    default:
        console.log('1~4 사이의 숫자만 선택해주세요.');
}

// for 반복문(loop statement)

for (초기화부분; 조건부분; 추가동작부분) {
    동작부분
}

for (let i = 1; i <= 10; i++) {
    console.log('hi');
}

// 추가 동작 부분은 꼭 안 넣어도 된다.

for (let i = 1; i <= 10;) {
    console.log('hi');
    i++;
}

//JS 는 string 과 integer 연산이 안됨. 빈 string에 string을 더해야 한다.

//while문 (while statement)
while (조건부분) {
    동작부분
}

let i = 1;

while (i <= 10) {
    console.log(`${i}`);
    i++
}

//break와 continue

//객체는 쉼표를 이용해 저장할 수 있다. 파이썬의 dictionary 개념이다. 
//key를 property name, value를 property value라고 한다.
//key의 따옴표는 생략 가능하다. 첫 번째 글자는 반드시 _,$,문자로 시작해야 한다. 그게 아니면 따옴표를 사용

// typeof {} -> 문자형을 알 수 있다.
