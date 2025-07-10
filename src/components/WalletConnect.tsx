import { useState } from "react";
import { ethers } from "ethers";

const WalletConnect = ({ onConnect }: { onConnect: (provider: ethers.BrowserProvider, address: string) => void }) => {
  const [address, setAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      alert("MetaMask is required!");
      return;
    }
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    setAddress(accounts[0]);
    onConnect(provider, accounts[0]);
  };

  return (
    <div className="my-4">
      {address ? (
        <div className="text-green-700 font-semibold">Wallet: {address.slice(0, 6)}...{address.slice(-4)}</div>
      ) : (
        <button onClick={connectWallet} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;
