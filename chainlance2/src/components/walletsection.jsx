import { useState } from "react";

const Wallet = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [status, setStatus] = useState("");

 
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const walletAddress = accounts[0];
        setWalletAddress(walletAddress);
        setStatus("Wallet connected!");

       
        handleWalletLogin(walletAddress);
      } catch (error) {
        console.error("Wallet connection failed:", error);
        setStatus("Failed to connect wallet");
      }
    } else {
      alert("Please install Metamask!");
    }
  };

  
  const handleWalletLogin = async (walletAddress) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet_address: walletAddress }),
      });

      const data = await response.json();
      console.log("Giriş başarılı:", data);
      setStatus(`Login successful for wallet: ${walletAddress}`);
    } catch (error) {
      console.error("Giriş hatası:", error);
      setStatus("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Connect Your Wallet</h2>

        {walletAddress ? (
          <div>
            <p className="text-green-600 font-medium">Wallet Connected:</p>
            <p className="break-words">{walletAddress}</p>
            <p className="mt-4 text-sm text-gray-500">{status}</p>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default Wallet;
