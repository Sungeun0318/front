function qwewrite(){
    const aInput = document.querySelector("#aInput");
    const bInput = document.querySelector("#bInput");
    const pwdInput = document.querySelector("#pwdInput");

    const a = aInput.value;
    const b = bInput.value;
    const pwd = pwdInput.value;

    const obj = {a, b, pwd};
    let qwelist = localStorage.getItem("qwelist");

    if(qwelist == null){qwelist = [];}
    else(qwelist = JSON.parse(qwelist));

    obj.no = qwelist.length == 0? 1:qwelist[qwelist.length-1].no+1;
    qwelist.push(obj);
    localStorage.setItem("qwelist", JSON.stringify(qwelist));
    alert('게시물 완료');
    location.href = 'list.html'

}