// [1] 함수 : 함(상자/공간/블럭) 수(숫자/코드/명령어)
// 누군가가 상자에 미리 넣어둔 숫자/코드
// 왜? 한번 넣어둔 (숫자/코드)를 재사용 예) 수학(공식), 라이브러리/API

// [2] 함수 정의/만들기
function 내가만든함수명(){ //fun s
    console.log("내가만든함수") // 중괄호 안에 미리 정의할 코드/명령어
} //fun e

// [3] 함수 호출/사용하기
내가만든함수명();

// [4] 함수 종류 : 1.내가만든함수 function 2.다른 사람이 만든함수 console.log() alert() prompt() 등

// [5] 함수 예
function 믹서기함수(과일){
    let 주스 = 과일 + "주스"; /* 믹서기 함수가 처리하는 코드 정의/만들기 */
    return 주스; /* 처리된 결과를 반환 선택 */
} // func end // 매개변수는 함수가 종료될 때 사라진다. <지역변수 특징>

믹서기함수("사과"); /* 믹서기함수에 "사과" 라는 문자열을 전달했다. 인자값/인수 --- *중매/연결* --> 매개변수 */
// 참고 : "사과" 이면 자료이고 사과이면 변수/함수명(키워드)
// 믹서기 함수가 처리한 결과를 컵 이라는 변수에 담았다.
let data = "딸기";
let 컵2 = 믹서기함수(data);

// [6] 매개변수 x, 반환 x 
function func1(){ console.log("func1 exe");}
func1();

// 매개변수 o, 반환 x, 대표적으로 console.log(); , 생활 : 폐핸드폰 반납기(폐핸드폰)
function func2(x, y){console.log("func2 exe");}
func2(3, 5);

// 매개변수 o, 반환 x, 대표적으로 prompt()       , 생활 : 자판기 (돈 -> 음료)
function func3(x, y){console.log("func3 exe"); return x+y;}
let result1 = func3(3, 5);

// 매개변수 x, 반환 o
function func4(){console.log("func4 exe"); return 10;}
let result2 = func4();

// [7] 지역변수란? 특정한 if/for/함수 {}안에서 선언된 (매개)변수는 {} 밖에서 호출/사용 안된다.
let 전역변수 = "대한민국";
if(true){
    let 지역변수1 = "경기도";
    console.log(지역변수1);

    for(let i = 0; i < 1; i++){
        let 지역변수2 = "안양시";
        console.log(지역변수1); // ok 경기도
        console.log(지역변수2); // ok 안양시
        console.log(전역변수); // ok 대한민국
    } // 안양시 끝

    // console.log( 지역변수1 ); // fail // ReferenceError: 지역변수2 is not defuned\

} // 경기도 끝

// console.log( 지역변수1 ); // fail // 지역변수1 is not defuned\
// console.log( 지역변수2 ); // fail // 지역변수2 is not defuned\

function func5(지역변수3){ // 즉] 매개변수 또한 지역변수의 특징을 갖는다.! 장점 : 함수 호출/사용 시에만 메모리(저장소) 사용한다.
    let 지역변수4 = "수원시";
}
func5("안산시");


// [8] 함수 호출/사용 하는 방법

// (1) js에서 호출 : 함수명();
alert("js에서 실행");
// (2) HTML에서 호출 : <마크업명 이벤트속성명 = "함수명()" />
// onclick : 해당 마크업 클릭했을 때 (이벤트/js) 발생


