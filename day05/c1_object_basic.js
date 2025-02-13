// c1_object_basic.js
// 객체란 하나의 대상에 대한 정보와 그 기능을 코드로써
// 묶어서 관리하기 위한 정보들의 묶음 단위이다.

// 객체는 중괄호{}안에 변수와 값의 한쌍들을 적어
// 정보를 정의할 수 있다.
// 여러 정보는 반점,를 구분자로 하여 여러 정보를
// 정의할 수 있다.
let hong = {
    name: "홍길동",
    age: 31,
    address: "서울시"
};

// 객체의 정보에 접근하려면 마침표.를 이용하여
// 객체의 속성(property)에 접근해야 한다.

// hong이라는 객체의 name 속성의 값을 출력하라
console.log(hong.name);

let car = {
    owner: "고길동",
    type: "승용차",
    name: "SM5",
    made_year: 2021,
    // 함수 정의
    forward: function(){
        // 객체의 변수에 마침표.뒤에 함수명을 적고
        // 소괄호()를 사용하면 함수를 사용할 수 있다.
        console.log(this.name + ": 앞으로 전진한다.");
        // this는 현재 이 함수가 속해 있는
        // 객체를 가리키는 "대명사" 역할을 하는 예약어이다.
    },
};

car.forward();

// 함수 생성 방법
// 기본적인 방법은 중괄호{}에 여러 정보를 정의하고
// 변수에 담는 방법이다. -> 객체 리터럴
// let obj = {정보};

// 생성자 함수
// constructor function
// 생성자 함수는 비슷한 구조의 객체를
// 여러 개 생성할 때 유용하다.
// 이때 생성자명은 대문자로 시작해야 한다.
// function 생성자명(매개변수){this.변수명=매개변수;....}
function Student(name, age, grade, scores){
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.scores = scores;
}

let 철수 = new Student("김철수", 17, 1, [70, 80, 60, 75]);
let 영희 = new Student("고영희", 19, 3, [80, 90, 85, 87]);

console.log(철수.grade); // 1
console.log(영희.scores[1]); // 90

// 프로토타이핑을 이용한 객체 생성
// Object.create() 메서드를 사용하여 지정된 형식을 갖춘
// 객체들을 생성할 수 있다.
// 새로운 객체들은 기존의 프로토타입을 기반으로
// 새로운 속성이나 기능을 추가할 수 있다.

// 프로토타입 생성
// 그냥 일반 객체를 만들듯이 만들면 된다.
let personPrototype = {
    name : "",
    age: 30,
    talk: function(){
        console.log("말하다");
    }
}

// 위의 객체를 기반으로 한 새로운 객체를 생성
let person = Object.create(personPrototype);
person.talk = ()=>{
    console.log("말하다2 외부에서 정의했다.");
};

person.talk();

// 프로퍼티에 접근하는 방법
// 마침표.로 하위 접근하는 방법

// 마치 배열의 값에 접근하듯이,
// 순서값이 아니라 배열의 키값을 대괄호[] 안에 넣어
// 해당 객체의 해당 키 요소에 접근할 수 있다.
console.log(철수["name"]);

// 참조 타입 객체
// 객체는 원시 자료형이 아니라 참조 자료형이기 때문에
// 다른 변수에 값을 전달하여 복사하면, 객체가 복사되는 것이 아니라
// 주소값이 복사되어 전달된다.
// 즉, 단순히 같은 객체를 접근할 수 있는 변수가 늘어날 뿐인 것이다.
hong = {   
    name: "홍길동",
    age: 31,
    TV: "32인치"
};

// 객체의 주소를 새로운 변수에 전달
// 새로운 변수도 같은 주소에 접근할 수가 있다.
let hong2 = hong;

console.log(hong2.name); // 홍길동
hong2.name = "홍당무";
hong2.age = 12;

console.log(hong.name, hong.age);







