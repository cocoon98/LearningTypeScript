let isDone: boolean = false; // boolean
let decLiteral: number = 6; // number
let str: string = 'Hello World!'; // string
let list: number[] = [1, 2, 3]; // Array
let list2: Array<number> = [1, 2, 3]; //Array

let x: [string, number]; // Tuple, allowed to declare a known array of element's count and type, and their type has no need to be equaled.
x = ['hello', 10];
// x[3] = 'world'; // 元素越界会使用联合类型替代

enum Color { Red, Green, Yellow } // 枚举类型
let c: Color = Color.Green

// 枚举类型可以根据值来映射得到字段， 编号默认从0开始自动编号，可以手动编写
let curColorName: string = Color[2];
console.log('color: ', curColorName); // 'Yellow'

// Any 类型，暂时无法定下类型的变量指定的一个类型，可以通过编译阶段
// Any 类型的生物，可以调用其自身方法，如一个any类型的整数，可以调用其toFixed等方法
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

