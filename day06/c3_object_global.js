// c3_object_global.js
// 브라우저와 Node.js 환경에서의 전역 객체
// 브라우저 환경에서는 전역 객체가 window이다.
// Node.js 환경에서는 전역 객체가 global이다.

// 전역 객체는 우리 눈에 따로 보이지는 않지만
// 암묵적으로 참조되어 접근과 사용이 가능하다.

// globalThis
// 웹브라우저 환경과 Node.js 환경에서 쓰이는
// 전역 객체의 이름이 달라서 호환이 안 되는,
// 불편한 점이 있었다.
// 해서 공통으로 쓸 수 있는 globalThis를 사용하도록
// 했다.
// 전역객체의 속성으로 값을 선언하고 사용하려면
// globalThis.변수명 = 값;
// 위와 같이 선언 예약어 없이 값을 넣으면 된다.
globalThis.globalVar = 30;
console.log(globalThis.globalVar);
// 같은 파일 내의 어떤 위치에서든
// 전역 객체의 속성에 접근, 사용, 변경 등이
// 모두 가능하다.