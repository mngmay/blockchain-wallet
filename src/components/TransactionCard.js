import React from "react";

const TransactionCard = ({ transaction }) => {
  return (
    <div>
      <div>Sender: {transaction.sender}</div>
      <div>Recipient: {transaction.recipient}</div>
      <div>Amount: {transaction.amount} coins</div>
    </div>
  );
};

export default TransactionCard;
