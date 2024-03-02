
//  task number 1

// var drinks = 1000;

//  if ( drinks  < 500){
//     console.log('free for coke');
//  }
//  else{
//     console.log('you can bay 30tk');
//  }

//  task number 2

const weight = 35;

if  (weight < 18){
    console.log(' you are underwight');
    
}
else if ( weight >= 18 && weight <= 24 ){
    console.log('you are normal');

}
else if ( weight>= 25 && weight <= 30){
    console.log('you are overweight');
}

else{
    console.log('you are obese');
}


// task number 3


// let A = 90-100;
// let B = 80-89;
// let c = 70-79;
// let d = 60-69;
// let f = 0-59;



function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } 
    else if (score >= 80 && score <= 89) {
        return 'B';
    } 
    else if (score >= 70 && score <= 79) {
        return 'C';
    } 
    else if (score >= 60 && score <= 69) {
        return 'D';
    } 
    else if (score >= 0 && score <= 59) {
        return 'F';
    } 
}





// task number 4

const money = 100;


if ( money > 80 ){
    console.log('then go for lunch');

}
else{
    if (money >= 80 || money > 60){
        console.log(' Good luck next time');

    }
    else{
        if(money >= 60){
            console.log(' keep your friend message unseen');
        
        }
        else{
            if (money >= 40){
                console.log('block you');

            }
        }

    }
}
