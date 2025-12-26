// 1] 산술연산자 : + 더하기 - 빼기 * 곱하기 / 나누기 % 나머지 parseInt
console.log(10+3); // 13
console.log(10-3); // 7
console.log(10*3); // 30
console.log(10/3); // 3.33333333335
console.log( parseInt(10/3)); // 몫 3
console.log(10%3); // 나머지 1


// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 (각 변수에 저장하고) 총점 과 평균을 계산하여 console탭에 출력하시오.
// 소프트웨어 프로세스 : 입력 --> 저장 --> 처리 --> 출력
/* let 국어 = Number(prompt("국어점수 : ")); // 1. prompt 함수로 국어, 영어, 수학 점수를 각 입력
let 영어 = Number(prompt("영어점수 : "));
let 수학 = Number(prompt("수학점수 : "));
// 처리
let 총점 = 국어 + 영어 + 수학;
let 평균 = 총점 / 3;
// 출력
console.log(`총점 : ${총점}, 평균 : ${평균}`); */

// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
/*let r = Number(prompt("반지름 : "));
console.log(`원 넓이 : ${r*r*3.14}`);*/


// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
/*let f1 = Number(prompt('실수1 : '));
let f2 = Number(prompt('실수2 : '));
let ratio = (f1 / f2)*100; // 1 : 100%, 0.1 : 10%, 0.01 : 1%
console.log(`result3 : ${ratio}%`);*/


// 2] 비교 연산자 : >초과 <미만 >= 이상 <=이하 ==(값)같다 !=(값) 같지않다 ==(값과타입)같다 !==(값과타입)같지않다.
// 비교 결과는 true 또는 false

// 3] 논리 연산자 : &&이면서 || 이거나 ! 부정
// | : 엔터 위에 원화기호 + shift
// && 이면서 이고 면서 그리고 모두, 모두 참이면 참, 초등학생이 사탕이면서 초콜릿 먹을래
// || 이거나 거나 또는 하나라도, 하나라도 참이면 참, 초등학생이 사탕이거나 초콜릿 먹을래
// ! 부정 반대 not조건, true -> false, false -> true
// 주의 할 점 : 50 < 점수 < 100 이런 표현식은 없다. --> 점수 > 50 && 점수 < 100
// 논리 결과는 true 또는 false


// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
/*let int = Number(prompt("정수 : "));
let result = int % 2 ==1;
console.log(`result4 : ${result}`);*/


// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
/*let int = Number(prompt("정수 : "));
let result = int % 7 == 0;
console.log(`result5 : ${result}`);*/


// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 (입력받은)아이디가 'admin' 이고 (입력받은)비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
/*let id = prompt("아이디 : ");
let password = prompt("비밀번호 : ");
let result = id == "admin" && password == "1234";
console.log(`result6 : ${result}`); */

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
/*let int = Number(prompt("정수 : "));
let result = int % 7 == 0 && int % 2 == 1;
console.log(`result7 : ${result}`);*/


// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
/* let a = Number(prompt("1차 점수 : "));
let b = Number(prompt("2차 점수 : "));
let result8 = a+b 
let result9 = result8 >= 150? "합격" : "불합격";
console.log(`result8 : ${result9}`);
document.write(`<h3>${result9}</h3>`); */


// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.
let name = prompt("이름 : ");
let name2 = prompt("이름2 : ");
let result10 = name == "유재석"?  `${name}(방장)` : `${nmae}`;
let result11 = name2 == "유재석"? `${name2}(방장)` : `${name2}`;
document.write(`<ol>${result10}, ${result11}</ol>`);


