// [메모리 설계]

const teamAry = [
    { "tcode": 1, "department": "개발팀" },
    { "tcode": 2, "department": "디자인팀" },
    { "tcode": 3, "department": "기획팀" }
];

const employeeAry = [
    { "ecode": 1, "image": "https://placehold.co/100x100/#eeeeee/white", "tcode": 1, "name": "김민준", "position": "선임 개발자" },
    { "ecode": 2, "image": "https://placehold.co/100x100/#eeeeee/white", "tcode": 2, "name": "이서연", "position": "수석 디자이너" },
    { "ecode": 3, "image": "https://placehold.co/100x100/#eeeeee/white", "tcode": 3, "name": "박도윤", "position": "팀장" }
];

const vacationAry = [
    { "vcode": 1, "ecode": 1, "sdate": "2025-06-17", "edate": "2025-06-18", "reason": "힘들다" },
    { "vcode": 2, "ecode": 2, "sdate": "2025-06-17", "edate": "2025-06-18", "reason": "힘들다" },
    { "vcode": 3, "ecode": 3, "sdate": "2025-06-17", "edate": "2025-06-18", "reason": "힘들다" },
]


// [1] 출력함수
teamPrint();
employeePrint();
vacationPrint();
// [1-1] 부서 출력함수
function teamPrint() {
    const a = document.querySelector("#a");

    let html = "";
    for (let index = 0; index <= teamAry.length - 1; index++) {
        const team = teamAry[index];


        html += `<tr>
                    <td id="부서">${team.department}</td>
                    <td><button class="reBth" onclick="teamUpdate(${team.tcode})">수정</button>
                        <button class="removeBth" onclick="teamDelete(${team.tcode})">삭제</button>
                    </td>
                </tr>`
    }
    a.innerHTML = html;
}

// [1-2] 사원 출력함수
function employeePrint() {
    const b = document.querySelector("#b");

    let html = "";
    for (let index = 0; index <= employeeAry.length - 1; index++) {
        const employee = employeeAry[index];

        let department = "";
        for (let i = 0; i <= teamAry.length - 1; i++) {
            if (employee.tcode == teamAry[i].tcode) {
                department = teamAry[i].department;
                break;
            }
        }
        html += `<tr>
                    <td><img src="${employee.image}" /></td>
                    <td>${employee.name}</td>
                    <td>${department}</td>
                    <td>${employee.position}</td>
                    <td>
                        <button class="reBth" onclick="employeeUpdate(${employee.ecode})">수정</button>
                        <button class="removeBth" onclick="employeeDelete(${employee.ecode})">삭제</button>
                    </td>
                </tr>`
    }
    b.innerHTML = html;
}


// [1-3] 휴가 출력함수 
function vacationPrint() {
    const c = document.querySelector("#c");

    let html = "";
    for (let index = 0; index <= vacationAry.length - 1; index++) {
        const vacation = vacationAry[index];

        let employeeName = "";
        for (let i = 0; i <= employeeAry.length - 1; i++) {
            if (vacation.ecode == employeeAry[i].ecode) {
                employeeName = employeeAry[i].name;
                break;
            }
        }
        html += `<div class="list2">
                    <div>
                        <div>${employeeName}</div>
                        <div><button onclick="vacationDelete(${vacation.vcode})">신청취소</button></div>
                    </div>
                    <li>${vacation.sdate} ~ ${vacation.edate}</li>
                    <li>사유 : ${vacation.reason}</li>
                </div>`

    }
    c.innerHTML = html;
}


// [2] 삭제

// [2-1]
function teamDelete(tcode) {
    for (let index = 0; index <= teamAry.length - 1; index++) {
        if (tcode == teamAry[index].tcode) {
            teamAry.splice(index, 1);
            teamPrint();
            break;
        }
    }
    teamSelectPrint();
}

// [2-2]
function employeeDelete(ecode) {
    for (let index = 0; index <= employeeAry.length - 1; index++) {
        if (ecode == employeeAry[index].ecode) {
            employeeAry.splice(index, 1);
            employeePrint();

            break;
        }
    }
    employeeSelectPrint()
}

// [2-3]
function vacationDelete(vcode) {
    for (let index = 0; index <= vacationAry.length - 1; index++) {
        if (vcode == vacationAry[index].vcode) {
            vacationAry.splice(index, 1);
            vacationPrint();

            break;
        }
    }
    employeeSelectPrint()
}


// [3] 수정

// [3-1]
function teamUpdate(tcode) {
    for (let index = 0; index <= teamAry.length - 1; index++) {
        if (tcode == teamAry[index].tcode) {
            const newName = prompt("수정할 부서명 : ");
            teamAry[index].department = newName;
            teamPrint();
            teamSelectPrint();
            return;
        }
    }

}

// [3-2]
function employeeUpdate(ecode) {
    for (let index = 0; index <= employeeAry.length - 1; index++) {
        if (ecode == employeeAry[index].ecode) {
            const newName = prompt("수정할 이름 : ");
            const newPosition = prompt("수정할 직책 : ");
            employeeAry[index].name = newName;
            employeeAry[index].position = newPosition;
            employeePrint();
            employeeSelectPrint()
            return;
        }
    }
}


// [4] 등록함수
let tcode = 4;
let ecode = 4;
let vcode = 4;

// [4-1]
function teamAdd() {
    const teamDom = document.querySelector(".t1");
    const team = teamDom.value;

    if (team == "") {
        alert("부서명을 입력하세요.");
        return;
    }

    const obj = { "tcode": tcode, "department": team };
    teamAry.push(obj);
    teamPrint();

    tcode += 1;
    teamSelectPrint();

}

// [4-2]    
function employeeAdd() {

    const nameDom = document.querySelector(".e1");
    const name = nameDom.value;

    const positionDom = document.querySelector(".e2");
    const position = positionDom.value;

    const teamDom = document.querySelector(".e3");
    const team = teamDom.value;

    const imageDom = document.querySelector(".e4");
    const image = imageDom.files[0];


    if (team == "disabled") {
        alert("부서를 선택하세요");
        return;
    }

    if (name == "" || position == "") {
        alert("이름과 직급은 필수 입력입니다.");
        return;
    }

    ecode += 1;



    const obj = { "ecode": ecode, "image": image == undefined ? "https://placehold.co/100x100" : URL.createObjectURL(image), "name": name, "tcode": team, "position": position };
    employeeAry.push(obj);
    employeePrint();
    employeeSelectPrint()

}

// [4-3]
function vacationAdd() {

    const employeeDom = document.querySelector(".v1");
    const employee = employeeDom.value;

    const sdateDom = document.querySelector(".v2");
    const sdate = sdateDom.value;

    const edateDom = document.querySelector(".v3");
    const edate = edateDom.value;

    const reasonDom = document.querySelector(".v4");
    const reason = reasonDom.value;

    if (employee == "disabled") {
        alert("휴가 신청 사원을 선택하세요");
        return;
    }

    if (sdate == "" || edate == "") {
        alert("날짜를 선택하세요");
        return;
    }

    if (reason == "") {
        alert("사유를 작성하세요");
        return;
    }


    vcode += 1;

    const obj = { "vcode": vcode, "ecode": employee, "sdate": sdate, "edate": edate, "reason": reason };
    vacationAry.push(obj);
    vacationPrint();
    employeeSelectPrint()
}


// + select 현재 존재하는 부서명만 출력 +
function teamSelectPrint() {
    const T = document.querySelector(".e3");

    let html = `<option value="disabled">부서를 선택하세요</option>`;
    for (let index = 0; index <= teamAry.length - 1; index++) {
        const team = teamAry[index];
        html += `<option value="${team.tcode}">${team.department}</option>`;
    }
    T.innerHTML = html;
}

// + select 현재 존재하는 사원명만 출력 +
function employeeSelectPrint() {
    const E = document.querySelector(".v1");

    let html = `<option value="disabled">휴가 신청 사원을 선택하세요</option>`;
    for (let index = 0; index <= employeeAry.length - 1; index++) {
        const employee = employeeAry[index];
        html += `<option value="${employee.ecode}">${employee.name}</option>`;
    }
    E.innerHTML = html;
}