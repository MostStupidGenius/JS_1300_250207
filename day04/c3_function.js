// c3_function.js
// 함수(function)
// 외부에서 주어지는 값을 이용하여 어떤 연산을 한 뒤,
// 필요하다면 외부로 결과 값을 반환하는 역할을 하는 코드 블록
// 자주 사용하는 코드를 추상화하여 코드블록으로 만든 뒤
// 이름을 붙여 그 이름만으로 해당 기능을 사용할 수 있게 만드는 것이
// 바로 함수라는 것이다.

// 함수의 선언
// function      name   (params) {}
// 함수선언예약어 함수명   (매개변수들) {코드}
// 매개변수란, 외부에서 전달받은 값(인수)을 임시 담아두어
// 그 변수의 이름만으로 접근하기 위해 만들어두는 저장공간이다.
// 외부에서 들어오는 값이 어떤 값인지 알 수 없기 때문에
// 이름을 붙여서 일관적인 코드 처리를 하기 위함이다.
function printName(name){
    console.log(name);
}

printName("홍길동");
printName("김길동");
printName("고길동");

function printNameTimes(name, times) {
    // 이 함수는 name 변수와 times 변수를 전달받아
    // name의 값을 times 횟수만큼 반복해서 출력하는 함수다.
    for (let i = 0; i < times; i++) {
        console.log(name);
    }
}

printNameTimes("홍길동", 10);

// 함수의 값 반환
// 전달받은 성과 이름을 공백을 사이에 두고 결합한 문자열 값을
// 함수를 사용했던 곳으로 반환하고 치환한다.
function makeFullName(lastName, firstName){
    return lastName + " " + firstName;
}

let fullname = makeFullName("고", "길동");
console.log(fullname);

// 함수 표현식
let add = function(a, b){
    return a + b;
};

let addAlt = add;

let result = add(10, 3);
console.log(result); // 13

result = addAlt(30, 3);
console.log(result); // 33

let added = function(x, y){return x + y;}(15, 31);
console.log(added); // 46

// 화살표 함수
// 함수 선언 예약어(function) 없이 매개변수와 그 구현 내용만 적더라도
// 함수로 동작할 수 있는 문법이 존재한다.
// 이러한 함수 선언법은 화살표=>를 사용하기 때문에
// 화살표 함수(Arrow Function)라고도 부른다.
// 간결한 문법을 제공하여 쉽게 함수를 만들고 사용할 수 있다.
// (param1, param2, ...) => {코드블록};
const addFunc = (a, b) => {return a + b};

console.log(addFunc(13, 31)); // 44
// 이러한 화살표 함수를 함수표현식과 함께 사용할 때에는
// return과 중괄호를 생략할 수 있다.

const greet = (namevar)=>"Hello " + namevar + ". nice.";
console.log(greet("홍길동"));

// 기본 매개변수
// 기본 매개변수란, 매개변수에 해당하는 값을 전달받지 않았을 때
// 자동으로 설정되는 매개변수의 초기값, 기본값을 의미한다.
// 기본 매개변수 설정이 되어 있지 않다면
// 그 매개변수는 값을 전달하는 것이 맞다.

// 매개변수의 기본값 설정
const introduce = (name, age, address="주소 미입력")=>{
    console.log(
        "이름:", name,"\n",
        "나이:", age, "\n",
        "주소:", address
    );
};

introduce("홍길동");
// 이름: 홍길동
// 나이: undefined
// 주소: 주소 미입력

// 전달하지 않은 값은 매개변수에 들어가지 않아서
// undefined 값으로 처리되고
// 기본값이 있는 경우에는 기본값으로 들어간다.

// 함수의 반환값이 있으면 그 값이 반환되고
// 반환값이 없으면(return이 없으면)
// undefined 값이 반환된다.

// 함수의 스코프 영역(scope)
// 스코프는 변수의 접근 범위를 의미한다.
// 자바스크립에서의 함수는 고유한 스코프를 가지며,
// 함수 내에서 선언된 변수는 함수 외부에서 접근, 사용할 수 없다.

function scopeTest(){
    // 함수 내부에 선언된 변수와 외부에 선언된 변수는
    // 스코프 영역이 다르기 때문에 중복된 이름으로 선언이 가능하다.
    let localVar = "지역변수";
    console.log(localVar);
}
// 또한 영역이 다르기 때문에 서로 간섭하거나 접근할 수가 없다.
scopeTest();
// console.log(localVar); // undefined 오류 발생

// 중첩 함수(Nested Function)
// 함수 안에 또 다른 함수를 정의할 수 있으며,
// 이를 중첩 함수라 한다.
// 중첩 함수는 외부 함수의 변수에 접근할 수 있다.
function outer(){
    let outerLet = "외부 변수";
    var outerVar = "외부 var";

    // 내부 함수 선언
    function inner(){
        console.log(outerLet); // 외부 변수 호출
        console.log(outerVar); // 출력된다.
    }
    inner();
}
outer();

// 콜백 함수(callback function)
// 함수가 인자로 전달되어 내부에서 사용되는
// 함수를 콜백함수라 부른다.
// 함수를 마치 값이나 변수처럼 취급한다 하여
// "일급객체"라고 표현하기도 한다.
function callbackTest(callback){
    let name = "홍길동";
    let age = 30;
    callback(name, age);
}

// function print(name, age){
//     console.log("이름:" + name + "\n" + "age:" + age);
// }

// callbackTest(print);
callbackTest((name, age)=>
    console.log("이름:" + name + "\n" + "age:" + age)
);

// 함수로 함수 반환하기
// 함수를 인자로 전달할 수 있다면
// 반대로 반환값으로도 함수를 반환할 수 있다는 것이다.
function makeMulti(x){
    return (y)=>x*y;
}
// let multi = makeMulti(2);
// console.log(multi(5)); // 10

console.log(makeMulti(3)(5));