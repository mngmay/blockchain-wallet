import React, { useState } from "react";
import TransactionsList from "./components/TransactionsList";
import UserForm from "./components/UserForm";

function App() {
  const [user, setUser] = useState({ id: "" });
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <UserForm
        user={user}
        setUser={setUser}
        setTransactions={setTransactions}
        setTotal={setTotal}
      />
      <h2>Total: {total}</h2>
      <TransactionsList user={user} transactions={transactions} />
    </div>
  );
}

export default App;
