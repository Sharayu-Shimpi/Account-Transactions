let balance = 0;

function deposit(amount) {
  if (amount > 0) {
    balance += amount;
    updateBalance();
  } else {
    alert("Please enter a valid positive amount.");
  }
}


function withdraw(amount) {
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    updateBalance();
  } else if (amount > balance) {
    alert("Insufficient funds.");
  } else {
    alert("Please enter a valid positive amount.");
  }
}


function updateBalance() {
  document.getElementById('balance').textContent = balance;
}


function handleDeposit() {
  const depositAmount = parseFloat(document.getElementById('depositAmount').value);
  deposit(depositAmount);
}


function handleWithdraw() {
  const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
  withdraw(withdrawAmount);
}

