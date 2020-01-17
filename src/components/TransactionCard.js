import React from "react";
import styled from "styled-components";

const TransactionCard = ({ transaction, user }) => {
  let sender = user.id === transaction.sender;
  return (
    <Card sender={sender}>
      <div>Sender: {transaction.sender}</div>
      <div>Recipient: {transaction.recipient}</div>
      <div style={sender ? { color: "red" } : { color: "green" }}>
        Amount: {transaction.amount} coins
      </div>
    </Card>
  );
};

export default TransactionCard;

const Card = styled.div`
  font-size: ${({ theme }) => theme.smallFont};
  border: 1px solid ${props => (props.sender ? "red" : "green")};
  width: 200px;
  padding: 2rem;
  margin: 1rem;
`;
