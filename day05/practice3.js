// [문제] 아래 조건문 관련 10문제, 단]for (반목문) 은 사용하지 않습니다.
// [제출방법] 코드가 작성된 파일이 위치한 깃허브 상세 주소를 제출하시오.


// 문제 1: 과일 목록 관리
// 다음 과일 목록 배열이 주어져 있습니다.
// let fruitList = ['사과', '바나나'];
// 사용자로부터 새로운 과일 이름을 입력받아, fruitList에 이미 존재하는 과일이면 '이미 존재하는 과일입니다.'를 출력하세요.존재하지 않는 과일이면 배열에 추가한 뒤, 변경된 배열 전체를 출력하는 프로그램을 작성하시오.

// let fruitList = ['사과', '바나나'];
// let 과일 = prompt('새로운 과일 : ');
// if (과일 == fruitList[0, 1]) {                // fruitList.indexOf(과일) != -1 
//     console.log('이미 존재하는 과일입니다');
// }
// else {
//     fruitList.push(과일), console.log(fruitList);
// }


// 문제 2: 성별에 따른 색상 지정
// 주민등록번호 13자리를 문자열로 입력받습니다.성별을 나타내는 7번째 숫자가 '1' 또는 '3'이면 'blue'를, '2' 또는 '4'이면 'red'를 출력하는 프로그램을 작성하시오.

// let num = prompt('주민등록번호 13자리 입력 : ');
// let num7 = num[6]

// if(num7 == 1 || num7 == 3){console.log('blue');}
// else if(num7 == 2 || num == 4) {console.log('red');}
// else{console.log('색상없음');}




// 문제 3: 구매 금액에 따른 할인율 적용
// 사용자로부터 총 구매 금액을 입력받습니다. 구매 금액에 따라 아래와 같이 할인율을 적용하여 최종 결제 금액을 출력하는 프로그램을 작성하시오.
// 50,000원 이상: 10 % 할인
// 30,000원 이상 50,000원 미만: 5 % 할인
// 10,000원 이상 30,000원 미만: 1 % 할인
// 10,000원 미만: 할인 없음

// let cast = Number(prompt('총 구매 금액 : '));

// if(cast >= 50000){console.log(cast-cast*0.1)}
// else if(cast >= 30000){console.log(cast-cast*0.05)}
// else if(cast >= 10000){console.log(cast-cast*0.01)}
// else{console.log(cast)}



// 문제 4: 월(Month)에 따른 계절 판별
// 1부터 12 사이의 월(Month)을 숫자로 입력받아, 해당하는 계절을 출력하는 프로그램을 작성하시오.
//     봄: 3, 4, 5월
// 여름: 6, 7, 8월
// 가을: 9, 10, 11월
// 겨울: 12, 1, 2월
// 만약 1~12 이외의 숫자를 입력하면 '잘못된 월입니다.'를 출력하세요.
// 힌트 : 입력받은 값 == "3" && 입력받은 값 =="4" && 입력받은 값 == "5" 또는 입력받은 값 >=3 && 입력받은 값

// let Month = Number(prompt('month : '))

// if(Month == 3 || Month == 4 || Month == 5){console.log('봄');}
// else if(Month == 6 || Month == 7 || Month == 8){console.log('여름');}
// else if(Month == 9 || Month == 10 || Month == 11){console.log('가을');}
// else if(Month == 1 || Month == 2 || Month == 12) {console.log('겨울');}
// else{console.log('잘못된 월 입니다.');}

//     문제 5: 세 수 중 가장 큰 수 찾기
// 서로 다른 세 개의 정수를 입력받아, 가장 큰 수를 출력하는 프로그램을 작성하시오.
/* let 첫번째값 = prompt("a : ");
let 두번쨰값 = prompt("b : ");
let 세번째값 = prompt("c : ");
// [1] 하나씩 비교하면된다. a>b, a>c, b>c 총 3번 비교한다.
// [2] 첫번째 값을 '가장 큰 수' 변수에 저장하고, '가장 큰 수'와 두번 째 값, 세번 째 값 비교, 총 2번 비교한다.

let 가장큰수 = 첫번째값; // 첫번째 값을 가장큰수로 가정한다.
if(가장큰수< 두번째값){가장큰수 = 두번째값;} // 만약에 두번쨰값이 가장큰수 보다 크면 대입/수정
if(가장큰수< 세번째값){가장큰수 = 세번째값;} // !!!! : elseif 대신에 다중 if 처리 
console.log(가장큰수); //변수 활용 : (1) [입력받은/중간연산식] 저장 (2) 가독성 */



//     문제 6: 윤년 판별기
// 사용자로부터 연도(year)를 입력받아 해당 연도가 윤년인지 평년인지 판별하는 프로그램을 작성하시오.
// 윤년 조건:
// 연도가 4의 배수이면서, 100의 배수는 아닐 때
// 또는 연도가 400의 배수일 때
// 출력 예시: '2024년은 윤년입니다.' 또는 '2023년은 평년입니다.'


// let year = Number(prompt('연도 입력 : '));
// if(year % 4 == 0  || year % 400 == 0 && year % 100 != 0) {console.log('윤년');}
// else{console.log('평년');}


// 문제 7: 세 수 오름차순 정렬
// 서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
//     예시: 17, 4, 8 입력 시 4, 8, 17 출력

// 참조 " [1] a b c 비교 : a > b, a > c, b > c 총 3번, [2] 두 변수간의 값 교체/스왑 "
// 스왑 : (1) 변수는 하나의 자료(값)만 저장한다. (2) 연산은 하나씩 처리된다.
// 방법 : 임시저장소 인 temp 변수를 활용한다. a와 b의 값 스왑, temp = a; b = a; a = temp;

// 25.12.31
// 직접 풀이 (배열 사용)
// let a = Number(prompt("정수 a : "));
// let b = Number(prompt("정수 b : "));
// let c = Number(prompt("정수 c : "));
// let all = [a, b, c]

// if (a > b && b > c) { console.log([c, b, a]);}
// else if (b > c && c > a) { console.log(a, c, b);}
// else if (c > a && a > b) {console.log(b, a, c);}
// else if (a > c && c > b) {console.log(b, c, a);}
// else if (b > a && a > c) {console.log(c, a, b);}
// else{c > a && a > b, console.log(b, a, c);} 


// 26.01.02
// 교수님 풀이  (템프 사용)
// let a = Number(prompt("정수 a : "));
// let b = Number(prompt("정수 b : "));
// let c = Number(prompt("정수 c : "));

// if( a > b ){let temp = a; a = b; b = temp;}    // 비교1 : 만약에 앞에 있는 값이 더 크면 값 스왑
// if( a > c ){let temp = a; a = c; c = temp;}    // 비교2 : if if if  다중 조건 다중 참 VS if else if else if  다중 조건 단일 참
// if( b > c ){let temp = b; b = c; c = temp;}    // 비교3 : 반복문 이용하면 충분히 코드 줄일 수 있다.
// console.log(`${ a } ${ b } ${ c }`);


// 문제 8: 가위바위보 게임
// 두 명의 플레이어가 참여하는 가위바위보 게임을 만드시오.
//     입력: 플레이어 1과 플레이어 2는 각각 0(가위), 1(바위), 2(보) 중 하나의 숫자를 입력합니다.
//         규칙:
// 가위(0)는 보(2)를 이깁니다.
//     바위(1)는 가위(0)를 이깁니다.
//         보(2)는 바위(1)를 이깁니다.
//             출력:
// 플레이어 1이 이기면 '플레이어1 승리'를 출력합니다.
//     플레이어 2가 이기면 '플레이어2 승리'를 출력합니다.
// 두 플레이어가 같은 것을 내면 '무승부'를 출력합니다.

// 약속 : 가위 대신에 0으로 하자. 왜? 가위 라는 데이터는 용량이 크니까 느리다.
// 경우의 수 : 승리( 0 == 2, 1 == 0, 2 == 1), 무승부 ( 0 == 0, 1 == 1, 2 == 2)
// 경우의 수 2 : [플레이어 1 이기는 공식] 3(2+1) % 3 == 0, 1(0+1) % 3 == 1, 2(1+1) % 3 == 2

// 25.12.31
// 직접 풀이

// let player = Number(prompt('가위[0], 바위[1], 보[2] : '));
// let player2 = Number(prompt('가위[0], 바위[1], 보[2] : '));

// if (player == player2) { console.log('무승부'); }
// else if (player == '0' && player2 =='2' || player == '2' && player2 == '1' || player == '1'&& player2 =='0') { console.log('플레이어1 승리'); }
// else { console.log("플레이어2 승리") }



// 26.01.02
// 교수님 풀이 (직접 풀이랑 같음)
// let player = prompt('가위[0], 바위[1], 보[2] : ');
// let player2 = prompt('가위[0], 바위[1], 보[2] : ');

// if (player == player2) { console.log('무승부'); }
// else if (player == '0' && player2 =='2' || player == '2' && player2 == '1' || player == '1'&& player2 =='0') { console.log('플레이어1 승리'); }
// else { console.log("플레이어2 승리") }


//[2]
//if ( palyer2 + 1 % 3 ) { console.log('플레이어1 승리'); }


//     문제 9: 주차 차량 위치 검색
// 주차장 차량 정보가 다음과 같이 두 개의 배열로 관리되고 있습니다.두 배열에서 같은 인덱스는 동일한 차량의 정보를 의미합니다.
// 차량 번호 목록: let carArray = ['250어7142', '142가7415', '888호8888'];
// 주차 위치 목록: let locationArray = ['A1', 'B3', 'C2'];
// 사용자로부터 차량 번호를 입력받아, carArray에서 해당 차량을 찾은 뒤 locationArray에 있는 그 차량의 주차 위치를 찾아 출력하는 프로그램을 작성하시오.만약 해당하는 차량 번호가 없다면 '차량이 존재하지 않습니다.'를 출력하시오.


// 25.12.31
// 직접 풀이

// let carArray = ['250어7142', '142가7415', '888호8888'];
// let locationArray = ['A1', 'B3', 'C2'];
// let sum = prompt('차량 번호 : ');
// let num = carArray.indexOf(sum);

// if(num != -1){console.log(locationArray[num]);}
// //  원래는 locationArray[num] 이거인데 locationArray(num) 이렇게 써서 배열로 안되가지구 계속 안됐음...

// else{console.log('차량이 존재하지 않습니다.');}




//     문제 10: 수강 신청 목록에서 과목 제외하기
// 현재 수강 신청한 과목 목록이 배열로 주어져 있습니다.
// let courseList = ['수학', '영어', '과학', '국어'];
// 사용자로부터 제외하고 싶은 과목명을 입력받아, courseList에 해당 과목이 존재하면 목록에서 삭제한 뒤 변경된 배열 전체를 출력하세요.
// 만약 존재하지 않는 과목이면 '해당 과목은 신청 목록에 없습니다.'를 출력하는 프로그램을 작성하시오.

// 25.12.31
// 직접 풀이

// let courseList = ['수학', '영어', '과학', '국어'];
// let j = prompt('수강 신청한 과목 : ');
// let k = courseList.indexOf(j);
// if (k != -1) {courseList.splice(k, 1), console.log(courseList);}
// else {console.log('해당 과목은 신청 목록에 없습니다.');}


