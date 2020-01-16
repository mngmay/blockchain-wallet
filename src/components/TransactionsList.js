import React from "react";

const TransactionsList = ({ transactions, user }) => {
  return (
    <div>
      <h2>{user.id ? user.id : "User"}'s Transactions</h2>
      {transactions.forEach(t => (
        <div>Test</div>
      ))}
    </div>
  );
};

export default TransactionsList;
