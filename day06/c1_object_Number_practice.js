// c1_object_Number_practice.js
// 실습1. 로또 번호를 추천하는 시스템을 만들어보자.
// 45/6 룰을 적용해서, 1부터 45까지의 숫자를
// 6개 중복없이 자동으로 골라
// 그 값을 정렬하여 출력해보자.

// 1~45 Math.random() * 45 -> ceil
// 중복 여부를 검사하는 코드는
// 이중 반복문으로 구현할 수 있다.

// 로또 번호 배열 선언
let lotto = [];

// 외부 반복문에서는 로또 번호 배열의 길이가
// 6개가 아니면 무한 반복 -> 6개가 될 때까지 반복
while(lotto.length < 6){
    // 1부터 45까지의 수 중 하나가 랜덤으로 골라진다.
    let lottoNum = Math.ceil(Math.random() * 45);
    
    // 내부에서는 새로운 랜덤값을 고른 뒤,
    // 그 값이 이미 로또 번호 사이에 있는지 검사
    // 내부 for문으로 고른 값이 로또 번호 배열에 있는지 검사
    // 랜덤값이 로또 번호들 사이에 이미 존재하는지 여부를
    // 담을 변수 선언
    let isExist = false;
    // 이미 존재하는 값이라면 외부 반복문에서
    // 다음 반복으로 넘어가 새로운 랜덤값으로
    // 다시 검사를 해야 하기 때문이다.

    for (const e of lotto) {
        if(e == lottoNum){
            isExist = true;
            break; // 내부 for문 탈출
        }
        // 만약 존재하지 않는다면, 반복문이 끝날 때까지
        // isExist 변수는 false로 유지될 것이다.
    }

    // 만약 랜덤값이 중복이라면 
    if(isExist) {
        // 다음 반복으로 이동
        continue;
    }
    /// 없을 경우에 새롭게 추가 .push()
    // 중복이 아니라면 해당 값을 로또 번호에 추가
    lotto.push(lottoNum);
}

console.log(lotto);

// 추가. 배열을 정렬하여 최종 출력
let sorted = lotto.sort((a, b)=>a-b);
console.log(sorted);