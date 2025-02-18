// c1_chaining.js
// 체이닝 기법
// 함수(메서드)의 결과로 다른 함수를 사용할 수 있는
// 객체를 반환하여
// 다른 함수나 메서드를 연쇄적으로 사용하는 기법을
// 체이닝 기법이라 부른다.

// 1. 기본 제공 객체를 사용한 방법
// 배열 객체, 문자열,...
let arrInts = [1, 2, 3];
let result = arrInts
    .map(e=>e*3)
    .map(e=>e+3)
    .reduce((sum, e)=>sum+e)
;
console.log(result);

// 2. 사용자 정의 클래스
// 개발자가 클래스를 만들 때 return 값을 this로 하면
// 해당 객체에 대해서 연쇄적으로 메서드를 사용하는
// 체이닝을 할 수 있다.
class Calculator {
    constructor() {
        this.value = 0;
    }

    add(n, m=this.value){
        this.value = n + m;
        return this;
    }

    sub(n){
        this.value -= n;
        return this;
    }

    multi(n) {
        this.value *= n;
        return this;
    }
    // 나눗셈
    divide(n){
        if(n === 0) return 0;
        this.value /= n;
        return this;
    }

    getValue(){
        return this.value;
    }
} // 클래스 끝

let cal = new Calculator();
result = cal
    .add(5, 4)
    .multi(9)
    .sub(13)
    // .add(1)
    // .divide(3)
    .getValue()
    ;
console.log("result: ", result);

