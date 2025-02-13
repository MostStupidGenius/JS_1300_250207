// c2_object_advanced.js
// 객체의 함수 중, 속성에 접근할 때에 자동으로 사용되는 메서드가 있다.
// 이들을 게터, 세터라 부른다.
// getter, setter

let hong = {
    name: "홍길동",
    age: 30,
    get info(){console.log(this.name, this.age);
    },
    getInfo: ()=>{
        return "이름: "+ this.name + "\n나이: " + this.age;
    },
};

console.log(hong.info());



