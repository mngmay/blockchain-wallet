import React, { useEffect } from "react";
import axios from "axios";

const UserForm = ({
  user,
  setUser,
  setBlocks,
  blocks,
  transactions,
  setTransactions
}) => {
  console.log("blocks", blocks);
  console.log("transactions", transactions);

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
            return block.transactions;
          })
        ]);
        console.log("data", res.data);
      })
      .catch(err => console.log("Error:", err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="User">User:</label>
      <input
        type="text"
        name="id"
        required
        value={user.id}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default UserForm;
