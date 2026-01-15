
// [1] 다른 js 파일에서 변수/함수 사용 가능여부
// HTML 에서 여러개 js 파일
// <script src="test1.js"></script>
// <script src='exam1.js'></script>

console.log(var1); // 다른 test1.js에서 선언된 변수 사용
func1(); // 다른 test1.js 에서 선언된 함수 사용


// [2] js는 html에 종속된 관계라서 f5(새로고침) 초기화(변수재생성)
// 백엔드 필요하다. 백엔드 없이 영구저장 할 수 없나요? 가능
// 자동로그인, 검색기록, 비회원제장바구니, 최근본제품 등등 (쿠키)

/* 웹스토리지 : 브라우저(크롬/엣지/사파리)
        1. 브라우저 -> f12 -> application 탭 -> 왼쪽 사이드바 메뉴
                [로컬 저장소] / [세션 저장소] 
        2. 종류
            1] sessionStorage : 세션 저장소를 관리하는 객체
                * 서로 다른 HTML 간의 자료 공유 안한다.
                * 모든 브라우저가 종료 되면 자료 자동 삭제
                 
            2] localStorage : 로컬 저장소를 관리하는 객체
                * 서로 다른 HTML 간의 자료 공유 한다. <도메인(HTTP주소) 동일>
                * 모든 브라우저가 종료 되더라도 유지

        3. 주요 기능/함수
            1] .setItem('key', 'value');        : 세션 로컬 저장소에 속성/자료 추가
            2] .getItem('key');                 : 세션 로컬 저장소에 'key' 해당 하는 자료 호출
            3] .removeItem('key');              : 세션 로컬 저장소에 'key' 삭제(value 같이 삭제됨)
            4] .clear();                        : 모든 'key' 삭제
                
        4. JSON 변환 : 세션/로컬 저장소는 문자열(HTTP기반) 저장이 가능하다.
            1] JSON.stringify() : JS객체 -> JSON 문자열
            2] JSON.parse() : JSON 문자열 -> JS객체
 */

console.log(sessionStorage);
console.log(localStorage);

// (1) 저장
sessionStorage.setItem('name', '유재석'); // f12 -> aplication탭 -> 확인
localStorage.setItem('age', 40); // f12 -> aplication탭 -> 확인

// (2) 호출
console.log(sessionStorage.getItem('name')); // 세션저장소에 저장된 'name' 키 갖는 값 호출
console.log(localStorage.getItem('age')); // 로컬저장소에 저장된 'age' 키 갖는 값 호출

// (3) 삭제
sessionStorage.removeItem('name');

// (4) 활용 : 복잡한 (샘플) 데이터
    // * 세션/로컬 저장소는 문자열만 저장이 가능하다. 배열/객체 --> 문자열로 변환 **** json : 자바스크립트 객체 기반의 문자열 형식 ****

sessionStorage.setItem('회원목록', JSON.stringify([{name : "유재석", age : 40}, {name : "강호동", age : 50}]));
console.log(JSON.parse(sessionStorage.getItem('회원목록')));



















