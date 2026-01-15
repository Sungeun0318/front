// (1) 쿼리스트링에서 특정한 게시물번호의 정보 조회
getBoard();
function getBoard(){
// 1. URL(웹주소) 상의 웹주소 가져오기
const url = new URLSearchParams(location.search);
// 2. 웹주소에서 선택된 게시물번호(쿼리스트링값) 가져오기
const selectNo = url.get('no');
// 3. localStorage에서 배열 가져오기
let boardList = localStorage.getItem('boardList');
if(boardList == null){boardList = []
}
else{boardList = JSON.parse(boardList);}
// 4. 선택된 게시물번호와 일치한 게시물 찾기 <for>
for(let index = 0; index <= boardList.length-1l index++){
    const obj = boardList[index];
    if(obj.no == selectNo){ //만약에 내가 선택한 게시물번호와 일치
    }
}
// 5. 찾았으면 내용 출력
document.querySelector('#title').innerHTML = obj.title
}