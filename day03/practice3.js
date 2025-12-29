// 문제 1번
/*let h = Number(prompt("높이 : "));
let a = Number(prompt("밑변 : "));
let result1 = h*a/2;
console.log(`result1 : ${result1}`);
*/

//문제 2번
/* let c = Number(prompt("섭씨 온도 : "));
console.log(`result2 : ${(c*9/5)+32}`); */

//문제 3번
/* let m = Number(prompt("태어난 년도 : "));
console.log(`result3 : ${2025-m}`); */


//문제 4번
/* let cm = Number(prompt("키 : "));
let kg = Number(prompt("몸무게 : "));
console.log(`result4 : ${kg/((cm/100)*(cm/100))}`); */

//문제 5번
/* let id = prompt("id : ");
let email = prompt(" email : ");
let result5 = id == "admin"? `${id}(관리자)` : `${id}(일반사용자)`;
let result6 = email == "email@test.com"? `${email}(관리자)` : `${email}(일반사용자)`;
console.log(`result5 : ${result5}, ${result6}`); */

//문제 6번
/* let score = Number(prompt("점수 : "));
let result6= (score >= 0 && score <= 100)?
            (score >= 90 ? "A" : score >= 80 ? "B" : "C") :
            "잘못된 점수";
document.write(`<h2>result6 : ${result6}</h2>`); */

// 문제 7번
/* let age = Number(prompt("나이 : "));
let age20 = (age >= 20 && age <=29)? "이벤트 대상입니다" : "이벤트 대상이 아닙니다";
console.log(`result7 : ${age20}`); */

// 문제 8번
/* let likeCount = 3;
console.log(`좋아요 : ${++likeCount}`); */

//<방법2>
//++likeCount;
//console.log(`좋아요 : ${likeConut}`) 

// 문제 9번
/* let todoList = ['장보기', '과제하기'];
let n = prompt("새로운 할 일 : ");
todoList.push(n);
console.log(`result9 : ${todoList}`); */

// 문제 10번
// let waitingList = ['김민준', '이서연', '박도윤', '최지우'];
// console.log(`마지막 대기자는 : ${waitingList [3]}`);

//<방법2>
// let 마지막인덱스 = waitingList.length - 1;

//----------------------------------------------------------------

// 교수님과 함께 푼 풀이 1번
// let 밑변 = Number(prompt(" 밑변 입력 : "));
// let 높이 = Number(prompt(" 높이 입력 : "));
// let 삼각형넓이 = 밑변*높이/2;
// console.log(`결과1 : ${삼각형넓이}`);
// 한국어는 변수(임의) 또는 문자, 2.영문은 키워드/약속/문법


//2번
// let 썹씨온도 = Number(prompt("썹씨 온도 입력 : "));
// let 화씨온도 = (썹씨온도 * 9/5) +32;
// console.log(`결과2 : ${화씨온도}`);

//3번
// let 태어난년도 = prompt(" 태어난 년도 입력 : ");
// let 나이 = 2025 - 태어난년도;
// console.log(`결과3 : ${ 나이 }`);

//4번
// let 키 = Number(prompt(" 키 입력 : "));
// let 몸무게 = prompt("몸무게 입력 : ");
// let BMI = 몸무게/(키/100) * (키/100);
// console.log(`결과4 : ${BMI}`);


//5번
// let 아이디 = prompt('아이디 : ');
// let 이메일 = prompt('이메일 : ');
// let 결과1 = 아이디 == "admin" || 이메일 == "admin#test.com" ? "관리자" : "일반 사용자";

// console.log(`결과5 :${결과1}`);

//6번
let 점수

