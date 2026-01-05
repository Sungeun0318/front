/*문제 1: 1부터 10까지 출력하기
for 반복문을 사용하여 1부터 10까지의 숫자를 콘솔에 순서대로 
출력하는 프로그램을 작성하시오.*/
// (1) 초기값 : let i = 1;
// (2) 조건문 : i <= 10;
// (3) 증감식 : i++
// (4) 실행문 : console.log(i);

// for( i = 1; i<=10; i++){
//     console.log(i);
// }

/*문제 2: 배열의 모든 요소 출력하기
다음과 같은 과일 배열이 있습니다. for 반복문을 사용하여 
배열의 모든 요소를 하나씩 콘솔에 출력하시오.
let fruits = ['사과', '바나나', '포도', '딸기'];*/

//(1) 초기값 : let index = 0; (2) 조건문 : index <= fruits.length - 1; (3) 증감식 : index++ (4) 실행문 : console.log(fruits[index]);

// let fruits = ['사과', '바나나', '포도', '딸기'];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for( let index = 0; index <= fruits.length - 1; index++){
//     console.log(fruits[index])
// }



/*문제 3: 배열 역순으로 출력하기
주어진 배열을 for 반복문을 사용하여 
역순으로 (마지막 요소부터 첫 요소 순서로) 출력하는 프로그램을 작성하시오.
let numbers = [1, 2, 3, 4, 5];  출력 예시: 5 4 3 2 1  */
// 초기값 : let index = index.length -1 
// 조건문 : index >= 0;
// 증감식 : index--;
// 실행문 : console.log(i)

// let numbers = [1, 2, 3, 4, 5];
// for(let index = numbers.length - 1; index >= 0; index--){
//     console.log(numbers[index]);
// }


/*문제 4: 1부터 50까지의 합계 구하기
for 반복문을 사용하여 1부터 50까지 모든 정수의 합을 구하여 콘솔에 출력하시오.*/
// 초기값 : let a = 1;
// 조건문 : a <= 50;
// 증감식 : a++;
// 실행문 : sum = sum + 1
// let sum = 0;
// for(a = 1; a <= 50; a++){
//     sum += a;
// }
// console.log(sum)


/*문제 5: 짝수만 출력하기
for 반복문과 if 조건문을 사용하여, 1부터 20까지의 숫자 중 짝수만 콘솔에 출력하시오.*/
// 짝수 찾기 : 값 %2 == 0 [짝수], 값 % 2 == 1[홀수]
// 초기값 : let i = 1;
// 조건문 : i <= 20;
// 증감식 : i++;
// 실행문 : if( i % 2 == 0){console.log(i);}

// for(let i = 1; i <= 20; i++){
//     if( i % 2 == 0){console.log(i);}
// }