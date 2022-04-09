import { useState, useEffect } from "react";
import { generateMnemonic } from "bip39";
import { Wallet, providers } from "ethers";
import "./App.css";

function App() {
  const [mnemonic, setMnemonic] = useState("");
  const [mnemonicInput, setMnemonicInput] = useState("");
  const [wallet, setWallet] = useState()
  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState({
    to: "",
    
  })

  useEffect(() => {
    window.ethersProvider = new providers.InfuraProvider("rinkeby")
  }, [])

  useEffect(() => {
    if (wallet) {
      window.ethersProvider.getBalance(wallet.address).then(balance => {
        setBalance(balance)
      })
    }
  }, [wallet])

  function genreateNewMnemonic() {
    setMnemonic(generateMnemonic());
  }

  function createWalletFromMnemonic() {
    let walletCreate = Wallet.fromMnemonic(mnemonic ? mnemonic : mnemonicInput);
    walletCreate = {...walletCreate, provider: window.ethersProvider}
    setWallet(walletCreate)
  }

  return (
    <div className="App">
      <h3>Generate Mnemonic for Wallet</h3>
      <button onClick={genreateNewMnemonic}>Generate</button>
      {mnemonic ? (
        <div>
          <div>Your Mnemonic: {mnemonic}</div>
        </div>
      ) : null}

      <p>Or import Wallet using Mnemonic</p>
      <input value={mnemonicInput} onChange={(e) => setMnemonicInput(e.target.value)} />

      <button onClick={createWalletFromMnemonic}>Create Wallet</button>
      <div>Your wallet information</div>
      {wallet ? (
        <div>
          <h4>Wallet Address: {wallet.address}</h4>
          <p>Balance: {balance.toString()}</p>
          <div>
            <h3>Send Transaction</h3>
            <p>To: </p>
            <input />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
