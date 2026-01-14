
// [1] 메모리 설계
// 표 = 배열, 행 = 레코드 = 객체1개, 표제목 = 속성명, 셀[한칸] = 데이터/속성값



// 2. 각 객체들 간의 식별(구분 = 주민등록번호/사번/학번 등등) 1개 이상 필요, 단] 중복이 없는 속성으로 선택!
// pcode : productCode 제품코드로써 삭제와 수정시 식별 용도 사용

// 3. 테이블 간의 연관관계 구성
// 카테고리테이블 (상위) --> 제품테이블(하위), 제품테이블의 ccode는 카테고리테이블의 ccode를 참조(교집합)한다.
// {ccode : 1, "category" : "음료"}
// {"pcode" : "1", "image" :  "https://placehold.co/100x100/#eeeeee/white", "ccode" : "1", "category" : "1", "상품명" : "코카콜라", "price" : 1000, "date" : "2025-06-17" }


// 4. 객체가 다수 일떄는 배열 사용한다.

const categoryAry = [ 
    {"ccode" : 1, "category" : "음료"},
    {"ccode" : 2, "category" : "과자"}
]

const productAry = [
    {"pcode" : 1, "image" :  "https://placehold.co/100x100/#eeeeee/white", "ccode" : 1, "name" : "코카콜라", "price" : 1000, "date" : "2025-06-17" },
    {"pcode" : 2, "image" :  "https://placehold.co/100x100/#eeeeee/white", "ccode" : 2, "name" : "코카콜라", "price" : 1000, "date" : "2025-06-17" }
]

//[2] 기능/함수 설계
// 1. 함수/기능 개수, 등록[c] 기능, 출력[r], 수정[u], 삭제 [d]기능
// 2. 등록함수, 매개변수 : x, 리턴값 : x, 처리 : 입력받은 4개와 현재시스템 날짜를 객체 만들어서 배열 저장, 실행조건 : <등록> 클릭하면
// 3. 출력함수, 매게변수 : x, 리턴값 : x, 처리 : 배열내 모든 객체들을 tr 구성하여 출력, 실행조건 :  1. 페이지열렸을 때, 2. 등록성공 3. 삭제성공 4. 수정성공

// 수정함수, 매개변수 : pcode(수정할대상), 리턴값 : x, 처리 : 수정할 값 prompt 받아서 매개변수의 제품 수정 실행조건 : <수정> 클릭하면
// 삭제함수, 매개변수 : pcode(삭제할대상), 리턴값 : x, 처리 : 매개변수의 제품 삭제 실행조건 : <삭제> 클릭하면

//[3] 구현
// 1. 출력함수 : 어디에 무엇을 출력하는지?
productPrint(); // js가 열렸을 때 최초 1번 함수 실행
function productPrint(){ // 함수만들기, 함수명은 아무거나, () 매개변수 없는상태, {} 함수 실행될때 처리할 코드
    // 어디에
    const tbody = document.querySelector("tbody");


    // 무엇을 + 배열내 모든 객체들을 tr 구성하여 html 만들기 + 반복문
    let html = "";
        for(let index = 0; index <= productAry.length-1; index++){
            const product = productAry[index];
            // console.log(product);
            html += `<tr>
                    <td><img src="${product.image}"/></td>
                    <td class="v" >${product.ccode}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.date}</td>
                    <td>
                    <button onclick="productDelete(${product.pcode})" class="q">삭제</button>
                    <button onclick="productUpdate(${product.pcode})">수정</button>
                    </td>
                </tr>` // 반복(개체 개수) 횟수 만큼 tr(행) 생성
        }

    // 출력
    tbody.innerHTML = html;
}
// 2. 삭제함수 : 해당 하는 행의 <삭제> 버튼을 클릭하면 삭제(배열내 제거 = .splice())처리 
function productDelete(pcode){ // 매개변수로 삭제할 pcode 받았다. [삭제할 대상자]
    for(let index = 0; index <= productAry.length-1; index++){// 1. pcode의 배열내 인덱스 찾기.
        if(pcode == productAry[index].pcode){
            productAry.splice(index, 1); // 3. 배열명.splice(삭제할인덱스, 개수);
            productPrint();// * 삭제 성공시 화면 새로고침/렌더링 한다.
            break; // 4. 1개만 삭제할 예정이므로 목표(삭제) 이뤘으면 반복문 종료
        } //if end
    } // for end
} // f end


// 3. 수정함수 : 해당 하는 행의 <수정> 버튼을 클릭하면 수정(배열변수명[인덱스] 속성명 = 새로운값)
function productUpdate(pcode){  
    for(let index = 0; index <= productAry.length-1; index++){ // 1. 수정할 pcode의 인덱스를 배열에서 찾는다. <순회>
        if(pcode == productAry[index].pcode){ // 2. 수정 할 코드와 index번째 제품(객체) 와 같으면
            const newName = prompt("수정할 상품명 : ");
            const newPrice = prompt("수정할 가격 : ");
            productAry[index].name = newName;
            productAry[index].price = newPrice;
            productPrint();
            // ***** 수정 성공시 [즉시] 화면 새로고침/렌더링 *****
            return
        }
    }
}


// 4. 등록함수 : 입력받은 값들을 객체(묶어서) 구성하여 배열에 저장(.push)
function productAdd(){ 
    // 1. 입력받은 값들을 가져온다.
    // 2. 입력받은 값 과 식별코드 + 1, 현재날짜(new Date())로 객체를 구성한다.
    // 3. 구성한 객체를 배열에 저장한다.
    // 4. 화면 새로고침/렌더링 한다.


    
}









