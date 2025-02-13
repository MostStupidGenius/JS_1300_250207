// c3_object_proto.js
// 프로토타입을 기반으로 객체를 새로 생성하는 예제

// 프로토타입 생성
const proto = {
    greet: function () {
        console.log("Hello World.");
    }
};

// 프로토타입을 기반으로 새로운 객체를 생성할 때
// Object.create(프로토타입);
// 위 메서드와 같이 프로토타입을 전달하여
// 새로운 객체를 생성할 수 있다.
let hong = Object.create(proto);

hong.greet();


// 정규표현식
// RegExp 객체
// RegExp 객체는 정규표현식을 사용해 문자열을 검색하거나
// 패턴 매칭을 수행할 때 사용된다.

// 정규표현식
const regex = /hello/i;

// .text(문자열)
// 해당 문자열이 정규표현식과 일치하는지 여부를 반환한다.
let result = regex.test("Hello, world!");
console.log(result);

// .exec(문자열)
// 정규표현식과 일치하는 문자열을 찾고, 배열로 반환한다.
// 일치하는 것이 없다면 null을 반환한다.
// 일치하는 정보 중 가장 먼저 찾은 내용에 대한 정보를
// 배열로 반환한다.

let match = regex.exec("Hello, World! hello~");
console.log(match);

// .replace()
let text = "Hello, World!";
let newText = text.replace(/world/i, "javascript");
console.log(newText);

// .match(regex)
text = "안녕하신가요, 반갑습니다요.";
result = text.match(/반갑/i);
console.log(result);
