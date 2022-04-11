import { useState, useEffect } from "react";
import { generateMnemonic } from "bip39";
import { Wallet, providers, utils } from "ethers";

import Header from "./containers/Header/Header";
import "./App.css";

function App() {
  const [mnemonic, setMnemonic] = useState("");
  const [mnemonicInput, setMnemonicInput] = useState("");
  const [wallet, setWallet] = useState();
  const [balance, setBalance] = useState(0);
  const [transaction, setTransaction] = useState({
    to: "",
    value: 0,
  });

  const dummy =
    "peasant horror box announce galaxy excess put enhance require mesh endless advice";

  useEffect(() => {
    window.ethersProvider = new providers.InfuraProvider("rinkeby");
  }, []);

  useEffect(() => {
    if (wallet) {
      window.ethersProvider.getBalance(wallet.address).then((balance) => {
        setBalance(balance);
      });
    }
  }, [wallet]);

  function genreateNewMnemonic() {
    setMnemonic(generateMnemonic());
  }

  function createWalletFromMnemonic() {
    let walletCreate = Wallet.fromMnemonic(mnemonic ? mnemonic : mnemonicInput);
    setWallet(walletCreate);
  }

  function handleTransactionChange(e) {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  }

  async function sendTransaction() {
    if (transaction.to && transaction.value > 0) {
      let tx = {
        ...transaction,
        value: utils.parseEther(transaction.value),
      };

      await wallet.signTransaction(tx);
      let walletInstance = wallet.connect(window.ethersProvider);
      await walletInstance.sendTransaction(tx);
    }
  }

  return (
    <div className="App">
      <Header />
      <h3>Generate Mnemonic for Wallet</h3>
      <button onClick={genreateNewMnemonic}>Generate</button>
      {mnemonic ? (
        <div>
          <div>Your Mnemonic: {mnemonic}</div>
        </div>
      ) : null}

      <p>Or import Wallet using Mnemonic</p>
      <input
        value={mnemonicInput}
        onChange={(e) => setMnemonicInput(e.target.value)}
      />

      <button onClick={createWalletFromMnemonic}>Create Wallet</button>
      <div>Your wallet information</div>
      {wallet ? (
        <div>
          <h4>Wallet Address: {wallet.address}</h4>
          <p>Balance: {balance.toString()}</p>
          <div>
            <h3>Send Transaction</h3>
            <p>To: </p>
            <input
              value={transaction.to}
              name="to"
              onChange={handleTransactionChange}
            />
            <p>Value: </p>
            <input
              value={transaction.value}
              name="value"
              onChange={handleTransactionChange}
            />
          </div>
          <button onClick={sendTransaction}>Send</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
