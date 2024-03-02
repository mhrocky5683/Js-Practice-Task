// 17_7 (Advanced )If-Else Shorthand Ternary Operator

const age = 20;

// age >=18 ? console.log ('vote dio'): console.log('ghum thako');

let price = 500;
const leader = false;

if (leader === true){
    price = 0;
}
else{
    price = price + 100;

}
// console.log (price);

price =  leader === false ? 0 : price + 100;

