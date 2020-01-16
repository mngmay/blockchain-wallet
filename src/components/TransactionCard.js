import React from "react";

const TransactionCard = ({ transaction }) => {
  return (
    <div>
      <div>{transaction.sender}</div>
      <div>{transaction.recipient}</div>
      <div>{transaction.amount}</div>
    </div>
  );
};

export default TransactionCard;
