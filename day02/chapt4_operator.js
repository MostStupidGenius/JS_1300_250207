// chapt4_operator.js
// 연산자(Operator)
// 값이나 변수를 계산하여 새로운 어떤 값을 만들어내는 기호를
// 연산자라고 하며, 연산의 대상이 되는 값이나 변수를
// 피연산자라고 부른다.
// 연산자는 항상 피연산자를 동반해야 한다.

// 산술 연산자
// 수학적인 계산을 하기 위해 사용하는 연산자로
// 피연산자로 숫자가 오고, 연산 결과 숫자가 나온다.

// 산술 연산자의 종류
// 덧셈, 뺄셈, 곱셈, 나눗셈
var x = 1 + 2; // 3
x = 3 - 1; // 2

// 곱셈
x = 2 * 5; // 10
// 나눗셈
// 숫자끼리 나눗셈했을 때, 그 결과는 정수일 수도, 실수일 수도 있다.
x = 10 / 2; // 5
console.log("10 / 2 =", x); // 정수 5
x = 11 / 2; // 5.5
console.log("11 / 2 =", x); // 실수 5.5

// 나머지 %
// 연산 결과 몫과 나머지를 구해서 그 중 나머지를 반환한다.
// 정수와 정수에 대해서 나머지 연산을 하면 반드시 정수가 나온다.
// 피연산자 중 하나라도 실수라면 그 결과 실수가 나올 수 있다.
console.log("11 % 3 =", 11 % 3); // 나머지 2 출력
console.log("11.4 % 3 =" , 11.4 % 3); // 2.4000 0000 0000 0004
console.log("11 % 3.1 =" , 11 % 3.1); // 1.6999 9999 9999 9997
// 정확하게 소수점 자리수가 표현되지 않는 이유는
// 부동소수점 방식의 정확도 때문이다.
// 컴퓨터는 0과 1이라는 이진법 체계 안에서 숫자를 계산하기 때문에
// 소수점을 계산할 때 근삿값으로 계산할 수밖에 없다.
// 이러한 근소한 차이를 일반적으로 반올림으로 처리를 한다.
// JS에서의 소숫점 표현은 소숫점 아래 15번째 자리까지 정확히 표현하며
// 16번째 자리에서는 반올림되어 표현된다.

// 증가/감소 연산자
// 변수의 앞이나 뒤에 붙어 변수의 현재 값을 1 증가/감소시키는 연산자로
// 증감 연산자라고 불린다.
// 변수에 저장된 기존 값을 활용하여 그 값을 증가/감소시키기 때문에
// 반드시 변수를 피연산자로 하여 증감연산자는 사용되어야 한다.
let num1 = 30;

// 변수 뒤에 ++을 붙이면 변수의 값을 사용한 뒤에 1이 증가한다.
// 아래의 경우는 사용은 하지 않고 1만 증가시키는 경우이다.
// 후위 증감연산자
num1++; // num1 = num1 + 1
console.log("num1 =", num1); // 31
console.log("num1++ =", num1++);// 31출력
console.log(num1); // 32

num1 = 13;
// 변수의 앞(왼쪽)에 ++을 붙이면 변수의 값을 1 증가 시킨 뒤
// 그 값을 사용한다.(전위 증감연산자)
console.log(++num1); // 출력14, 저장14
console.log(num1); // 14

// 비교 연산자(관계 연산자) comparison operator
// 두 값을 비교하여 그 결과 참 또는 거짓을 반환하는 연산자
// 동일 여부
// == 같니?
console.log("3 == 3.0 =", 3 == 3.0); // 3과 3.0이 같니?
// -> true
// == 동등 연산자는 실수의 소숫점 자리가 0이면
// 정수 3과 동일하게 취급한다.
console.log("3 == '3' = ", 3 == '3');
// -> 동등 연산자는 문자열 3과 숫자 3을 동일하게 취급한다.

// != 다르니?
console.log("3 != 5 =", 3 != 5); // true

// ===
// 엄격한 동등 연산자
// 타입도 검사를 하기 때문에 숫자3과 문자열 3은 서로 다른 것으로
// 취급한다.
console.log("3 === '3' =", 3 === "3");
// -> false 두 값은 값은 같을지 몰라도 타입이 다르기 때문에 false
// !==
// 엄격한 부등 연산자
// 타입까지 검사를 한다.

console.log("===크기 비교===");

// 크기 비교
// > <
// 초과, 미만 : 해당 값을 포함하지 않는 범위로 지정
console.log(3 > 3); // false
console.log(3 < 4); // true

// >= <=
// 이상, 이하 : 해당 값을 포함하는 범위를 지정
console.log(3 >= 3); // true

console.log("===논리 연산자===");

// 논리 연산자 Logical Operator
// 논리값을 결합하거나 부정하여 그 결과 논리값을 반환하는 연산자다.
// 논리곱
// && 그리고, 이면서
// 두 논리값이 모두 참인 경우, 그 결과로 참을 반환
// 두 값 중 하나라도 거짓이면, 그 결과 거짓을 반환한다.
console.log(true && true); // true
console.log(true && false); // false

console.log("===||연산자===");

// 논리합 shift + \
// || 또는, 이거나
// 두 논리값 중 하나라도 참이면 그 결과 참을 반환
// 두 값이 모두 거짓인 경우, 그 결과 거짓을 반환한다.
console.log(true || false); // 하나 이상 참이므로, true
console.log(false || false); // 모두 거짓이므로 false

console.log("===논리부정연산자===");
// 논리부정
// 논리값 앞에 붙어 해당 값을 반전시키는 연산자다.
// !true == false, !false == true
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true


console.log("===문자열 연산===");
// 문자열 연산
// 문자열과 다른 값을 더하기 연산했을 때
// 하나의 문자열로 결합하는 연산자+를 가리킨다.
let str1 = "Hello";
let str2 = "World";
let newStr = str1 + " " + str2;
console.log(newStr);

console.log("hello" + 3);
// 주의해야 할 점.
// 숫자값이 든 문자열과 숫자값을 연산했을 때
// 두 값이 연산이 아닌 연결이 된다는 것에 주의해야 한다.
console.log(3 + "33"); // 36(x) "333"(o)

// 삼항 연산자
// 조건식(반환값이 논리값인 식)의 결과값에 따라
// 반환값을 정하는 연산자
// 조건식 ? 참일경우값 : 거짓일경우값
let number1 = 30;
let number2 = 14;

console.log("number1 > number2 ? number1 : number2\n=",
    number1 > number2 ? number1 : number2);

// 조건식의 결과에 따라 출력되는 값이 달라진다.
console.log(true ? "어 참" : 0);

// 대입(할당) 연산자
// 연산자를 기준으로 좌항의 저장공간(변수, 상수)에 우항의 값을
// 할당, 저장하는 연산자이다.
// = 스킵

// 복합 할당 연산자
// 할당 연산자와 동일하게 동작하지만
// 기존 변수의 값을 활용하여 추가 산술 연산을 수행한다는 점이
// 다른 점이다.
// += -= *= /=
let num3 = 3;
num3 += 2; // num3 = num3 + 2;
num3 *= 3; // num3 = num3 * 3;

// 기타 연산자
// typeof
// instanceof

// 연산자의 우선순위
