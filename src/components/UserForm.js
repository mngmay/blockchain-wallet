import React, { useEffect } from "react";
import axios from "axios";

const UserForm = ({ user, setUser, setTotal, setTransactions }) => {
  function handleChange(e) {
    const updatedUser = {
      ...user,
      [e.target.name]: e.target.value
    };
    setUser(updatedUser);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("http://localhost:5000/chain")
      .then(res => {
        setTransactions([
          ...res.data.chain.flatMap(block => {
            return block.transactions.filter(
              t => t.recipient === user.id || t.sender === user.id
            );
          })
        ]);

        let wallet = [
          ...res.data.chain.flatMap(block => {
            return block.transactions.filter(
              t => t.recipient === user.id || t.sender === user.id
            );
          })
        ].map(t => (t.recipient === user.id ? t.amount : t.amount * -1));

        setTotal(wallet.reduce((acc, curr) => acc + curr));

        console.log("wallet", wallet);
        console.log("data", res.data);
      })
      .catch(err => console.log("Error:", err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        required
        value={user.id}
        onChange={handleChange}
        placeholder="id"
      />
      <button>Submit</button>
    </form>
  );
};

export default UserForm;
