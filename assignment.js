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
const digitChecking = /\d/;  // RegExp
return digitChecking.test(name);
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

