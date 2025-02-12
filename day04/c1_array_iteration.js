// c1_array_iteration.js
// 배열의 순회
// 배열의 모든 요소를 하나씩 처리하려면 반복문을 사용할 수 있다.

// for반복문
let fruits = ["apple", "banana", "mango", "orange"];
// 반복문의 인덱스 i를 이용해 각 요소에 순차적으로 접근할 수 있다.
// i를 이용해 접근하는 방법은, 앞뒤 요소에 접근해야 할 필요가 있을 때
// 주로 사용된다. 혹은 인덱스 i의 값이 직접적으로 필요할 때 사용된다.
for (let i = 0; i < fruits.length; i++) {
    // i번째 요소를 임시 상수 e에 담는다.
    const e = fruits[i];
    // 담은 값을 출력한다.
    console.log(e);
}

console.log("===for of===");

// for...of
// 배열의 요소를 임시 변수에 담는 방식을
// 하나의 문법으로 만든 반복문
// 배열의 요소 하나하나에 각각 같은 코드를 실행하고 싶을 때
// 인덱스를 통한 방식이 아니기 때문에
// 현재 반복이 아닌 다른 요소에는 접근하기 어렵다.
for(let fruit of fruits) {
    console.log(fruit);
}

// forEach메서드
// 배열 뒤에 마침표.와 함께 forEach()를 사용하여
// 특정 동작을 모든 요소에 적용하여 실행하는 문법이다.
fruits = ["사과", "바나나", "딸기", "포도", "멜론"];
console.log("===foreach===");

fruits.forEach(
    (fruit)=>{
        console.log(fruit);
    }
);

// 범위로 요소를 추가 및 제거
// .splice(start, count)
// start번째 요소부터 count개수 만큼 요소를 제거
// fruits.splice(1, 2)
// console.log(fruits);

// .splice(start, count, replaces_items)
// start 인덱스부터 count개수 만큼 제거한 뒤,
// replaces_items의 요소를 해당 위치에 추가한다.
fruits.splice(1, 2, "복숭아");
console.log((fruits));

// 배열 정렬(정방향)
// 사전순으로 배열의 요소를 정렬한다.
// .sort()
fruits = ["banana", "strewberry", "peach", "apple"];
// 요소의 사전순 정렬
console.log(fruits); // 기존 순서
fruits.sort();
console.log(fruits); // 정렬된 순서

// 배열 순서 뒤집기
// .reverse()
// 대상 배열의 요소 순서를 정반대로 뒤집는다.
fruits.reverse();
console.log("반전: ", fruits);


// 다차원 배열
// 배열의 요소로 배열이 들어갈 수 있다.
// 이를 다차원배열이라 하며, 내부 배열의 요소에 접근하려면
// 대괄호[]를 중첩하여 접근해야 한다.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][0]);