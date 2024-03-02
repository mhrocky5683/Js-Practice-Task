// 17_5 Multi Level If-Else If-Else Condition
// .................................

const price = 1500;

if(price>= 5000){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);

}
else if(price > 2000){
    const discount = price * 5 /100;
    const payAmount =price - discount;
    console.log(payAmount);
}

else{
    console.log (price);
}


