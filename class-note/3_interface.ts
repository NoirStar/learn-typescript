interface User {
    age: number,
    name: string,
}

function getUser(user: User) {
    console.log(user)
}



interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;

sum = (a: number, b: number): number => a + b;

// 인덱싱

interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a','b','c'];

// 딕셔너리 패턴

interface StringRegexDictionary {
    [key: string]: RegExp;
}


var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// 인터페이스 확장


interface Person {
    name: string,
    age: number,
}

interface Developer extends Person{
    language: string,
}

var capt: Developer = {
    name: 'a',
    age: 123,
    language: 'kor'
}