let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let editExpense = -1;

const form = document.getElementById("expenseForm");
const amount = document.getElementById("amount");
const description = document.getElementById("description");
const category = document.getElementById("category");
const submitBtn = document.getElementById("submitBtn");
const expenseList = document.getElementById("expenseList");

// save expenses
function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// add & update the form expense
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let expense = {
        amount: amount.value,
        description: description.value,
        category: category.value
    }

    if (editExpense === -1) {
        expenses.push(expense);
    } else {
        expenses[editExpense] = expense;
        editExpense = -1;
        submitBtn.textContent = "Add Expense";
    }

    saveExpenses();
    form.reset();
    displayExpenses();
});

function displayExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach(function (expense, index) {
        let li = document.createElement("li");

        li.appendChild(document.createTextNode(
            expense.amount + "-" + expense.description + "-" + expense.category + " "
        ));

        // delete btn
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Expense";

        deleteBtn.addEventListener("click", function () {
            expenses.splice(index, 1);

            if (editExpense === index) {
                editExpense = -1;
                form.reset();
                submitBtn.textContent = "Add Expense";
            } else if (editExpense > index) {
                editExpense--;
            }

            saveExpenses();
            displayExpenses();
        });

        // edit btn
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit Expense";

        editBtn.addEventListener("click", function () {
            // expenses.splice(index, 1);

            amount.value = expense.amount;
            description.value = expense.description;
            category.value = expense.category;

            editExpense = index;
            submitBtn.textContent = "Update Expense";

        });

        li.appendChild(deleteBtn);
        li.appendChild(document.createTextNode(" "));
        li.appendChild(editBtn);

        expenseList.appendChild(li);
    });
}

// Initial render of saved expenses on page load
displayExpenses();