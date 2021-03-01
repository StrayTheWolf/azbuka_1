export function creditSum (){
    let inputRange = document.getElementById('range-sum').value
    let inputPayment = document.getElementById('first-payment').value;
    let range = Number(inputRange)
    let payment = Number(inputPayment);
    let sum = range - payment;
    document.getElementById('credit-sum').insertAdjacentHTML('beforebegin',sum.toString());

    console.log(range)
    console.log(payment)
    console.log(sum)
    console.log(typeof range)
}