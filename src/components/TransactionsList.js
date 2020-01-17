import React from "react";
import TransactionCard from "./TransactionCard";
import styled from "styled-components";

const TransactionsList = ({ transactions, user }) => {
  return (
    <Transactions>
      {transactions.map(t => {
        return <TransactionCard transaction={t} user={user} />;
      })}
    </Transactions>
  );
};

export default TransactionsList;

const Transactions = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
