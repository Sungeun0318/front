// (1) 쿼리스트링에서 특정한 게시물번호의 정보 조회
getBoard();
function getBoard() {
    // 1. URL(웹주소) 상의 웹주소 가져오기
    const url = new URLSearchParams(location.search);
    // 2. 웹주소에서 선택된 게시물번호(쿼리스트링값) 가져오기
    const selectNo = url.get('no');
    // 3. localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {
        boardList = []
    }
    else { boardList = JSON.parse(boardList); }
    // 4. 선택된 게시물번호와 일치한 게시물 찾기 <for>
    for (let index = 0; index <= boardList.length - 1; index++) {
        const obj = boardList[index];
        if (obj.no == selectNo) { //만약에 내가 선택한 게시물번호와 일치

            // 5. 찾았으면 내용 출력
            document.querySelector('#title').innerHTML = obj.title
            document.querySelector('#content').innerHTML = obj.content;
            return;
        }
    }

}

// (2) 삭제함수
function boardDelete() {
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');
    let boardList = localStorage.getItem("boardList");
    if (boardList == null) { boardList = [] }
    else { boardList = JSON.parse(boardList); }
    for (let i = 0; i < boardList.length; i++){
        const obj = boardList[i];
        if(obj.no == selectNo){
            const confirm = prompt('비밀번호 입력');
            if(obj.pwd == confirm){
                boardList.splice(i,1);
                localStorage.setItem('boardList', JSON.stringify(boardList));
                alert(`삭제 성공`);
                location.href = 'list.html';
            }
            else{
                alert('삭제 실패 : 비밀번호 불일치')
            }
        }
    }
}


// (3) 수정 이동 함수
function boardUpdateView(){
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if(boardList == null){boardList = []}
    else{boardList = JSON.parse(boardList);}
    for(let i = 0; i < boardList.length; i++){
        const obj = boardList[i];
        if(obj.no == selectNo){
            const confirm = prompt('비밀번호 입력')
            if(obj.pwd == confirm){
                location.href = `update.html?no=${selectNo}`
            }else{
                alert('수정 불가 : 비밀번호 불일치');
            }
        }
    }
}








