const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


const firstname = 'Sirui';
const place = 'theatre';
const birth = 2006;
const now = 2025;
const gender = "girl";
console.log(`I'm ${firstname}, a ${now - birth} years old ${gender} whose favourite place is ${place}.`);
const age = now - birth;

if(age >= 18) {
    console.log("she can go to college.");
} else {
    console.log("underage");
}

const favourite = 5;  //Number强制数字转换，prompt弹出弹窗询问
console.log(favourite);

if (favourite != 42) console.log("why not the ultimate answer?");

//task3
const avedolphin = (96 + 108 + 89) / 3;
const avekoala = (88 + 91 + 110) / 3;

if (avedolphin >= 100 || avekoala >= 100) {
    if (avedolphin === avekoala && avedolphin >= 100 && avekoala >= 100) {
        console.log("draw");
    } else {
        const winner = avedolphin > avekoala ? "dolphin" : "koala";
        console.log(`${winner}`);
    }
} else {
    console.log("No winner");
}

//task4
const bill = Number(prompt("What's the total number for your bill today?"));
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);