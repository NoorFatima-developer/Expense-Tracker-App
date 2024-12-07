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
    { id:1, text: "Salaray", amount: 300},
    { id:2, text: "Groceries", amount: -100},
    { id:3, text: "Rent", amount: -500},
    { id:4, text: "Credit Card", amount: 250}
]

let transactions = dummyTransactions;

function addTransactionDOM(transaction){
    const sign = transaction.amount < 0 ? "-" : "+";

    const item = document.createElement("li");
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");
    // Math.abs ka mtlb hai k aghr number "-" b hai tb b wo "+" values hi return kryga
    item.innerHTML = `
    ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
    <button class = "delete-btn" onclick = "">X</button>
    `
    list.appendChild(item);
}

function updateValues(){
    // sari amounts ko lek araha hai and onko map k throught 1 new array m dal rha hai...
    const amounts = transactions.map(transaction => transaction.amount);
    // sari amounts ko add kr rha hai...
    const total = amounts.reduce((acc,item) => (acc +=item), 0).toFixed(2);
    // + amount ko filter kr rha hai...
    const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item), 0).toFixed(2);
    // - amount ko filter kr rha hai...
    const expense = amounts.tofilter(item => item < 0).reduce((acc,item) => (acc += item), 0) * 1;
}

function displayTransactions() {
    list.innerHTML = ""; // Clear the list before adding items
    transactions.forEach(addTransactionDOM);
}

displayTransactions(transactions);

// addTransactionDOM(transactions);