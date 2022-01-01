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

let codeit = {
    name: '코드잇',
    bornYear: 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 프로그래밍 기초',
        language: 'JavaScript'
    }
};

//점 표기법 (objectName.propertyName)
console.log(codeit.bornYear);

//대괄호 표기법
console.log(codeit['born year']);

//존재하지 않는 property에 접근하면 undefined가 나온다.

//property 수정, 삭제 방법
/*
  codeit.name = '콕콕';
  delete codeit.name;

  console.log('name' in codeit); 
*/

//JavaScript method 표기법

/* 
let rectAngle = {
    width: 30,
    height: 50,
    getArea: function () {
        return rectAngle.width * rectAngle.height;
    }
}

let triAngle = {
    width: 15,
    height: 40,
    getArea: function() {
        return triAngle.width * triAngle.height / 2;
    }
}
*/

/* 
let greetings = {
    sayHello: function (name) { 
        console.log(`hello ${name}!`);
    },
    sayHi: function () {
        console.log('Hi!');
    },
    sayBye: function () {
        console.log('bye!');
    }
};

greetings.sayHi()
greetings['sayHello']('sw');
*/

//for..in 반복문
let codeit = {
    name: '코드잇',
    bornYear: 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 프로그래밍 기초',
        language: 'JavaScript'
    }
};

for (let key in codeit) {
    console.log(key);
}
/*
property name이 양수인 경우?

let myObject = {
    300: '정수',
    1.2: '소수',
};
실제로 사용이 될 때는 문자열로 형 변환이 된다.

for (let key in myObject) {
    console.log(`${key}의 자료형은 ${typeof key}입니다.`);
}
-> 300의 자료형은 string입니다.
   1.2의 자료형은 string입니다.

   그리고 이러한 파라미터 네임은 접근할 때도 대괄호표기법으로만 접근이 가능하다.

   console.log(myObject['300']);

   정수형 프로퍼티는 자동으로 오름차순으로 정렬이 되기 때문에 주의해서 사용한다
   */


//내장 객체

//Date

let myDate = new Date();

console.log(myDate)

// -> myDate라는 변수가 만들어진 시점의 요일,월,일,년도,시간,시간대가 출력된다.


// new Date (milliseconds)
let myDate = new Date(1000);

//-> 1970년 1월 1일 00:00:00 UTC에서 시작해 1000밀리초 이후를 출력한다.

//하지만 실용적이지 않아서 문자열을 사용한다.

let myDate = new Date('2017-05-05T19:19:19');

// new Date(year, month, date, hours, minutes, seconds, ms) 도 사용 가능  .....month는 0부터 시작하니 주의!

// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());
//get을 set으로 바꾸면 수정도 가능하다.

//배열
//JavaScript에서는 배열에서 for in 보다 for이나 while을 사용하자.

let courseRanking = [
    '자바스크립트',
    'git',
    '컴퓨터 개론',
    '파이썬'
];

console.log(courseRanking[2]);


//배열에 쓰이는 메서드
console.log(courseRanking.length);  // -> 배열의 길이
console.log(courseRanking['length']); // ->같은 방법

//파이썬과 다르게 원소가 존재하지 않는 인덱스 위치에 인덱스 위치를 통해 원소를 할당할 수 있다.
courseRanking[5] = 'react';

//만약 멀리 떨어진 인덱스를 정의하면 그 사이의 인덱스의 요소들은 empty로 나오게 된다.
//삭제
delete courseRanking[5];

//하지만 이렇게 삭제하면 요소만 삭제되고 칸은 empty로 남아있기 때문에 다른 메서드를 사용한다.

courseRanking.splice(3);

//지우고 싶은 index를 splice 하면 삭제가 가능하다. (정확히는 3번 인덱스 밖으로는 다 잘라내는 것이다.)


courseRanking.splice(a,b);

// a번 인덱스부터 자신을 포함하여 총 b개의 원소를 삭제 

courseRanking.splice(1,2,'java','typescript');

// 1번 인덱스 포함 순차적으로 2개의 원소를 삭제 후 그 위치에 파라미터에 입력된 요소들을 저장
// 응용해서 아무것도 지우지 않고 insert가 가능하다.


//배열의 첫 요소를 삭제 
courseRanking.shift();

//배열의 마지막 요소를 삭제
courseEanking.pop();

//배열의 첫 요소로 값 추가 
courseRanking.unshift('hello');

//배열의 마지막 요소로 값 추가
courseRanking.push('hi');


//배열에서 특정 값 찾기 (indexOf / lastIndexOf)
// indexOf 는 정방향으로 lastIndexOf는 역방향으로 탐색한다.
// 만약 값이 없으면 -1을 반환한다.

//배열에서 특정 값이 있는지 확인하기 (includes)

//array.includes(item) 을 하면 array 배열에 item이 있을 경우 true, 없을 경우 false를 리턴한다.
// array.reverse() 는 배열의 순서를 뒤집는다.


//for...of
//배열의 원소를 간단하게 반복 출력하는 법
//배열에는 for...in을 비추천한다. 안전하지 않다.

for (변수 of 배열) {
    동작부분;
}

for (let element of influencer) {
    console.log(element);
}


//숫자 표기법

let millionaire = 1000000000;
let myNumber = 1e9; // 지수 표기법 사용 가능하다.

console.log(millionaire == myNumber);

// 16, 8, 2진수도 표현할 수 있다.

// 16: 0x##
// 8: 0o##
// 2: 0b##

// 숫자형 메소드?
// toFixed(0~100)
// 소숫점 자리수를 정할 수 있다. 예: number.toFixed(3) -> number = 소수점이 3자리수인 string으로 반환 
// JavaScript는 앞에 +를 더하면 숫자형이 된다.

//toString(number)
// -> 숫자를 number 진수로 변환한다.

// Math 객체

//Math.abs(number)      절댓값
//Math.max(1,2,3,4,5)   최댓값
//Math.min(1,2,3,4,5)   최솟값
//Math.pow(a,b)          a의 b승
//Math.sqrt(number)
//Math.round(number)
//Math.floor(number)
//Math.ceil(number)
//Math.random()  -> 0~1 사이의 무작위값


//문자열

//파이썬과 마찬가지로 배열과 같은 원리로 문자열을 취급한다.
//기본적으로 인덱싱이 가능하고 string.charAt(3) 처럼 메소드로 특정 인덱스를 호출할 수 있다.
//특정 요소의 인덱스를 찾는 메소드도 있다.
// string.indexOf('i'), string.lastIndexOf('i'); 앞에서부터 찾거나 뒤에서부터 찾을 수 있다.
//대문자 소문자 변환, string.toUpperCase(); string.toLowerCase();
//양쪽 공백 제거: string.trim();
//string.slice(0,2)  -> 문자열 자르기 (0~1 인덱스)

 //number, string, boolean, null, undefined를 통틀어서 기본형(primitive type)이라고 한다.
 //object(객체)는 참조형 자료이며 아래와 같이 행동한다.
 //JavaScript에서 객체에 변수를 지정하는 것은 해당 변수가 어떤 객체로 가는 길을 열어주는 것이다.
 //따라서 let x = {name: 'hi'}; let y = x; x.age = 5; console.log(y)를 하면 {name: 'hi', age: '5'} 가 된다.  

 //그렇다면 객체 자체가 아니라 객체의 값을 복사하고 싶으면?

 //배열에서는 slice() 메서드를 이용한다.
//객체는 Object.assign({}, '객체') 메소드를 사용한다.

//혹은 for문을 이용해 값을 넣어줄 수 있다.

/* for (let key in 객체) {
    객체2[key] = 객체[key]
}
*/

//주의할 점: 객체 안에 객체가 있다면 복사를 해도 문제가 생길 수 있다.

//