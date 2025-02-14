// c2_object_Date.js
// 날짜 객체 Date
// 날짜와 시간을 다루기 위한 메서드와 상수 등을 제공한다.
// Date 객체는 생성자 함수를 사용하여
// 인스턴스화 한 뒤 사용해야 한다.
// 참조 변수를 const로 하는 이유는
// 다른 변수 값이 들어가면 안 되기 때문이다.
const now = new Date();

// 객체를 그대로 출력하면
// 2025-02-14T05:25:02.711Z
// 위와 같은 날짜 정보를 출력한다.
console.log(now);

// UTC가 없는 메서드는 현지시간을 기준으로
// 시간값을 가져온다.
// UTC가 붙은 메서드는 세계표준시를 기준으로
// 시간값을 가져온다.

// 전체 연도 출력
// .getFullYear()
// 현재 시간을 기준으로 전체 연도를 숫자로 반환한다.
let yyyy = now.getFullYear();
console.log(yyyy);

// 월을 숫자로 반환
// .getMonth()
// 반환되는 값은 0부터 시작한다.(0 ~ 11)
let mm = now.getMonth();
console.log(mm);

// 일을 반환한다.
// .getDate()
// 월과 달리 날짜 그대로 숫자가 반환된다.
let dd = now.getDate();
console.log(dd);

// 요일 반환
// .getDay()
// 일요일(0)부터 토요일(6)까지의
// 오늘의 요일을 가져온다.
let weekDay = now.getDay();
console.log(weekDay);

// 시, 분, 초
// .getHours()
// .getMinutes()
// .getSeconds()


// 요일 배열 만들기
let weeks = ["일", "월", "화", "수", "목", "금", "토"];

console.log(yyyy+"년", mm+"월", dd+"일", weeks[weekDay]+"요일");
