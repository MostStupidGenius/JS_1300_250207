// c2_if_practice.js
// if문 실습문제
// if-else if-else

let variable = 
// "유모차"
// "banana"
// "SM5"
"Hi"
;
console.log(variable);

// 어떤 변수의 값이 "Hi", "Hello", "Nice to meet you" 중 하나라면
if(variable=="Hi" || variable=="Hello" || variable=="Nice to meet you"){
    // "인삿말"을 출력
    console.log("인삿말");
} else
// 어떤 변수의 값이 "apple", "banana", "mango" 중 하나라면
if(variable=="apple" || variable=="banana"||variable=="mango"){
    // "과일" 출력
    console.log("과일");
} else

// "람보르기니", "SM5", "볼보 트럭" 중 하나라면
if(variable=="람보르기니"|| variable=="SM5" || variable=="볼보 트럭"){
    // "자동차" 출력
    console.log("자동차");
} else {
    console.log("어떤 경우도 아닙니다.");
}

console.log("===============");
const greeting = "Hello"; // 상수
let greet = "Hi"; // 변수
switch(variable){
    case greet:
    case greeting:
    case "Nice to meet you":
        console.log("인삿말");
        break;
    case "apple": case "banana": case "mango":
        console.log("과일");
        break;
    case "람보르기니": case "SM5": case "볼보 트럭":
        console.log("자동차");
        break;
    default:
        console.log("어떤 경우도 아닙니다.");
}

