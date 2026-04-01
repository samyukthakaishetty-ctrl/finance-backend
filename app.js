const express = require("express");
const app = express();

app.use(express.json());

// USERS (dummy)
let users = [];

// RECORDS (dummy)
let records = [];

// Add user
app.post("/add-user", (req, res) => {
  users.push(req.body);
  res.send("User added");
});

// Add record
app.post("/add-record", (req, res) => {
  records.push(req.body);
  res.send("Record added");
});

// View records
app.get("/records", (req, res) => {
  res.json(records);
});

// Dashboard
app.get("/summary", (req, res) => {
  let income = 0, expense = 0;

  records.forEach(r => {
    if (r.type === "income") income += r.amount;
    else expense += r.amount;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    balance: income - expense
  });
});

app.listen(5000, () => console.log("Server running"));