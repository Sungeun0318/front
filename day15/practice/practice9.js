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
                <td>${team.department}</td>
                <td><button onclick="teamUpdate(${team.tcode})">수정</button>
                    <button onclick="teamDelete(${team.tcode})">삭제</button>
                </td>
            </tr>`
    }
    a.innerHTML = html;
    console.log(html);
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
                        <button onclick="employeeUpdate(${employee.ecode})">수정</button>
                        <button onclick="employeeDelete(${employee.ecode})">삭제</button>
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
                        <div>${}</div>
                        <div><button onclick="func8()">신청취소</button></div>
                    </div>
                    <li>2025-07-21 ~ 2025-07-25</li>
                    <li>사유 : 여름 휴가</li>
                </div>`

    }
    c.innerHTML = html;
}




// [2] 삭제

// [2-1]
function teamDelete(tcode) {

}

// [2-2]
function employeeDelete(ecode) {

}

// [2-3]
function vacationDelete(vcode) {

}



// [3] 수정

// [3-1]
function teamUpdate(tcode) {

}

// [3-2]
function employeeUpdate(ecode) {

}


// [4] 등록함수
let tcode = 4;
let ecode = 4;
let vcode = 3;

// [4-1]
function teamAdd() {

}
// [4-2]
function employeeAdd() {

}
// [4-3]
function vacationAdd() {

}





