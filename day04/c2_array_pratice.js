// c2_array_practice.js

// 2차원 배열(행렬)을 만들어 각 행에는 학생마다의 점수가 들어간다.
// 1. 이때 각 학생의 점수를 출력하는 반복문을 작성해보자.
let students = [
    [90, 80, 85, 70],
    [80, 70, 80, 80],
    [70, 75, 70, 80],
    [90, 85, 90, 95]
];
// 각 학생 번호에 따른 상수를 선언
const 철수=0, 영희=1, 둘리=2, 길동=3;
let names = ["철수", "영희", "둘리", "길동"];
// 각 점수에 과목을 이름으로 하는 상수를 만든다.
const 국어=0, 영어=1, 수학=2, 사회=3; 
let subjects = ["국어", "영어", "수학", "사회"];

for (let i = 0; i < students.length; i++) {
    const scores = students[i];
    console.log("===" + names[i] + "의 점수===");
    for (let j = 0; j < scores.length; j++) {
        const score = scores[j];
        console.log(subjects[j] + ": " + score);
    }
}

// 2. 각 학생의 평균 점수를 구해보자.
let total_sum = 0;
for (let i = 0; i < students.length; i++) {
    const scores = students[i];
    // 점수 총합을 저장할 변수 선언
    let sum = 0;
    console.log("===" + names[i] + "의 평균점수===");
    for (let j = 0; j < scores.length; j++) {
        const score = scores[j];
        // console.log(subjects[j] + ": " + score);
        sum += score;
    }
    let avg = sum / scores.length;
    console.log("평균점수:" + avg);
    total_sum += avg;
}
console.log("전체 평균: " + total_sum / students.length);

// 철수의 수학점수
console.log(students[철수][수학]);
console.log(students[길동][국어]);