import React, { useState } from "react";
import TransactionsList from "./components/TransactionsList";
import UserForm from "./components/UserForm";

function App() {
  const [user, setUser] = useState({ id: "" });
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="App">
      <UserForm
        user={user}
        setUser={setUser}
        setTransactions={setTransactions}
      />
      <TransactionsList user={user} transactions={transactions} />
    </div>
  );
}

export default App;
