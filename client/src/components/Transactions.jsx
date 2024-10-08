import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";


import { shortenAddress } from "../utls/shortenAddress";

const Transactions = () => {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
    </div>
  );
}

export default Transactions;
