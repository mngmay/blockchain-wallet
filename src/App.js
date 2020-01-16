import React, { useState } from "react";
import TransactionsList from "./components/TransactionsList";
import UserForm from "./components/UserForm";

function App() {
  const [user, setUser] = useState({ id: "" });
  const [blocks, setBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="App">
      <UserForm
        user={user}
        setUser={setUser}
        blocks={blocks}
        setBlocks={setBlocks}
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <TransactionsList user={user} transactions={transactions} />
    </div>
  );
}

export default App;
