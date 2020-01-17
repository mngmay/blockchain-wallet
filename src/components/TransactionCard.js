import React from "react";

const TransactionCard = ({ transaction, user }) => {
  let sender = user.id === transaction.sender;
  return (
    <div>
      <div>Sender: {transaction.sender}</div>
      <div>Recipient: {transaction.recipient}</div>
      <div style={sender ? { color: "red" } : { color: "green" }}>
        Amount: {transaction.amount} coins
      </div>
    </div>
  );
};

export default TransactionCard;
