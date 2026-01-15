getBoard();
function getBoard(){
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if(boardList == null){boardList = [];}
    else{boardList = JSON.parse(boardList);}
    for(let i = 0; i<boardList.length; i++){
        const obj = boardList[i];
        if(obj.no == selectNo){
            document.querySelector('#titleInput').value=title
            document.querySelector('#contentInput').value=obj.content
        }
    }
}


// (2) 수정함수
function boardUpdate(){
    const url = new URLSearchParams(location.search)
    const selectNo = url.get('no')
    let boardList = localStorage.getItem('boardList');
    if(boardList == null) {boardList = []}
    else{boardList = JSON.parse(boardList);}
    for(let i = 0; i < boardList.length; i++){
        const obj = boardList[i];
        if(obj.no == selectNo){
            obj.tltle = document.querySelector('#titleInput').value;
            obj.content = document.querySelector('#contentInput'). value;
            obj.pwd = document.querySelector('#pwdInput').value;
            localStorage.setItem('boardList', JSON.stringify(boardList));
            alert('수정 완료');
            location.href = `view.html?no=${selectNo}`
        }
    }
}