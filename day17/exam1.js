/* 
    [인터벌 : interval] : 간격/주기 뜻
        1. 시간적인 간격에 따라 특정 코드/함수 실행
        2. 사용법
            setInterval(함수명, 밀리초);
            - 함수명 : 함수명만 작성한, () 생략한다.
            - 밀리초 : 1/1000초
            
*/

// [1]
let value = 0;
function 증가함수(){
    value = value + 1; // 전역변수 1증가
    const box1 = document.querySelector("#box1");
    box1.innerHTML = value;
}

// 특정한 / 간격마다 함수 실행
setInterval(증가함수, 1000); // 1초 마다 '증가함수' 자동 실행
// 주의 할 점 : 증가함수 : 함수그자체 vs 증가함수() : 함수실행

// [2]
function 시계함수(){
    let today = new Date(); // new Date() : 현재 시스템의 날짜/시간 반환 함수
    let hour = today.getHours(); //'시' new Date().getHours()
    let minute = today.getMinutes(); // '분'
    let second = today.getSeconds(); // '초'
    let time = `${hour} : ${minute} : ${second < 10? '0'+second : second}`;
    const box2 = document.querySelector("#box2");
    box2.innerHTML = time;
}
setInterval(시계함수, 1000)


// [3]
let time = 0;   // 현재 타이머의 초 시간(초)
let timerId;    // interval 객체를 저장하는 전역변수? 서로다른 함수간의 *공유*
function 타이머시작(){
    // ! interval 실행 후 반환된 객체를 timerId에 대입, 왜? 추후에 제어(종료)하기 위해서
    timerId = setInterval(시간함수, 1000);

}

function 타이머정지(){
    clearInterval(timerId); // clearInterval(종료할 interval객체)
}

function 시간함수(){
    time++; // 1증가
    document.querySelector("#box3").innerHTML = time;
    // 유재석객체.편의점에서먹을것고르기().마크업
    // vs
    // const box3 = document.querySelector("#box3");
    // box3.innerHTML = time;
}

