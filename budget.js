document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expenseForm');
    const incomeForm = document.getElementById('incomeForm');
    const investmentForm = document.getElementById('investmentForm');
  
    const expenseList = document.getElementById('expenseList');
    const incomeList = document.getElementById('incomeList');
    const investmentList = document.getElementById('investmentList');
  
    const expenseTotal = document.getElementById('expenseTotal');
    const incomeTotal = document.getElementById('incomeTotal');
    const investmentTotal = document.getElementById('investmentTotal');
  
    let expenses = [];
    let incomes = [];
    let investments = [];
  
    function renderExpenses() {
      expenseList.innerHTML = '';
      let total = 0;
      expenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `${expense.name}: $${expense.amount}`;
        expenseList.appendChild(li);
        total += expense.amount;
      });
      expenseTotal.textContent = `Total Expenses: $${total}`;
    }
  
    function renderIncomes() {
      incomeList.innerHTML = '';
      let total = 0;
      incomes.forEach(income => {
        const li = document.createElement('li');
        li.textContent = `${income.name}: $${income.amount}`;
        incomeList.appendChild(li);
        total += income.amount;
      });
      incomeTotal.textContent = `Total Incomes: $${total}`;
    }
  
    function renderInvestments() {
      investmentList.innerHTML = '';
      let total = 0;
      investments.forEach(investment => {
        const li = document.createElement('li');
        li.textContent = `${investment.name}: $${investment.amount}`;
        investmentList.appendChild(li);
        total += investment.amount;
      });
      investmentTotal.textContent = `Total Investments: $${total}`;
    }
  
    expenseForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('expenseName').value;
      const amount = parseFloat(document.getElementById('expenseAmount').value);
      if (name && amount) {
        expenses.push({ name, amount });
        renderExpenses();
        expenseForm.reset();
      }
    });
  
    incomeForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('incomeName').value;
      const amount = parseFloat(document.getElementById('incomeAmount').value);
      if (name && amount) {
        incomes.push({ name, amount });
        renderIncomes();
        incomeForm.reset();
      }
    });
  
    investmentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('investmentName').value;
      const amount = parseFloat(document.getElementById('investmentAmount').value);
      if (name && amount) {
        investments.push({ name, amount });
        renderInvestments();
        investmentForm.reset();
      }
    });
  });
  