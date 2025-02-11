// c5_array.js
// 배열 Array
// 여러 개의 다양한 데이터타입의 값을 저장할 수 있는 데이터 구조
// - 저장하는 순서를 기억하기 때문에,
// 저장한 순서값(인덱스)으로 그 값에 접근할 수 있다.
// - 다양한 데이터 타입의 값을 저장할 수 있다.
// - 요소를 추가하거나 제거하면 남은 요소의 개수에 맞게
// 배열의 길이가 자동으로 조절된다.->동적 길이

// 배열의 생성
// 1. 대괄호[] 사용하기
// 대괄호에 여러 값을 나열하고 값과 값 사이에
// 반점,을 넣어서 여러 값을 하나의 배열에 요소로 넣을 수 있다.
let fruits = ["apple", "banana", "mango", "melon"];

// 2. new Array() 사용하기
// new Array() 소괄호() 안에 요소로 하고자 하는 값을
// 반점,으로 구분하여 여러개 전달하면 해당 요소들로 이루어진
// 배열을 반환한다.
let names = new Array("홍길동", "고길동", "짱구", "둘리");

// 배열의 요소에 접근하는 방법
// 요소에 접근할 때에는 저장했던 순서를 이용하여
// 접근할 수 있다.
// 순서값을 인덱스라고 부르며, 이 값은 0부터 시작한다.
// arr[index]
// arr이라는 배열의 index번째 요소를 접근한다는 의미이다.
// 접근: 그 값을 사용하거나 해당 저장공간의 값을 변경할 수 있음을
// 의미한다(변경-상수 제외)

// names 요소 중 2번째에 있는 요소 값을 가져와
console.log(names[2]); // 짱구

// 배열의 길이

// 배열 요소의 추가/삭제






