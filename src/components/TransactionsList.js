import React, { useState } from "react";
import TransactionCard from "./TransactionCard";

const TransactionsList = ({ transactions, user }) => {
  return (
    <div>
      <h2>{user.id ? user.id : "User"}'s Transactions</h2>
      {transactions.map(t => {
        return <TransactionCard transaction={t} />;
      })}
    </div>
  );
};

export default TransactionsList;
