// [1] 메모리 설계  ---> ERD 설계
/* 
    표 = 배열, 행 = 레코드 = 객체1개, 표제목 = 속성명, 셀[한칸] = 데이터/속성값

*/

let 항목목록 = [
    { 코드: 1, "날짜": "2026-01-26", "항목": "아메리카노", "금액": 1200 },
    { 코드: 2, "날짜": "2026-01-26", "항목": "카페라떼", "금액": 1500 }
]; // 화면에는 보이지 않지만 내부적으로 각 객체/레코드 식별하는 식별코드 정의하면 좋다. <중복없는데이터>


// [2] 기능 설계  ---> api 설계
/* 
    (1) 화면에 보이는 이벤트/행위, (2) 화면에 보이지 않는 이벤트/행위 찾기
    1. 등록 처리 하는 기능 필요.    = 등록 = create = c
        매개변수 : x, 리턴값 : x, 처리 : 입력받은 3개데이터를 객체로 만들어서 배열에 저장, 발동처 : <등록>버튼을 클릭했을 때

    2. 표에 출력 하는 기능 필요.    = 출력 = read   = r
        매개변수 : x, 리턴값 : x, 처리 : 현재 전역배열에 저장된 모든 객체를 tr 구성하여 html 출력, 발동처 : 등록성공했을 때

        참고1 : 함수/기능 은 나눠서 따로 만드는게 좋다 = 유지보수, 나누는기준 c등록 r출력 u수정 d 삭제
        참고2 : 배열은 전역변수를 사용한 이유는 서로 다른 함수들 간의 공유(같은 배열) 사용하기 위해
 */



// [3] 구현 
// 3-1] 등록함수
function func1() {
    // 1. 입력받은 값 가져오기
    let dateDOM = document.querySelector(".date");   // 1) document.querySelector() 이용하여 dom 가져오기
    // console.log(dateDOM)
    let date = dateDOM.value   // 2) .value() 이용하여 dom의 value 값 가져오기
    // console.log(date)
    let textDOM = document.querySelector(".text");   // 1) document.querySelector() 이용하여 dom 가져오기
    // console.log(textDOM)
    let text = textDOM.value   // 2) .value() 이용하여 dom의 value 값 가져오기
    // console.log(text)
    let number = document.querySelector(".number").value;   // 1) document.querySelector() 이용하여 dom 가져오기
    // console.log(number)
    // 2. 입력받은 값들을 객체 구성
    let code = 항목목록[항목목록.length - 1].코드 + 1 // text.length-1 : 마지막 인덱스
    // console.log(code)
    let obj = { 코드: code, "날짜": date, "항목": text, "금액": number }  // { 속성명 : 값, 속성명 : 값 }
    // console.log(obj)
    // 3. (전역) 배열에 저장 + 백엔드 통신
    항목목록.push(obj); // 배열변수명.push()
    alert("등록성공"); // * 추가코드1 : 안내문구
    textDOM.value = "";

    // 4. 즉시 출력 반영
    func2();
}

// 3-2] 출력함수
function func2() { /* console.log("func2 exe") */
    // 1. 어디에 : tbody
    let body1 = document.querySelector(".body1");


    // 2. 무엇을 : 배열내 객체들을 <tr> 구성
    let 무엇을 = ``;
    for(let index = 0; index <= 항목목록.length-1; index++){
        let obj2 = 항목목록[index];
        무엇을 += `<tr>
                    <td>${obj2.날짜}</td>
                    <td>${obj2.항목}</td>
                    <td>${Number(obj2.금액).toLocaleString()} 원 </td>

                </tr>`
    }
    // 3. 출력 : 구성된 html 출력 한다.
    body1.innerHTML = 무엇을;


}


