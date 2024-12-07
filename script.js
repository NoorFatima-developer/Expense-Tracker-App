const balance = document.getElementById('balance');
const money_plus = document.getElementById('money_plus');
const money_minus = document.getElementById('money_minus');
const list = document.getElementById('list');
const delete_btn = document.getElementById('delete-btn');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const btn = document.getElementById('btn');

const dummyTransactions = [
    { id:2, text: "Salaray", amount: 300},
    { id:3, text: "Groceries", amount: -100},
    { id:4, text: "Rent", amount: -500},
    { id:5, text: "Credit Card", amount: 250}
]

let transactions = dummyTransactions;

function addTransactionDOM(transaction){
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElemen("li");
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");
    item.innerHTML = `
    $(transaction.text)<span>${sign}${Math.abs(transaction.amount)}</span>
    
    `
}