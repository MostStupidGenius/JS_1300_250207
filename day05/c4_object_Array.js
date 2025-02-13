// c4_object_Array.js
// Array 객체
// 배열을 다루기 위한 기능들을 모아놓은 객체로,
// 배열인지 여부를 확인하거나
// 배열 객체의 요소를 추가, 삭제, 확인 하는 
// 함수, 메서드 등의 기능을 제공한다.
let arrFruits = ["apple", "banana", "mango"];

// 주어진 값이 배열인지 여부를 판단 -> true, false
// .isArray(값)
console.log(Array.isArray(arrFruits)); // true


// 배열의 끝에 새로운 요소를 추가
// .push(요소값)
arrFruits.push("watermelon");
console.log(arrFruits);

// 배열의 끝 요소를 제거 후 반환
// .pop()
let last = arrFruits.pop();
console.log(last);

console.log(arrFruits);

// 각 요소에 동일한 동작을 수행
// .map(lambda)
let arrFruitsLength = arrFruits.map((e)=>e.length);
console.log(arrFruitsLength);

// 각 요소를 판별식(true/false 반환)에 사용하여
// 그 결과가 true인 요소들로 이루어진
// 새로운 배열을 생성
// .filter(lambda)
arrFruitsLength = arrFruits.filter(e=>e.length === 5)
console.log(arrFruitsLength);

let arrNums = [1, 2, 3, 4, 5];
// 배열을 순회하며 각 요소를 새로운 연산의 피연산자로
// 사용하여, 최종적으로 값 하나는 반환하는 함수
// .reduce(lambda)

result = arrNums.reduce((a, b)=>a * b);
console.log(result);