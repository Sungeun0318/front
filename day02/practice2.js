// 숫자 자료 : 2000(가격), 4000(총 결제 금액), 10(수량)
// 문자열 자료 = 아메리카노(제품명), 커피(카테고리), 5(주문번호)
// 불리언 자료 : 포장 여부, 결제 여부, 품절 여부 
// 배열 자료 : 카테고리명들, 제품명들, 가격표들, 장바구니상품목들
// 객체 자료 : 제품과 가격은 하나의 쌍,
// {제품명: 콜라, 가격 : 1000 재고:10}, 
// {선택된 제품 : {제품명: 콜라, 가격 : 1000 재고:10}, 총주문금액 : 4000}
// {주문번호 : 10, 결제금액 : 3000, 주문날짜 : 0000-00-00}



let 제품별가격 = 2000;
console.log(제품별가격);
let 총결제금액 = 4000;
console.log(총결제금액);
let 수량 = 10;
console.log(수량);

console.log("아메리카노", "스무디/쉐이크", "5");


const 품절여부 = true; console.log(품절여부);
const 영수증출력여부 = false; console.log(영수증출력여부);
const 적립여부 = true; console.log(적립여부);



let priceAry = [2000, 3000, 4000];
console.log(priceAry);
let product = ["아메리카노", "카페라떼", "아이스티"];
console.log(product);
let Category = ["쉐이크", "커피", "라뗴"]

let produtobj = { name : "원조커피", price : 2500, stork : 35};
console.log(produtobj);
let produtobj2 = { Option : "콜라", price : 1000, stork : 10, Total : 100000 }
console.log(produtobj2);
let produtobj3 = { orderNumber : 10, Cost : 3000, orderDate : "25.12.24"}
console.log(produtobj3);


