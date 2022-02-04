// 1. basic arguments
const sayHi = (name:string, age:number, gender:string):void => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi("Jun", 33, "male");


const sayHey = (name:string, age:number, gender?:string):string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};
sayHey("J", 30);



//  2. interface with object arguments
interface Human { // interface는 js로 컴파일 되지 않는다. -> class 이용
    name:string;
    age:number;
    gender:string;
}
const person = {
    name:"jun",
    gender: "MALE",
    age: 31
};

const sayHello = (person:Human):void => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};
sayHello(person);


//  3. class with object
class Human2 { 
    //private 변수는 클래스 내부에서만 호출 가능.
    public name: string;
    public age: number;
    public gender: string;

    // 클래스가 시작될 때 마다 호출되는 생성자 -> 클래스로부터 객체를 만들 때 마다
    constructor(name:string, age:number, gender?:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const Kim = new Human2("Kim", 20, "female");
sayHello(Kim);

export {};