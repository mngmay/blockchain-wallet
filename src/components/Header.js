import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Heading>
      <h1>Lambda Wallet</h1>
      Displays "Lambda School" coins mined.
    </Heading>
  );
};

export default Header;

const Heading = styled.div`
  font-family: ${({ theme }) => theme.headerFont};
  font-size: ${({ theme }) => theme.smallFont};
  margin: 20px auto;
  width: 50%;
  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.hugeFont};
  }
`;
