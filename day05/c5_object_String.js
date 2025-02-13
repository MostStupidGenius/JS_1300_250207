// c5_object_String.js
// String 객체
// 문자열을 다루기 위해 만들어진 객체로,
// 문자열은 원시 타입으로 취급되지만, 
// 필요에 따라 String 객체로 변환되어
// 그 객체의 메서드를 사용할 수 있다.
let greet = "Hello, World!";

// 문자열의 길이 반환
// .length
console.log("Hello, World!".length); // 13

// 문자열의 문자를 모두 대문자/소문자로 바꾸는 기능
// .toUpperCase(), toLowerCase()
console.log(greet.toUpperCase());
console.log(greet.toLowerCase());

// 문자열에 특정 서브스트링(부분 문자열)이
// 포함되어 있는지 확인한다->true/false
// .includes(substring)
result = greet.includes("Hello");
console.log(result); // tre

// 문자열 쪼개기
// 문자열을 지정된 구분자로 나누어 배열로 반환한다.
// .split(구분자)
let subjects = "C, Java, Python, C++, C#, R, DBMS";

// 데이터와 데이터 사이에 위치한 값을 구분자라고 하며,
// 이런 구분자를 함수에 전달하여 데이터를 배열로 반환받을 수 있다.
subjects = subjects.split(", ");
console.log(subjects);

// 문자열의 앞뒤 공백을 제거한 새로운 객체를 반환
// .trim()
console.log("   Hello, World\t  ".trim());