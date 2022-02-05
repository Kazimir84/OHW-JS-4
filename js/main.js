// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sqrt = 0;
let a = prompt('Введіть першу сторону прямокутника');
let b = prompt('Введіть другу сторону прямокутника');
function countSqrt(a, b) {
    sqrt = a * b;
    return sqrt;
};
countSqrt(a, b);
console.log('Площа прямокутника = ', sqrt);
document.write(`Площа прямокутника зі сторонами ${a} та ${b} = ${sqrt}`);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sqrtCircle = 0;
let r = prompt('Введіть радіус кола');

function countSqrtCircle () {
    sqrtCircle = Math.round(Math.PI*(r**2));
    return sqrtCircle;
};
countSqrtCircle(r);
console.log(`Площа кола з радіусом R ${r} = ${sqrtCircle}`);
document.write(`<p>Площа кола з радіусом R ${r} = ${sqrtCircle}</p>`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderVolume = 0;
let hc = prompt('Введіть висоту циліндра');
let rc = prompt('Введіть радіус циліндра');

function countCilVol () {
    cylinderVolume = Math.round(Math.PI * rc**2 * hc);
    return cylinderVolume;
}
countCilVol(hc, rc);
console.log(`Об'єм циліндра з радіусом R ${rc} та висотою H ${hc} = ${cylinderVolume}`);
document.write(`<p>Об'єм циліндра з радіусом R ${rc} та висотою H ${hc} = ${cylinderVolume}</p>`);

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 'string', true, 55];

function getArr () {
    document.write('<ol>');
    for (let argument of arguments) {
        for (let j = 0; j < argument.length; j++) {
            const argumentElement = argument[j];
            console.log('argumentElement', argumentElement);
            document.write(`<li>${argumentElement}</li>`);
        }
        console.log('argument', argument);
    };
    document.write('</ol>')
};
getArr(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let textPar = prompt('Введіть будьякий текст');

function par () {
    let p = document.createElement('P');
    p.className = 'active';
    for (let argument of arguments) {
        p.innerText = argument;
    }
    document.body.append(p);
}
par(textPar);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let textLi = prompt('Введіть будьякий текст');

function createUl() {
    let ul = document.createElement('UL');
    document.body.append(ul);
    for (let i = 0; i < 3; i++) {
        let li = document.createElement('LI');
        ul.append(li);
        for (let argument of arguments) {
            li.innerText = argument;
        };
    };
};

createUl(textLi);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let text = prompt('Введіть будьякий текст');
let numLi = prompt('Введіть кількість LI');

function creatOl() {
    let ul = document.createElement('UL');
    document.body.append(ul);
    for (let i = 0; i < numLi; i++) {
        let li = document.createElement('LI');
        ul.append(li);
        li.innerText = text;
    };
};

creatOl(text, numLi);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrPrim = ['JS', 1996, true, 'ECMAScript'];

function getArrPrim () {
    let ol = document.createElement('OL');
    document.body.append(ol);
    for (let argument of arguments) {
        for (let i = 0; i < argument.length; i++) {
            let argumentElement = argument[i];
            let li = document.createElement('LI');
            ol.append(li);
            li.innerText = argumentElement;
        };
    };
};
getArrPrim(arrPrim);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrObj = [
    {
        id: 1,
        name: 'Alex',
        age: 37
    },
    {
        id: 2,
        name: 'Katya',
        age: 35
    },
    {
        id: 3,
        name: 'Nik',
        age: 10
    },
];

function getArrObj () {
    for (let i = 0; i < arguments.length; i++) {
        let argument = arguments[i];
        for (let j = 0; j < argument.length; j++) {
            let argumentElement = argument[j];
            let div = document.createElement('DIV');
            document.body.append(div);
            div.innerText = `Id ${argumentElement.id}, Name - ${argumentElement.name}, age - ${argumentElement.age}`;
        };
    };
};
getArrObj(arrObj);