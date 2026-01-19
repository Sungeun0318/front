qwePrint();
function qwePrint(){
    const qweT = document.querySelector("#qweT");
    let qwelist = localStorage.getItem('qwelist');

    if(qwelist == null){qwelist = [];}
    else(qwelist = JSON.parse(qwelist));

    let html = '';
    for(let i = 0; i <= qwelist.length-1; i++){
        const obj = qwelist[i];

        html =`<tr>
                    <td>${obj.no}</td>
                    <td><a href="view.html?no${obj.no}">${obj.a}</a></td>
                </tr>`
    }
    qweT.innerHTML = html;
}