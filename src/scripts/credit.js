export function creditSum (){
    let rangeSum = document.getElementById('range-sum').value;
    let firstPayment = document.getElementById('first-payment').value;
    let showSum = rangeSum - firstPayment;
    document.getElementById('credit-sum').insertAdjacentHTML('beforebegin',showSum.toString());
}