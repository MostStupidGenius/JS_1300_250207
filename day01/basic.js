// 주석 (단축키: ctrl + /)
// 컴퓨터가 해당 소스코드를 읽을 때 무시되는 부분으로,
// 주로 개발자 간에 소통해야 할 내용이나 참고해야 할 내용을 적는다.
// - 임시로 실행을 막을 코드의 앞에 붙여서 코드의 실행을 막는다.
// - 코드에 대한 설명을 적는 용도로 쓰인다.
// 주석은 슬래시 두 번// 이후에 적힌 내용을 무시한다.
var x = 10; // 즉 슬래시 두 번// 앞에 적힌 내용은 코드로 인식한다는 의미이다.
// 한 줄 주석이라고 부른다
/**
 * /**로 시작하는 주석은 범위 주석이라고 부른다.
 * 이는 *과 /를 붙인 주석 끝 표시가 나오기 전까지의 범위를
 * 컴퓨터가 소스코드를 읽을 때 무시하게 된다.
 * ※ 범위 주석은 겹쳐서 작성할 수가 없다.(시작과 끝이 정해짐)
 * 
 * 범위 주석보다는 가능하면 한 줄 주석 위주로 사용하는 것이 권장된다.
 */

// 변수란 "이름을 붙인 저장공간"
// variable
// 프로그래밍을 하려면 수많은 데이터를 다뤄야 하는데
// 이러한 데이터를 담아두고 사용할 저장공간, 바구니같은 공간에
// 이름을 붙인 것을 가리킨다.

// 이 변수, 저장공간을 사용하기 위해서는
// 컴퓨터에게 알려주어야 한다.
// 이를 "변수의 선언"이라 부르며 선언하려면 var와 함께 변수 이름을
// 적어주어야 한다.
// 모든 소스코드는 마침표 대신에 세미콜론;을 마지막에 붙여 준다.
// 이 마침표는 하나의 명령문이 끝났음을 알리는 역할을 한다.
var 변수명;

// 변수라는 저장공간에 값을 넣으려면 "대입 연산자="를 사용해야 한다.
// 변수명 = 값;
// 값을 넣을 때는 앞에 var를 붙일 필요가 없으며,
// 변수명을 적은 뒤 대입 연산자=, 값을 이어서 적은 후
// 세미콜론;으로 마무리한다.
변수명 = 3;
// 대입연산자=를 기준으로 좌측은 좌항이라 불리고 저장공간으로 쓰이며
// 좌항에는 반드시 변수(저장공간)만 위치할 수 있다.
// -> ※그냥 값은 대입연산자= 좌항에 놓을 수 없다.

// 변수라는 저장공간에는 값을 하나만 저장할 수 있다.
// 이미 값이 있는 변수에 값을 다시 대입하려고 하면
// 기존 값을 지운 뒤, 새로운 값이 저장된다.
변수명 = 31;

// 변수에 담긴 값을 확인하려면 출력문을 사용해야 한다.
// 이 출력문은
// console.log(출력할 변수 혹은 값)
// 위와 같이 작성하여 콘솔에서 출력할 수 있다.
// log 입력 -> ctrl + SpaceBar -> (자동완성) -> Enter 입력
console.log(변수명); // 31







