function calculateTax(income, expenses) {
    if (income < 0 || expenses< 0 || expenses> income){
        return "Invalid Input";
        }
const difference = income - expenses;
const tax = difference * 0.20;
return tax;
}
// let result = calculateTax(10000, 3000);
// let result1 = calculateTax(34000, 1753);
// let result2 = calculateTax(5000, 1500);
// let result3 = calculateTax(7000, 7000);
// let result4 = calculateTax(-5000, 2000);
// let result5 = calculateTax(6000, -1500);
// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

function sendNotification(email) {
    if (!email.includes('@') ||email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
        return "Invalid Email";
    }
    
    const [username, domain] = email.split('@');
    
    const notification = `${username} sent you an email from ${domain}`;
    
    return notification;
}
// let message = sendNotification("zihad@gmail.com");
// console.log(message);
// let message1 = sendNotification("farhan34@yahoo.com");
// console.log(message1);
// let message2 = sendNotification("nadim.naem5@outlook.com");
// console.log(message2);
// let message3 = sendNotification("fahim234.hotmail.com");
// console.log(message3);
// let message4 = sendNotification("sadia8icloud.com");
// console.log(message4);

function checkDigitsInName(name) {
if(typeof name !== 'string'){
    return 'Invalid Input'
}

}
// let result = checkDigitsInName("Raj123");
// console.log(result)
// let result1 = checkDigitsInName("n9ayeem");
// console.log(result1)
// let result2 = checkDigitsInName("e1mu3");
// console.log(result2)
// let result3 = checkDigitsInName("Suman");
// console.log(result3)
// let result4 = checkDigitsInName("Name2024");
// console.log(result4)
// let result5 = checkDigitsInName("!@#");
// console.log(result5)
// let result6 = checkDigitsInName(["Raj"]);
// console.log(result6)


/*function signature/sample */
function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || obj === null){
        return 'Invalid Input'
    }
    const { name, testScore, schoolGrade, isFFamily } = obj;
    if(typeof name !== "string" || typeof testScore !== "number" || typeof schoolGrade !== "number" ||typeof isFFamily !== "boolean" || testScore < 0 || testScore > 50 || schoolGrade < 0 || schoolGrade > 30 ){
        return "Invalid Input"
    }
    let finalResult = testScore + schoolGrade;
    
    if (isFFamily) {
        finalResult += 20;
    }
    return finalResult >= 80;
}
// let chance = calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  });
// console.log(chance);
// let chance1 = calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false });
// console.log(chance1);
// let chance2 = calculateFinalScore("hello");
// console.log(chance2);
// let chance3 = calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  });
// console.log(chance3);


function  waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTimes) === false|| typeof serialNumber !== "number"){
        return "Invalid Input"
    }
    let avg = 0;
    for(let num of waitingTimes){
        avg += num;
    }
    }
    // let time = waitingTime( [3,5,7,4,3,2,9], 10);
    // console.log(time);
    // let time1 = waitingTime( [13, 2], 6);
    // console.log(time1);
    // let time2 = waitingTime( [13, 2, 6, 7, 10], 6);
    // console.log(time2);
    // let time3 = waitingTime( [6], 4);
    // console.log(time3);
    // let time4 = waitingTime( 7 , 10);
    // console.log(time4);
    // let time5 = waitingTime( "[6,2]", 9);
    // console.log(time5);
    // let time6 = waitingTime( [7, 8, 3, 4, 5], "9");
    // console.log(time6);


