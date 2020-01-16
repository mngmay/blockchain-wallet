import React from "react";
import TransactionCard from "./TransactionCard";

const TransactionsList = ({ transactions, user }) => {
  console.log("TRANSACTIONS", transactions);
  return (
    <div>
      <h2>{user.id ? user.id : "User"}'s Transactions</h2>
      {transactions.map(t => {
        console.log(t, user);
        return (
          (t.recipient === user.id || t.sender === user.id) && (
            <TransactionCard transaction={t} />
          )
        );
      })}
    </div>
  );
};

export default TransactionsList;
