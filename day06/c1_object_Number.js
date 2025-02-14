// c1_object_Number.js

// 주어진 값이 유한한 값인지 여부를 반환하는 함수
// Number.isFinite(value) -> true or false

// 42는 유한하므로 true
console.log(Number.isFinite(42));
// Infinity는 무한하므로 false
console.log(Number.isFinite(Infinity));

// NaN(Not-a-Number)인지 여부를 반환하는 함수
// Number.isNaN(value)
console.log(Number.isNaN(42)); // false
console.log(Number.isNaN('A')); // false
console.log(Number.isNaN("숫자")); // false


console.log("=== 문자를 정수로 ===");
// 문자열을 정수값으로 변환하는 함수
// Number.parseInt(string)
// 문자열인 값을 전달받아 그 값을 정수형 값으로 변환하는데,
// 만약 정상적으로 정수값으로 변경되지 않으면
// NaN값이 반환된다.
let value = Number.parseInt("42");
console.log(value);
console.log("value: ", typeof(value)); // number

value = Number.parseInt("홍");
console.log(value);
console.log("value: ", typeof(value)); // number

// JS에서 표현할 수 있는 가장 큰 값
// Number.MAX_VALUE
// 이보다 큰 값을 출력, 연산하려고 하면
// Infinity(무한)이 출력된다.
console.log(Number.MAX_VALUE);





// Math 객체
// 수학적인 연산과 관련된 메서드와 상수를 정의해놓은
// 객체이다.
// 이 객체의 기능을 사용할 때에는 Math.하고서
// 메서드를 사용해야 한다.(static)
// Math.round(value)
// 주어진 실수값을 정수값으로 반올림한다.
console.log(Math.round(8.49999999));

// Math.ceil(value)
// 주어진 실수를 올림한다.
// Math.floor(value)
// 주어진 실수를 내림한다.

// 랜덤값 추출
// Math.random()
// 0과 1사이의 값을 반환
// 0부터 우리가 원하는 값 사이의
// 랜덤한 값을 얻으려면
// 랜덤 값에 범위 값을 곱한 뒤, 전체를 내림하면 된다.
// 내림->0부터
// 올림->1부터
console.log(Math.floor(Math.random() * 2));

// let numbers = [1, 7,3, 4,12, 57, 98];
let maxed = Math.max(1, 7, 3, 4, 12, 57, 98);
console.log(maxed);

// 주어진 값의 제곱근을 구하는 함수
value = 17; // 딱 떨어지지 않을 경우
// 소숫점까지 표현한다.
console.log(Math.sqrt(value));