// c5_except_handler.js
function divide(num1, num2) {
    var result = num1 / num2;
    if(result == Infinity){
        // 새로운 에러를 직접 정의하여 외부로 전송
        throw new Error("0으로 나눌 수 없습니다.");
    }
    return result;
}

console.log(divide(10, 3));
try {
    // 오류가 발생할 수 있는 코드를 작성하는 공간
    console.log(divide(10, 0));
} catch (error) {
    // 에러가 발생했을 때 실행되는 코드 블록
    console.log("에러 발생");
} finally{
    console.log("에러 발생 여부와 무관하게 항상 실행되는 코드 블록");
}
// try-catch로 에러를 잡았다면 프로그램 종료 없이
// 이후 코드도 실행된다.
console.log("이후");
